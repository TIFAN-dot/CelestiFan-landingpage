import { Check } from "lucide-react";
import { motion } from "framer-motion";

export type AmbassadorUserType = "artist" | "fan";

export interface AmbassadorProgramProps {
  onBecomeAmbassador: (userType: AmbassadorUserType) => void;
}

const tiers = [
  {
    number: "/01",
    title: "Fan Ambassador",
    qualifier: "Refer 5 people to CelestiFan",
    badgeName: "Founding Fan",
    badgeNote: "Permanent — never available after launch",
    gradient: "linear-gradient(to right, #a855f7, #3b82f6)",
    gradientFrom: "#a855f7",
    gradientTo: "#3b82f6",
    glowColor: "168,85,247",
    benefits: [
      "Free platform access — 6 months",
      "Permanent Founding Fan verified badge",
      "Your name on the CelestiFan Founding Wall",
      "Double Celeste earnings for 6 months",
      "First access to every new feature before public release",
      "Direct feedback line to the CelestiFan team",
    ],
    highlighted: false,
    waitlistType: "fan" as AmbassadorUserType,
  },
  {
    number: "/02",
    title: "Elite Fan Ambassador",
    qualifier: "Refer 10 people to CelestiFan",
    badgeName: "OG",
    badgeNote: "Rarest tier — gone forever after launch",
    gradient: "linear-gradient(to right, #3b82f6, #06b6d4)",
    gradientFrom: "#3b82f6",
    gradientTo: "#06b6d4",
    glowColor: "59,130,246",
    benefits: [
      "Free platform access — 8 months",
      "Permanent OG status badge — never available again",
      "Everything in Fan Ambassador tier",
      "Official shoutout from CelestiFan social accounts",
      "Invited to closed product feedback sessions",
      "First campaign dedicated to an artist of your choice",
    ],
    highlighted: true,
    waitlistType: "fan" as AmbassadorUserType,
  },
  {
    number: "/03",
    title: "Founding Artist",
    qualifier: "Refer 5 fans or artists to CelestiFan",
    badgeName: "Founding Artist",
    badgeNote: "Permanent — closes at launch",
    gradient: "linear-gradient(to right, #06b6d4, #10b981)",
    gradientFrom: "#06b6d4",
    gradientTo: "#10b981",
    glowColor: "6,182,212",
    benefits: [
      "Free Pro access — 8 months",
      "Permanent Founding Artist verified badge",
      "First campaign personally set up by CelestiFan team",
      "Featured in official launch content and social",
      "Priority support for first 6 months",
      "Direct input on features that matter most to artists",
    ],
    highlighted: false,
    waitlistType: "artist" as AmbassadorUserType,
  },
];

