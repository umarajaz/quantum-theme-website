import { Star } from 'lucide-react';
import { useTilt } from '../hooks/useTilt';

export default function Testimonials() {
  const testimonialRefs = [
    useTilt<HTMLDivElement>(),
    useTilt<HTMLDivElement>(),
    useTilt<HTMLDivElement>(),
    useTilt<HTMLDivElement>(),
    useTilt<HTMLDivElement>(),
    useTilt<HTMLDivElement>(),
  ];

  const testimonials = [
    {
      name: 'Caleb Ephrem',
      role: 'Full Stack Developer',
      feedback:
        'Quantum theme is the perfect fusion of clarity and vibe. Whether I’m deep in the terminal or tweaking UI details, this theme keeps me focused and inspired.',
      avatar: 'CE',
      gradient: 'from-blue-400 to-cyan-400',
      borderColor: 'border-blue-400/30',
    },
    {
      name: 'Abenezer Tegegne',
      role: '',
      feedback: "best theme I've seen so far",
      avatar: 'AT',
      gradient: 'from-lime-400 to-yellow-400',
      borderColor: 'border-lime-400/30',
    },
    {
      name: 'Hobxn',
      role: 'System Administrator / Junior Dev',
      feedback: 'looks very nice - Let me add it to my environment...',
      avatar: 'H',
      gradient: 'from-purple-400 to-pink-400',
      borderColor: 'border-purple-400/30',
    },
    {
      name: 'Fembread',
      role: '',
      feedback: 'This is my main theme from now on, so good.',
      avatar: 'F',
      gradient: 'from-yellow-400 to-orange-400',
      borderColor: 'border-yellow-400/30',
    },
    {
      name: 'Zweidi',
      role: '',
      feedback:
        'I will use this when I am doing refactors & enhancements on my quantum wave packet engine 😁, Looks rlly epic',
      avatar: 'Z',
      gradient: 'from-cyan-400 to-blue-400',
      borderColor: 'border-cyan-400/30',
    },
    {
      name: 'Colachovek',
      role: 'Full Stack Web Developer',
      feedback: 'Very good theme, Thank you for your effort.',
      avatar: 'C',
      gradient: 'from-purple-400 to-purple-600',
      borderColor: 'border-purple-400/30',
    },
  ];

  return (
    <section id="testimonials" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 quantum-text-gradient">
            Testimonials
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of developers who have elevated their coding
            experience with Quantum Theme.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              ref={testimonialRefs[index]}
              className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] border ${testimonial.borderColor} hover:border-opacity-100 rounded-2xl p-6 cursor-pointer`}
              style={{
                transition:
                  'transform 0.1s ease-out, border-color 0.5s, opacity 0.5s',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 min-h-[120px]">
                  "{testimonial.feedback}"
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center font-bold text-white`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
