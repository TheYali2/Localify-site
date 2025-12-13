import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-white/10">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        {isOpen ? <ChevronUp className="text-brand" /> : <ChevronDown className="text-spot-text" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-spot-text leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How do I install Localify?",
      answer: "Download the installer for Windows from the section above. Run Localify Setup.exe and follow the on-screen instructions. Localify will be installed in seconds."
    },
    {
      question: "Which audio formats are supported?",
      answer: "Localify supports almost all music files seamlessly, including MP3, WAV, and OGG."
    },
    {
      question: "Does it work offline?",
      answer: "Yes! Localify is designed specifically for offline use. It plays files stored directly on your computer's hard drive, so no internet connection is required."
    },
    {
      question: "Is Localify free?",
      answer: "Absolutely. Localify is 100% free to download and use. There are no ads, subscriptions, or hidden fees."
    },
    {
      question: "Will it be available on Mac or Linux?",
      answer: "Localify is primarily a Windows-exclusive application. However, Linux users may be able to run it using Wine! There are no plans for a native Mac or Linux version."
    },
  ];

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};