import { Code2, Github, Mail, FileText } from 'lucide-react';
import logo from '../assets/quantum.png';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="contact"
      className="relative py-16 px-6 border-t border-white/10 bg-[#0a0a0f]/80 backdrop-blur-lg"
    >
      <div className="absolute inset-0 border-t-2 border-transparent bg-gradient-to-r from-blue-400 via-lime-400 via-yellow-400 via-purple-400 to-cyan-400 bg-clip-border opacity-20 blur-sm"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                <img src={logo} alt="" />
              </div>
              <span className="text-3xl font-bold quantum-text-gradient">
                Quantum
              </span>
            </div>
            <p className="text-gray-400 italic mb-4">
              Shine Divine in Every Line.
            </p>
            <p className="text-sm text-gray-500">
              Elevating developer experiences through beautiful, functional
              design.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <nav className="space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'why-quantum', label: 'About' },
                { id: 'colors', label: 'Colors' },
                { id: 'testimonials', label: 'Testimonials' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-400 hover:text-lime-400 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div id="download">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Connect & Download
            </h3>
            <div className="space-y-3">
              <a
                href="https://github.com/calebephrem/quantum-vscode"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>GitHub Repository</span>
              </a>
              <a
                href="mailto:quantumpandaprog@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Contact Us</span>
              </a>
              <a
                href="https://github.com/calebephrem/quantum-vscode/blob/main/LICENSE"
                className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300 group"
              >
                <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>License</span>
              </a>
            </div>

            <div className="mt-6">
              <a href="vscode:extension/CalebEphrem.quantum">
                <button className="w-full px-6 py-3 rounded-lg quantum-gradient text-white font-semibold hover:scale-105 transition-transform duration-300 hover:glow-cyan">
                  Download Theme
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Quantum Theme. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
