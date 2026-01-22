import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      number: "/01",
      title: "Fan-First Economy",
      description: "We build the future where fans are co-creators and stakeholders. Streams, shares, edits, concert attendance, and energy become trackable, visible, and rewarded with Celeste — our native token that turns passion into real value.",
      subtitle: "No more invisible dedication. Your love finally pays back.",
      color: "from-purple-500 to-blue-500"
    },
    {
      number: "/02",
      title: "Artist Empowerment",
      description: "Artists gain full visibility into their true supporters, not only Direct fan relationships or exclusive access but a strong mutual growth that replace one-way streaming payouts.",
      subtitle: "CelestiFan unlocks sustainable revenue through fan-driven rewards, early access drops, and community perks — making every era stronger together.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "/03",
      title: "Community-Driven Rewards",
      description: "We reward engagement that matters: loyalty programs, tiered perks, features for top supporters, and gamified experiences.",
      subtitle: "Fans earn Celeste for recreating the art covers, playlists, defenses, and more creating a thriving ecosystem where superfans drive the future.",
      color: "from-cyan-500 to-emerald-500"
    },
    {
      number: "/04",
      title: "Global Fan Future",
      description: "In the emerging fan economy, platforms like CelestiFan lead the shift from passive consumption to active participation.",
      subtitle: "Fans become investors in their favorite artists' journeys — with rewards, ownership, and recognition. The next generation of music success belongs to the communities that build it.",
      color: "from-emerald-500 to-purple-500"
    }
  ];

  return (
    <div className="w-full bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <p className="text-sm text-gray-400 mb-4 uppercase tracking-widest">WHAT WE DO</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed">
            We believe that we can live in a world where{' '}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-normal">
              every fan's passion
            </span>{' '}
            is seen, rewarded, and turned into real value — not just invisible streams or likes.
          </h2>
          <p className="mt-8 text-lg text-gray-300 leading-relaxed">
            CelestiFan is the platform that makes it happen: connecting artists and fans in a new, equitable economy where support flows both ways.
          </p>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Our mission is simple: Empower fans to recreate the music they love, while giving artists direct, meaningful connections and sustainable income beyond traditional streaming.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-t border-gray-800 py-16 hover:bg-white/[0.02] transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Side - Number & Title */}
                <div className="lg:col-span-5">
                  <div className="flex items-start gap-6">
                    <span 
                      className={`text-2xl md:text-3xl font-light bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                    >
                      {service.number}
                    </span>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Right Side - Description & CTA */}
                <div className="lg:col-span-7">
                  <div className="space-y-6">
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                      {service.subtitle}
                    </p>
                    
                    {/* CTA Buttons */}
                    <div className="flex items-center gap-6 pt-4">
                      <button className="text-sm text-gray-400 hover:text-white transition-colors tracking-wider uppercase">
                        VIEW
                      </button>
                      <div className="w-16 h-px bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300"></div>
                      <button className="text-sm text-gray-400 hover:text-white transition-colors tracking-wider uppercase flex items-center gap-2 group/btn">
                        PROJECTS
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 pt-16 border-t border-gray-800 text-center">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Join the movement.
          </h3>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/20 text-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}