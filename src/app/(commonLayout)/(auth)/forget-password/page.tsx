"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, KeyRound, Mail, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace this timeout with your actual API call / Server Action
    // await resetPasswordApi(email);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="py-10 md:py-20 bg-[#F4F7F9] flex flex-col items-center justify-center relative overflow-hidden px-4">
      
      {/* ========================================= */}
      {/* SUBTLE BACKGROUND VECTORS */}
      {/* ========================================= */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#3A9AFF]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#023047]/5 rounded-full blur-3xl pointer-events-none translate-y-1/3 translate-x-1/3"></div>

      {/* ========================================= */}
      {/* MAIN CARD */}
      {/* ========================================= */}
      <div className="relative z-10 w-full max-w-[440px]">
        
        {/* Back Link (Outside Card) */}
        <Link 
          href="/login" 
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#023047] transition-colors mb-6"
        >
          <ArrowLeft size={16} /> Back to Login
        </Link>

        <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              /* --- STATE 1: RECOVERY FORM --- */
              <motion.div 
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="p-8 md:p-10"
              >
                {/* Icon Header */}
                <div className="w-14 h-14 bg-[#F0F4F8] rounded-2xl flex items-center justify-center mb-6 border border-gray-100">
                  <KeyRound size={28} className="text-[#3A9AFF]" strokeWidth={1.5} />
                </div>
                
                <h1 className="text-2xl md:text-3xl font-extrabold text-[#023047] mb-3 tracking-tight">
                  Forgot Password?
                </h1>
                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8">
                  No worries, it happens to the best of us. Enter the email address associated with your account and we&apos;ll send you a reset link.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-bold text-[#023047]">
                      Email Address <span className="text-[#3A9AFF]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Mail size={18} />
                      </div>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="user@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-200 bg-gray-50 p-3.5 pl-10 rounded-xl text-sm outline-none focus:border-[#3A9AFF] focus:bg-white focus:ring-1 focus:ring-[#3A9AFF] transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !email}
                    className="w-full bg-[#023047] hover:bg-[#3A9AFF] text-white font-black py-4 mt-2 rounded-xl transition-all shadow-[0_4px_14px_rgba(2,48,71,0.15)] hover:shadow-[0_6px_20px_rgba(58,154,255,0.3)] disabled:opacity-70 disabled:cursor-not-allowed uppercase text-sm tracking-wider flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Sending Link...
                      </span>
                    ) : (
                      "Send Reset Link"
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              /* --- STATE 2: SUCCESS MESSAGE --- */
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 md:p-12 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 border border-emerald-100">
                  <CheckCircle2 size={40} className="text-emerald-500" strokeWidth={1.5} />
                </div>
                
                <h2 className="text-2xl font-extrabold text-[#023047] mb-3">
                  Check your mail
                </h2>
                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8">
                  We have sent a password recovery link to <br/>
                  <span className="text-[#023047] font-bold">{email}</span>
                </p>

                <div className="w-full flex flex-col gap-3">
                  <Link 
                    href="/login"
                    className="w-full bg-[#3A9AFF] hover:bg-blue-600 text-white font-black py-3.5 rounded-xl transition-colors text-sm uppercase tracking-wider block"
                  >
                    Return to Login
                  </Link>
                  <button 
                    onClick={() => {
                      setIsSuccess(false);
                      setEmail("");
                    }}
                    className="text-sm font-bold text-gray-500 hover:text-[#023047] py-2 transition-colors"
                  >
                    Didn&apos;t receive the email? Click to resend
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;