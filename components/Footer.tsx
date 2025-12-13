import React from 'react';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <img src="https://i.imagesup.co/images2/318849965ac7f2c16d0becffc50accb51e9968a5.png" alt="Logo" className="w-8 h-8 rounded-full" />
              <span className="text-xl font-bold text-white">Localify</span>
            </div>
            <p className="text-spot-text text-sm text-center md:text-left">
              © {new Date().getFullYear()} Localify. All rights reserved.
              <br />
              Developed with love for music.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="mailto:theyali@duck.com" className="text-spot-text hover:text-white transition-colors p-2 bg-[#181818] rounded-full" title="Contact Support">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};