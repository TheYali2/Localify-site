import React from 'react';
import { Download } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6 overflow-hidden">

      <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand/30 rounded-full blur-[128px] animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse-slow delay-1000"></div>

      <div className="relative z-10 max-w-4xl w-full text-center space-y-8">

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand-light text-sm font-medium animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
          </span>
          Version 1.0 Available Now
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Your Music. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-light to-blue-500">
            The Design You Love.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-spot-text max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Play your local music files in a modern, clean, and familiar interface. There are no ads & no internet required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#download"
            className="flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-brand/25"
          >
            <Download size={24} />
            Download for Windows
          </a>
        </div>

        <div className="mt-16 relative w-full max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="relative rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col animate-float bg-[#121212]">
            <img
              src="https://i.imagesup.co/images2/3685df94f354a020fd858153cf1a20f9d02bf58d.png"
              alt="Localify Interface"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
