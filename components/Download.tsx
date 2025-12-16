import React from 'react';
import { Download, Monitor } from 'lucide-react';

export const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] to-brand-dark/20"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
          Ready to Download Your Music?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Download Localify and start listening to your private collection in the interface it deserves.
        </p>

        <div className="bg-[#181818] p-8 rounded-2xl border border-white/5 shadow-2xl inline-block w-full max-w-lg">
          <div className="flex flex-col items-center justify-center gap-6">

            <div className="w-full space-y-4">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Monitor size={32} className="text-brand-light" />
                <span className="text-2xl font-bold text-white">Windows</span>
              </div>
              <button
                className="w-full py-4 px-6 bg-brand hover:bg-brand-dark text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ease-out hover:scale-105 shadow-lg shadow-brand/20"
                onClick={() => window.open('https://mega.nz/file/R7ohmLpA#oz6iRGemkwKPddsM679cfwY-no5-qwdIbOUgwJRGkvQ', '_blank')}
              >
                <Download size={20} />
                Download for Windows
              </button>
              <p className="text-xs text-spot-text">Version 1.0.0 | Localify Setup.exe | 64-bit</p>
            </div>

            <div className="w-full h-px bg-white/10 my-2"></div>

            <p className="text-sm text-red-400 font-medium">
              * Localify is exclusively available for Windows.
            </p>

          </div>
        </div>

        <div className="mt-12 flex justify-center gap-8 text-spot-text text-sm">
          <span className="flex items-center gap-2">✔ Virus Free</span>
          <span className="flex items-center gap-2">✔ No Bloatware</span>
          <span className="flex items-center gap-2">✔ 100% Free</span>
        </div>
      </div>
    </section>
  );
};
