import { Zap, Sparkles, Eye } from 'lucide-react';
import { useTilt } from '../hooks/useTilt';

export default function WhyQuantum() {
  const performanceRef = useTilt<HTMLDivElement>();
  const beautyRef = useTilt<HTMLDivElement>();
  const clarityRef = useTilt<HTMLDivElement>();

  const features = [
    {
      ref: performanceRef,
      icon: Zap,
      title: 'Performance',
      description:
        'Optimized for speed and efficiency, Quantum Theme ensures your IDE stays responsive while looking stunning.',
      color: 'yellow',
      borderColor: 'border-yellow-400/30',
      hoverBorder: 'hover:border-yellow-400',
      bgGradient: 'from-yellow-500/10 to-yellow-600/5',
      iconBg: 'bg-yellow-400/20',
      iconColor: 'text-yellow-400',
      glowClass: 'hover:glow-yellow',
    },
    {
      ref: beautyRef,
      icon: Sparkles,
      title: 'Beauty',
      description:
        'Meticulously crafted with quantum-inspired colors that create a visually stunning and harmonious coding environment.',
      color: 'purple',
      borderColor: 'border-purple-400/30',
      hoverBorder: 'hover:border-purple-400',
      bgGradient: 'from-purple-500/10 to-purple-600/5',
      iconBg: 'bg-purple-400/20',
      iconColor: 'text-purple-400',
      glowClass: 'hover:glow-purple',
    },
    {
      ref: clarityRef,
      icon: Eye,
      title: 'Clarity',
      description:
        'Designed with contrast and readability in mind, making code easier to understand and reducing eye strain during long sessions.',
      color: 'cyan',
      borderColor: 'border-cyan-400/30',
      hoverBorder: 'hover:border-cyan-400',
      bgGradient: 'from-cyan-500/10 to-cyan-600/5',
      iconBg: 'bg-cyan-400/20',
      iconColor: 'text-cyan-400',
      glowClass: 'hover:glow-cyan',
    },
  ];

  return (
    <section id="why-quantum" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 quantum-text-gradient">
            Why Quantum?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Quantum Theme redefines developer aesthetics with vibrance, balance,
            and code clarity. Experience a workspace that inspires productivity
            and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={feature.ref}
              className={`group relative bg-gradient-to-br ${feature.bgGradient} border ${feature.borderColor} ${feature.hoverBorder} rounded-2xl p-8 ${feature.glowClass} cursor-pointer`}
              style={{
                transition:
                  'transform 0.1s ease-out, border-color 0.5s, box-shadow 0.5s',
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div
                className={`absolute inset-0 ${feature.iconBg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
              <div className="relative">
                <div
                  className={`w-16 h-16 rounded-xl ${feature.iconBg} flex items-center justify-center mb-6`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${feature.iconColor}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
