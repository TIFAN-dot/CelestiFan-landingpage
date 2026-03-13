import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      number: "/01",
      title: "Fan-First Economy",
      body: "Fans are the engine the industry never credited. Every stream, share, concert, and show-up now earns Celeste — your invisible dedication becomes visible value that artists can see, measure, and finally reward.",
      gradientColors: "#a855f7, #3b82f6",
      color: "from-purple-500 to-blue-500"
    },
    {
      number: "/02",
      title: "Artist Empowerment",
      body: "You put out the music. They showed up in the dark. But the data never told you who. CelestiFan gives artists a direct line to their real community — the ones streaming at 2am, defending the album, building the culture around your name.",
      gradientColors: "#3b82f6, #06b6d4",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "/03",
      title: "Community Rewards",
      body: "The fan who remade the cover, built the playlist, defended the album in every comment section. The artist who drops without a label. Both deserve recognition. CelestiFan rewards every act of showing up — because culture is built by the ones who stay.",
      gradientColors: "#06b6d4, #10b981",
      color: "from-cyan-500 to-emerald-500"
    },
    {
      number: "/04",
      title: "Global Fan Future",
      body: "Whether you're a fan in Lagos or LA, An independent artist in London or in Seoul— the next era of music belongs to the communities that build it together. CelestiFan is where that future already lives.",
      gradientColors: "#10b981, #a855f7",
      color: "from-emerald-500 to-purple-500"
    }
  ];

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-xs text-gray-500 mb-5 uppercase tracking-[0.3em]">What We Do</p>
          <h2
            className="font-light leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(1.9rem, 4.5vw, 3.5rem)",
            }}
          >
            Every stream you gave, every stage they built —
            {" "}<span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              the industry took it all and paid neither of you back.
            </span>{" "}
            That's about to change.
          </h2>
        </div>

        {/* Services */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-t border-gray-800 py-12 hover:bg-white/[0.015] transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

                {/* Left — Number + Title */}
                <div className="lg:col-span-5 flex items-center gap-6">
                  <span
                    className={`text-xl font-light bg-gradient-to-r ${service.color} bg-clip-text text-transparent flex-shrink-0`}
                  >
                    {service.number}
                  </span>
                  <h3
                    className="font-light leading-[1.1]"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "clamp(2.2rem, 3.5vw, 4rem)",
                    }}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Right — body + CTA */}
                <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-center gap-8">
                  <p
                    className="text-gray-400 leading-relaxed flex-1"
                    style={{
                      fontFamily: "'Crimson Pro', Georgia, serif",
                      fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
                    }}
                  >
                    {service.body}
                  </p>

                  {/* CTA */}
                  <button
                    onClick={scrollToFeatures}
                    className="flex items-center gap-3 flex-shrink-0 group/cta"
                  >
                    <span
                      className="text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300"
                      style={{ color: 'rgba(255,255,255,0.25)' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.25)'}
                    >
                      See it live
                    </span>
                    <div
                      className="h-px transition-all duration-300 group-hover/cta:w-14"
                      style={{
                        width: '32px',
                        background: `linear-gradient(to right, ${service.gradientColors})`
                      }}
                    />
                    <ArrowRight className="w-4 h-4 text-gray-600 group-hover/cta:text-white group-hover/cta:translate-x-1 transition-all duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div
          className="mt-12 h-px w-full opacity-20"
          style={{ background: "linear-gradient(to right, #a855f7, #3b82f6, #06b6d4, #10b981)" }}
        />
      </div>
    </div>
  );
}