import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DownloadSection } from './components/Download';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-white selection:bg-brand selection:text-white min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FAQ />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;