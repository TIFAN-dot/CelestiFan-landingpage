import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const TikTokIcon = ({ className, style }: { className?: string; style?: CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
    <path d="M16.6 5.82c-1-.9-1.6-2.2-1.6-3.65h-3.15v13.4a2.6 2.6 0 1 1-2.6-2.75c.27 0 .53.04.78.1V9.72a5.75 5.75 0 0 0-.78-.05A5.85 5.85 0 1 0 15 15.5V9.02a7.6 7.6 0 0 0 4.4 1.4V7.3a4.85 4.85 0 0 1-2.8-1.48z"/>
  </svg>
);

const Footer = () => {
  const footerLinks = [
    {
      title: "Platform",
      links: [
        { name: "About", path: "/about" },
        { name: "Features", path: "/features" },
        { name: "Blog", path: "/blog" },
        { name: "Celeste", path: "/celeste" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Connect", path: "/connect" },
        { name: "FAQ", path: "/#waitlist-section" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://x.com/itscelestifan", label: "X (Twitter)", gradient: "linear-gradient(to right, #a855f7, #3b82f6)" },
    { icon: Instagram, href: "https://www.instagram.com/celestifan_official", label: "Instagram", gradient: "linear-gradient(to right, #3b82f6, #06b6d4)" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@itscelestifan", label: "TikTok", gradient: "linear-gradient(to right, #06b6d4, #10b981)" },
  ];

  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{ background: '#04020a', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      {/* Film grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none hidden md:block"
        style={{ background: 'radial-gradient(ellipse, rgba(168,85,247,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 container mx-auto px-5 pt-16 pb-8">

        {/* Top — Brand + tagline */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 mb-14">

          {/* Brand */}
          <div className="max-w-sm">
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <img src="/logo.webp" alt="CelestiFan" className="h-10 w-10" />
              <span
                className="font-bold text-lg tracking-wide"
                style={{
                  background: 'linear-gradient(to right, #a855f7, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.4rem',
                }}
              >
                CelestiFan
              </span>
            </Link>

            <p
              className="mb-6"
              style={{
                fontFamily: "'Crimson Pro', Georgia, serif",
                fontSize: '1.05rem',
                color: 'rgba(255,255,255,0.3)',
                lineHeight: 1.7,
              }}
            >
              The platform where fan dedication finally earns — and artists see who's truly riding for them.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                    whileHover={{ scale: 1.1 }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = `rgba(168,85,247,0.15)`;
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(168,85,247,0.3)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    }}
                  >
                    <Icon className="h-4 w-4" style={{ color: 'rgba(255,255,255,0.45)' }} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-14">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <p
                  className="text-[0.6rem] font-bold tracking-[0.3em] uppercase mb-5"
                  style={{ color: 'rgba(168,85,247,0.6)' }}
                >
                  {section.title}
                </p>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-sm transition-colors duration-200"
                        style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '1rem' }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.3)'}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-7 opacity-[0.07]" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6, #06b6d4, #10b981)' }} />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p
            style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.18)' }}
          >
            © {new Date().getFullYear()} CelestiFan. All rights reserved.
          </p>
          <p
            style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.12)' }}
          >
            Fan Lives Matter.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;