import { Twitter, Instagram, Facebook, Mail, User, Mic } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Connect = () => {
  const socialLinks = [
    {
      icon: Twitter,
      label: "X (Twitter)",
      handle: "@celestifan_off",
      url: "https://x.com/celestifan_off",
      gradient: "linear-gradient(to right, #a855f7, #3b82f6)",
      glowColor: "168,85,247",
      accentColor: "#a855f7",
    },
    {
      icon: Instagram,
      label: "Instagram",
      handle: "@celestifan_official",
      url: "https://www.instagram.com/celestifan_official",
      gradient: "linear-gradient(to right, #3b82f6, #06b6d4)",
      glowColor: "59,130,246",
      accentColor: "#3b82f6",
    },
    {
      icon: Facebook,
      label: "Facebook",
      handle: "/celestifan",
      url: "https://www.facebook.com/celestifan",
      gradient: "linear-gradient(to right, #06b6d4, #10b981)",
      glowColor: "6,182,212",
      accentColor: "#06b6d4",
    },
  ];

  const contactCards = [
    {
      icon: Mail,
      number: "/01",
      title: "General Inquiries",
      description: "Have a question or feedback? We'd love to hear from you.",
      buttonText: "Email Us",
      email: "hello@celestifan.com",
      gradient: "linear-gradient(to right, #a855f7, #3b82f6)",
      glowColor: "168,85,247",
      accentColor: "#a855f7",
    },
    {
      icon: User,
      number: "/02",
      title: "Artist & Fan Support",
      description: "Need help with your account or a campaign? Our team is here.",
      buttonText: "Contact Support",
      email: "support@celestifan.com",
      gradient: "linear-gradient(to right, #3b82f6, #06b6d4)",
      glowColor: "59,130,246",
      accentColor: "#3b82f6",
    },
    {
      icon: Mic,
      number: "/03",
      title: "Press & Media",
      description: "For all media inquiries, get in touch with our communications team.",
      buttonText: "Media Inquiries",
      email: "press@celestifan.com",
      gradient: "linear-gradient(to right, #06b6d4, #10b981)",
      glowColor: "6,182,212",
      accentColor: "#06b6d4",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Helmet>
        <title>Connect — CelestiFan</title>
        <meta name="description" content="Connect with CelestiFan. Follow us on social media, join the community, or reach out directly." />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-24 px-5">
        <div className="absolute inset-0 pointer-events-none hidden md:block opacity-20">
          <div className="absolute top-0 right-[10%] w-[40%] h-[60%] bg-primary rounded-full blur-[100px]" style={{ willChange: 'transform' }} />
          <div className="absolute bottom-0 left-[5%] w-[30%] h-[40%] rounded-full blur-[80px]" style={{ background: 'rgba(6,182,212,0.3)' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none md:hidden" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(168,85,247,0.1) 0%, transparent 70%)' }} />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }} />
            <span className="text-[0.65rem] font-semibold tracking-[0.3em] uppercase" style={{ color: 'rgba(168,85,247,0.8)' }}>
              Get In Touch
            </span>
            <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #3b82f6, #06b6d4)' }} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold leading-tight mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              background: 'linear-gradient(135deg, #ffffff 30%, rgba(168,85,247,0.95) 65%, rgba(59,130,246,0.9) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Connect With Us.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "'Crimson Pro', Georgia, serif",
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.7,
            }}
          >
            We're building a community and we want you in it. Follow us, join the conversation, or reach out directly.
          </motion.p>
        </div>
      </section>

      {/* ── SOCIAL LINKS ── */}
      <section className="container mx-auto px-5 pb-20 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-slate-600 mb-5"
        >
          Follow Our Journey
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {socialLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden group block transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid rgba(255,255,255,0.07)`,
                  borderLeft: `3px solid ${link.accentColor}`,
                }}
              >
                <div className="p-7">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `rgba(${link.glowColor},0.12)`, border: `1px solid rgba(${link.glowColor},0.2)` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: link.accentColor }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-wide text-white">{link.label}</p>
                      <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{link.handle}</p>
                    </div>
                  </div>
                  <div
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full transition-all duration-200"
                    style={{ background: `rgba(${link.glowColor},0.1)`, color: link.accentColor, border: `1px solid rgba(${link.glowColor},0.2)` }}
                  >
                    Follow ↗
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="mx-auto max-w-5xl px-5 mb-20">
        <div className="h-px w-full opacity-10" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6, #06b6d4, #10b981)' }} />
      </div>

      {/* ── CONTACT ── */}
      <section className="container mx-auto px-5 pb-28 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-slate-600 mb-5"
        >
          Get in Touch
        </motion.div>

        <div className="space-y-3">
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderLeft: `3px solid ${card.accentColor}`,
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] items-center gap-6 p-7">
                  {/* Number + Icon */}
                  <div className="flex items-center gap-4">
                    <span
                      className="text-sm font-light"
                      style={{
                        background: card.gradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {card.number}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `rgba(${card.glowColor},0.1)`, border: `1px solid rgba(${card.glowColor},0.2)` }}
                    >
                      <Icon className="h-4 w-4" style={{ color: card.accentColor }} />
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3
                      className="font-bold leading-tight mb-1"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#fff' }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '1rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <a
                    href={`mailto:${card.email}`}
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase px-5 py-2.5 rounded-full transition-all duration-200 flex-shrink-0"
                    style={{ border: `1px solid rgba(${card.glowColor},0.3)`, color: card.accentColor }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `rgba(${card.glowColor},0.1)`; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                  >
                    {card.buttonText} ↗
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-xs"
          style={{
            fontFamily: "'Crimson Pro', Georgia, serif",
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.15)',
            letterSpacing: '0.03em',
          }}
        >
          Fan Lives Matter. And we're here for it.
        </motion.p>
      </section>
    </div>
  );
};

export default Connect;