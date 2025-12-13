import React from 'react';
import { Music, List, Disc, Settings } from 'lucide-react';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-[#121212] to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">See It In Action</h2>
          <p className="text-spot-text text-lg">Explore the beautiful interface designed for music lovers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="group relative rounded-xl overflow-hidden bg-[#181818] border border-white/5 aspect-video flex flex-col items-center justify-center hover:border-brand/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent"></div>
            <Music size={48} className="text-spot-text mb-4 opacity-50 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-spot-text text-sm font-medium uppercase tracking-wider">Main Player Interface</span>
            <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/5 rounded overflow-hidden">
              <div className="w-1/3 h-full bg-brand"></div>
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden bg-[#181818] border border-white/5 aspect-video flex flex-col items-center justify-center hover:border-brand/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 to-transparent"></div>
            <List size={48} className="text-spot-text mb-4 opacity-50 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-spot-text text-sm font-medium uppercase tracking-wider">Library View</span>
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden bg-[#181818] border border-white/5 aspect-video flex flex-col items-center justify-center hover:border-brand/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/5 to-transparent"></div>
            <Disc size={48} className="text-spot-text mb-4 opacity-50 group-hover:rotate-90 transition-transform duration-500" />
            <span className="text-spot-text text-sm font-medium uppercase tracking-wider">Album Art & Details</span>
          </div>

          <div className="group relative rounded-xl overflow-hidden bg-[#181818] border border-white/5 aspect-video flex flex-col items-center justify-center hover:border-brand/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/5 to-transparent"></div>
            <Settings size={48} className="text-spot-text mb-4 opacity-50 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-spot-text text-sm font-medium uppercase tracking-wider">Customization Settings</span>
          </div>

        </div>
      </div>
    </section>
  );
};