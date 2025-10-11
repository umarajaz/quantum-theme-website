import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/quantum.png';

export default function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(id);
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'why-quantum', label: 'Why Quantum' },
    { id: 'colors', label: 'Colors' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          <div className="w-10 h-10 rounded-lg flex items-center justify-center">
            <img src={logo} alt="" />
          </div>
          <span className="text-2xl font-bold quantum-text-gradient">
            Quantum
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium transition-all duration-300 hover:text-lime-400 hover:drop-shadow-[0_0_8px_rgba(163,230,53,0.8)] ${
                activeLink === link.id ? 'text-lime-400' : 'text-gray-300'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden text-white hover:text-lime-400 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-lg border-b border-white/10">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left text-base font-medium transition-all duration-300 hover:text-lime-400 hover:translate-x-2 transform ${
                  activeLink === link.id ? 'text-lime-400' : 'text-gray-300'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
