'use client';

import { useEffect, useState, useRef } from 'react';
import Script from 'next/script';
import { ChevronDown } from 'lucide-react';
import Cookies from 'js-cookie';

// Define your supported languages here. 
// Emojis are the most lightweight and reliable way to show flags!
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh-CN', name: 'Chinese', flag: '🇨🇳' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
];

const GoogleTranslate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          // Only load the languages we defined in our array
          includedLanguages: languages.map(l => l.code).join(','),
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };
  }, []);

  // Restore language from cookie on mount to persist selection across reloads
  useEffect(() => {
    const googtrans = Cookies.get('googtrans');
    if (googtrans) {
      const parts = googtrans.split('/');
      const langCode = parts[parts.length - 1];
      if (langCode) {
        const matched = languages.find(l => l.code === langCode);
        if (matched) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setSelectedLang(matched.code);
        }
      }
    }
  }, []);
  //Hello testing
  // Handle clicking outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Programmatically trigger the hidden Google Translate dropdown
  const handleLangChange = (langCode: string) => {
    setSelectedLang(langCode);
    setIsOpen(false);

    // Find the hidden Google select element
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change')); // Trigger the translation
    }
  };

  const currentLang = languages.find(l => l.code === selectedLang) || languages[0];

  return (
    <div className="relative inline-block w-full sm:w-auto text-left z-50" ref={dropdownRef}>
      <div id="google_translate_element" className="hidden"></div>
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between sm:justify-start w-full sm:w-auto gap-2 bg-[#f0f4f8] hover:bg-[#e2e8f0] text-[#475569] px-4 py-2 rounded-full text-sm font-semibold transition-colors border border-transparent shadow-sm"
      >
        <div className="flex items-center gap-2">
          <span className="text-base leading-none">{currentLang.flag}</span>
          <span>{currentLang.name}</span>
        </div>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* 3. Custom Dropdown Menu with Flags */}
      {isOpen && (
        <div className="absolute bottom-full mb-2 left-0 right-0 w-full sm:bottom-auto sm:top-full sm:mt-2 sm:mb-0 sm:left-[-5px] sm:right-auto sm:w-48 bg-white border border-gray-100 rounded-xl shadow-lg flex flex-col py-1 overflow-hidden transform origin-bottom sm:origin-top transition-all">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLangChange(lang.code)}
              className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-gray-50 ${selectedLang === lang.code ? 'text-[#3A9AFF] bg-[#3A9AFF]/5' : 'text-gray-600'
                }`}
            >
              <span className="text-lg leading-none">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}

    </div>
  );
};

export default GoogleTranslate;