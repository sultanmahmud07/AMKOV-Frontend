import RegisterForm from "@/components/auth/register-form";
import Image from "next/image";

const RegisterPage = () => {
  return (
    // 1. FULL SCREEN LAYOUT WITH IMMERSIVE BACKGROUND
    <div className="min-h-screen w-full flex items-center justify-center relative bg-[#023047]">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          // UPDATE THIS PATH TO YOUR NEW BACKGROUND IMAGE
          src="/auth/register-bg-image.jpg" 
          alt="AMKOV Technology Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        {/* Abstract Vector Overlay for texture */}
        <div className="absolute inset-0 bg-[url('/vectors/pattern.svg')] opacity-10 pointer-events-none"></div>
      </div>

      {/* 2. CENTERED GLASSMORPHISM CARD */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16 flex justify-center lg:justify-end">
        
        {/* Optional decorative text side (Visible only on desktop) */}
        <div className="hidden lg:flex flex-col justify-center flex-1 pr-20 text-white pb-20">
            <span className="text-[#3A9AFF] font-bold tracking-widest uppercase text-sm mb-3">AMKOV imaging</span>
            <h1 className="text-5xl xl:text-6xl font-extrabold tracking-tighter leading-[1.1] mb-6">
                Capture Your Vision. <br />Join Us.
            </h1>
            <p className="text-slate-300 text-lg max-w-lg font-medium leading-relaxed">
                Create an account to access exclusive firmware updates, track global bulk orders, and manage your specialized imaging gear.
            </p>
        </div>

        {/* The Form Card */}
        <div className="w-full max-w-[550px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-8 md:p-12 border border-gray-100">
          
          {/* Mobile Header (Visible only on smaller screens) */}
          <div className="text-center lg:text-left mb-10 lg:hidden border-b border-gray-100 pb-6">
            <h2 className="text-3xl font-extrabold text-[#023047] tracking-tight mb-2">
              Create an Account
            </h2>
            <p className="text-gray-500 text-sm font-medium">
              Enter your details to set up your profile.
            </p>
          </div>

          <RegisterForm />
          
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;