import React from 'react';
import { FileAudio, WifiOff, Tags, Layout, ListMusic, Heart } from 'lucide-react';
import { Feature } from '../types';

const featuresData: Feature[] = [
  {
    id: '1',
    title: 'Wide Format Support',
    description: 'Play your entire music library. Localify supports almost all music files seamlessly.',
    icon: FileAudio,
  },
  {
    id: '2',
    title: 'Fully Offline',
    description: 'Your music lives on your computer. No internet needed, no buffering, no Ads.',
    icon: WifiOff,
  },
  {
    id: '3',
    title: 'Familiar Interface',
    description: 'A dark, modern design that feels like home. If you have used streaming services, you will feel right at home.',
    icon: Layout,
  },
  {
    id: '4',
    title: 'Smart Metadata',
    description: 'Localify reads embedded metadata to automatically display album art, artist names, and detailed track info.',
    icon: Tags,
  },
  {
    id: '5',
    title: 'Playlists & Exports',
    description: 'Create playlists and export them to a .txt file, complete with the playlist name, song count, and track list.',
    icon: ListMusic,
  },
  {
    id: '6',
    title: '100% Free',
    description: 'Created with passion for music. No subscriptions, no fees, and no hidden costs ever.',
    icon: Heart,
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#121212] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Why Localify?</h2>
          <p className="text-spot-text text-lg max-w-2xl mx-auto">
            Wanna Break From The Ads?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={feature.id}
              className="group p-8 bg-[#181818] rounded-xl hover:bg-[#282828] transition-all duration-300 transform hover:-translate-y-2 border border-white/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-[#121212] rounded-full flex items-center justify-center mb-6 text-brand group-hover:text-white group-hover:bg-brand transition-colors duration-300">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-spot-text leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};