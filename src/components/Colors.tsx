import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function Colors() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colors = [
    {
      name: 'Quantum Blue',
      hex: '#1972d2',
      rgb: '25, 114, 210',
      class: 'bg-blue-400',
      glowClass: 'hover:glow-blue',
      borderClass: 'border-blue-400/30 hover:border-blue-400',
    },
    {
      name: 'Quantum Lime',
      hex: '#aaff4f',
      rgb: 'rgb(170, 255, 79)',
      class: 'bg-lime-400',
      glowClass: 'hover:glow-lime',
      borderClass: 'border-lime-400/30 hover:border-lime-400',
    },
    {
      name: 'Quantum Yellow',
      hex: '#ffdd70',
      rgb: 'rgb(255, 221, 112)',
      class: 'bg-yellow-400',
      glowClass: 'hover:glow-yellow',
      borderClass: 'border-yellow-400/30 hover:border-yellow-400',
    },
    {
      name: 'Quantum Purple',
      hex: '#8672ff',
      rgb: 'rgb(134, 114, 255)',
      class: 'bg-purple-400',
      glowClass: 'hover:glow-purple',
      borderClass: 'border-purple-400/30 hover:border-purple-400',
    },
    {
      name: 'Quantum Cyan',
      hex: '#00ddee',
      rgb: 'rgb(0, 221, 238)',
      class: 'bg-cyan-400',
      glowClass: 'hover:glow-cyan',
      borderClass: 'border-cyan-400/30 hover:border-cyan-400',
    },
  ];

  const copyToClipboard = (text: string, colorName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(colorName);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <section id="colors" className="py-32 px-6 bg-[#0a0a0f]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 quantum-text-gradient">
            Color Palette
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The quantum spectrum - a carefully curated palette of vibrant colors
            designed to enhance your coding experience and reduce visual
            fatigue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colors.map((color, index) => (
            <div
              key={color.name}
              className={`group relative bg-[#0a0a0f] border ${color.borderClass} rounded-2xl p-6 transition-all duration-500 ${color.glowClass} cursor-pointer transform hover:-translate-y-2`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-full h-32 ${color.class} rounded-xl mb-6 animate-glow-pulse`}
              ></div>

              <h3 className="text-2xl font-bold mb-4 text-white">
                {color.name}
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">HEX</div>
                    <div className="text-sm font-mono text-gray-300">
                      {color.hex}
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(color.hex, color.name + '-hex')
                    }
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {copiedColor === color.name + '-hex' ? (
                      <Check className="w-4 h-4 text-lime-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">RGB</div>
                    <div className="text-sm font-mono text-gray-300">
                      {color.rgb}
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(color.rgb, color.name + '-rgb')
                    }
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {copiedColor === color.name + '-rgb' ? (
                      <Check className="w-4 h-4 text-lime-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
