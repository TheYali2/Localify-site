import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            src="https://i.imagesup.co/images2/318849965ac7f2c16d0becffc50accb51e9968a5.png"
            alt="Localify Logo"
            className="w-10 h-10 rounded-full shadow-lg shadow-brand/20"
          />
          <span className="text-2xl font-bold tracking-tight text-white">Localify</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-spot-text hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#download"
            className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-transform duration-200"
          >
            <Download size={18} />
            Download
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-spot-card border-b border-gray-800 p-6 md:hidden flex flex-col gap-4 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-white py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#download"
            className="mt-4 flex justify-center items-center gap-2 bg-brand text-white px-6 py-3 rounded-full font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Download size={18} />
            Download Localify
          </a>
        </div>
      )}
    </nav>
  );
};