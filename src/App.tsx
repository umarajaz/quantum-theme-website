import { useState } from 'react';
import {
  Code2,
  Zap,
  Palette,
  Sparkles,
  Terminal,
  Eye,
  Github,
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyQuantum from './components/WhyQuantum';
import Colors from './components/Colors';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime-400 rounded-full blur-[120px] animate-wave"></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-400 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="relative z-10">
        <Header />
        <Hero />
        <WhyQuantum />
        <Colors />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;