const AmbassadorProgram = ({ onBecomeAmbassador }: AmbassadorProgramProps) => {
  return (
    <section
      id="ambassador-program"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: '#020817' }}
    >
      {/* Film grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px z-10"
        style={{ background: 'linear-gradient(to right, transparent, rgba(168,85,247,0.4), rgba(6,182,212,0.4), transparent)' }}
      />

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px z-10"
        style={{ background: 'linear-gradient(to right, transparent, rgba(168,85,247,0.4), rgba(6,182,212,0.4), transparent)' }}
      />

      <div className="relative z-10 container mx-auto px-5 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }} />
            <span
              className="text-xs font-semibold tracking-[0.3em] uppercase"
              style={{
                background: 'linear-gradient(to right, #a855f7, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              The Founding Circle
            </span>
            <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #3b82f6, #06b6d4)' }} />
          </div>

          <h2
            className="font-bold leading-[1.05] mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
              background: 'linear-gradient(135deg, #ffffff 30%, rgba(168,85,247,0.95) 65%, rgba(6,182,212,0.9) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            You believed before<br />the world did.
          </h2>

          <p
            className="mb-4 leading-relaxed"
            style={{
              fontFamily: "'Crimson Pro', Georgia, serif",
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: 'rgba(255,255,255,0.55)',
            }}
          >
            The CelestiFan Ambassador Program — for the fans and artists who showed up first.
          </p>
          <p
            style={{
              fontFamily: "'Crimson Pro', Georgia, serif",
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              color: 'rgba(255,255,255,0.28)',
              lineHeight: 1.7,
            }}
          >
            Before CelestiFan opens to the world, we're giving something permanent to the people
            already here. These are the unique chances. The Founding Circle closes
            the moment we launch — the badges and this status would be gone forever.
          </p>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={tier.highlighted ? 'md:-mt-4' : ''}
            >
              <div
                className="relative rounded-2xl overflow-hidden h-full flex flex-col"
                style={{
                  background: tier.highlighted
                    ? 'rgba(255,255,255,0.04)'
                    : 'rgba(255,255,255,0.02)',
                  border: tier.highlighted
                    ? '1px solid rgba(59,130,246,0.4)'
                    : '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Top gradient bar */}
                <div className="h-px w-full" style={{ background: tier.gradient }} />

                {/* Featured badge */}
                {tier.highlighted && (
                  <div className="px-8 pt-6">
                    <span
                      className="text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                      style={{
                        background: tier.gradient,
                        color: '#fff',
                      }}
                    >
                      Most Exclusive
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">

                  {/* Number + Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-sm font-light"
                      style={{
                        background: tier.gradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {tier.number}
                    </span>
                    <div className="h-px flex-1 opacity-20" style={{ background: tier.gradient }} />
                  </div>

                  <h3
                    className="font-bold leading-tight mb-2"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                      color: '#fff',
                    }}
                  >
                    {tier.title}
                  </h3>

                  <p
                    className="mb-6"
                    style={{
                      fontFamily: "'Crimson Pro', Georgia, serif",
                      fontSize: '0.95rem',
                      color: 'rgba(255,255,255,0.4)',
                    }}
                  >
                    {tier.qualifier}
                  </p>

                  {/* Badge */}
                  <div className="mb-6 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span
                      className="inline-block text-xs font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-2"
                      style={{
                        background: `rgba(${tier.glowColor},0.12)`,
                        border: `1px solid rgba(${tier.glowColor},0.25)`,
                        color: tier.gradientTo,
                      }}
                    >
                      {tier.badgeName}
                    </span>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
                      {tier.badgeNote}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3 flex-1 mb-8">
                    {tier.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: `rgba(${tier.glowColor},0.15)` }}
                        >
                          <Check
                            className="w-2.5 h-2.5"
                            style={{ color: tier.gradientTo }}
                          />
                        </div>
                        <span
                          style={{
                            fontFamily: "'Crimson Pro', Georgia, serif",
                            fontSize: '0.95rem',
                            color: 'rgba(255,255,255,0.6)',
                            lineHeight: 1.5,
                          }}
                        >
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => onBecomeAmbassador(tier.waitlistType)}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300"
                    style={
                      tier.highlighted
                        ? {
                            background: tier.gradient,
                            color: '#fff',
                            boxShadow: `0 0 24px rgba(${tier.glowColor},0.25)`,
                          }
                        : {
                            background: 'transparent',
                            color: 'rgba(255,255,255,0.7)',
                            border: `1px solid rgba(${tier.glowColor},0.3)`,
                          }
                    }
                    onMouseEnter={(e) => {
                      if (!tier.highlighted) {
                        (e.currentTarget as HTMLElement).style.background = `rgba(${tier.glowColor},0.1)`;
                        (e.currentTarget as HTMLElement).style.color = '#fff';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!tier.highlighted) {
                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                        (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)';
                      }
                    }}
                  >
                    Become an Ambassador
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            color: 'rgba(255,255,255,0.2)',
            letterSpacing: '0.05em',
          }}
        >
          Fan Lives Matter. And you were here first.
        </motion.p>
      </div>
    </section>
  );
};

export default AmbassadorProgram;