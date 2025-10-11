import { Code2, Terminal, ChevronRight } from 'lucide-react';
import { useTilt } from '../hooks/useTilt';

export default function Hero() {
  const vscodeCardRef = useTilt<HTMLDivElement>();
  const zshCardRef = useTilt<HTMLDivElement>();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 quantum-text-gradient animate-pulse">
              Quantum Theme
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light italic">
              Shine Divine in Every Line.
            </p>
            <p className="text-lg text-gray-400 max-w-xl mb-8">
              Experience the next evolution of developer aesthetics. Quantum
              Theme brings vibrant colors, perfect contrast, and unmatched
              clarity to your coding environment.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="vscode:extension/CalebEphrem.quantum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-3 rounded-lg quantum-gradient text-white font-semibold hover:scale-105 transition-transform duration-300 hover:glow-cyan flex items-center gap-2">
                  Download
                  <ChevronRight className="w-5 h-5" />
                </button>
              </a>
              <a
                href="https://vscodethemes.com/e/CalebEphrem.quantum/quantum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-3 rounded-lg border-2 border-blue-400/50 text-blue-400 font-semibold hover:bg-blue-400/10 hover:glow-blue transition-all duration-300">
                  View Demo
                </button>
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            <div
              ref={vscodeCardRef}
              className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-2xl p-6 hover:border-blue-400 hover:glow-blue cursor-pointer"
              style={{
                transition:
                  'transform 0.1s ease-out, border-color 0.5s, box-shadow 0.5s',
              }}
            >
              <div className="absolute inset-0 bg-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-400/20 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-400">
                    VSCode Theme
                  </h3>
                </div>
                <p className="text-gray-400">
                  Transform your editor with quantum-inspired syntax
                  highlighting and a perfectly balanced color palette.
                </p>
              </div>
            </div>

            <div
              ref={zshCardRef}
              className="group relative bg-gradient-to-br from-lime-500/10 to-yellow-500/10 border border-lime-400/30 rounded-2xl p-6 hover:border-lime-400 hover:glow-lime cursor-pointer"
              style={{
                transition:
                  'transform 0.1s ease-out, border-color 0.5s, box-shadow 0.5s',
              }}
            >
              <div className="absolute inset-0 bg-lime-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-lime-400/20 flex items-center justify-center">
                    <Terminal className="w-6 h-6 text-lime-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-lime-400">
                    Zsh Theme
                  </h3>
                </div>
                <p className="text-gray-400">
                  Elevate your terminal experience with a sleek, informative
                  prompt that shines with quantum energy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
