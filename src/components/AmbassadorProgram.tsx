import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Copy, CheckCheck } from "lucide-react";

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
    glowColor: "168,85,247",
    accentColor: "#a855f7",
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
    tierKey: "fan-ambassador",
  },
  {
    number: "/02",
    title: "Elite Fan Ambassador",
    qualifier: "Refer 10 people to CelestiFan",
    badgeName: "OG",
    badgeNote: "Rarest tier — gone forever after launch",
    gradient: "linear-gradient(to right, #3b82f6, #06b6d4)",
    glowColor: "59,130,246",
    accentColor: "#3b82f6",
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
    tierKey: "elite-fan-ambassador",
  },
  {
    number: "/03",
    title: "Founding Artist",
    qualifier: "Refer 5 fans or artists to CelestiFan",
    badgeName: "Founding Artist",
    badgeNote: "Permanent — closes at launch",
    gradient: "linear-gradient(to right, #06b6d4, #10b981)",
    glowColor: "6,182,212",
    accentColor: "#06b6d4",
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
    tierKey: "founding-artist",
  },
];

const generateCode = (name: string): string => {
  const clean = name.trim().toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8);
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `CF-${clean}-${rand}`;
};

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzHtjBUTZrE0ML9SV0XvyOzAYFIOF3YXyXX3v0fJizvK0IgikyqF2dGrRUbw1nFNSyB/exec";

const submitAmbassador = async (data: {
  name: string;
  email: string;
  tier: string;
  userType: string;
  referralCode: string;
  referredBy: string;
}) => {
  await fetch(SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, type: "ambassador" }),
  });
};

const AmbassadorModal = ({
  tier,
  onClose,
}: {
  tier: typeof tiers[0];
  onClose: () => void;
}) => {
  const [step, setStep] = useState<"form" | "success">("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [referredBy, setReferredBy] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [copied, setCopied] = useState(false);

  const referralLink = referralCode ? `https://celestifan.com/?ref=${referralCode}` : "";

  const handleSubmit = async () => {
    if (!name.trim()) { setError("Please enter your name."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Please enter a valid email."); return; }
    setError("");
    setIsSubmitting(true);
    const code = generateCode(name);
    setReferralCode(code);
    try {
      await submitAmbassador({
        name: name.trim(),
        email: email.trim(),
        tier: tier.title,
        userType: tier.waitlistType,
        referralCode: code,
        referredBy: referredBy.trim(),
      });
      setStep("success");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-md rounded-2xl overflow-hidden"
        style={{ background: '#0d0a1a', border: `1px solid rgba(${tier.glowColor},0.2)` }}
      >
        <div className="h-px w-full" style={{ background: tier.gradient }} />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }}
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-8">
          {step === "form" ? (
            <>
              <div className="mb-6">
                <span
                  className="text-[0.58rem] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                  style={{ background: `rgba(${tier.glowColor},0.12)`, color: tier.accentColor, border: `1px solid rgba(${tier.glowColor},0.2)` }}
                >
                  {tier.badgeName}
                </span>
                <h3 className="font-bold leading-tight mt-4 mb-1" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2rem', color: '#fff' }}>
                  {tier.title}
                </h3>
                <p style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '0.95rem', color: 'rgba(255,255,255,0.35)' }}>
                  {tier.qualifier}
                </p>
              </div>

              <div className="space-y-3 mb-5">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#fff' }}
                  onFocus={e => (e.currentTarget.style.borderColor = `rgba(${tier.glowColor},0.4)`)}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#fff' }}
                  onFocus={e => (e.currentTarget.style.borderColor = `rgba(${tier.glowColor},0.4)`)}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                  onKeyDown={e => { if (e.key === 'Enter') handleSubmit(); }}
                />

                {/* ── REFERRED BY FIELD ── */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Referred by an ambassador? Enter their code"
                    value={referredBy}
                    onChange={e => setReferredBy(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(168,85,247,0.04)',
                      border: referredBy ? '1px solid rgba(168,85,247,0.35)' : '1px solid rgba(168,85,247,0.1)',
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.85rem',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(168,85,247,0.4)')}
                    onBlur={e => (e.currentTarget.style.borderColor = referredBy ? 'rgba(168,85,247,0.35)' : 'rgba(168,85,247,0.1)')}
                  />
                  {referredBy && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[0.55rem] font-bold tracking-widest uppercase" style={{ color: 'rgba(168,85,247,0.7)' }}>
                      ✦
                    </span>
                  )}
                </div>

                {error && <p className="text-xs" style={{ color: '#f87171' }}>{error}</p>}
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{ background: tier.gradient, color: '#fff', opacity: isSubmitting ? 0.7 : 1 }}
              >
                {isSubmitting ? "Generating your code..." : "Get My Referral Code ✦"}
              </button>

              <p className="text-center mt-4 text-[0.6rem]" style={{ color: 'rgba(255,255,255,0.2)' }}>
                No spam. Your code is yours permanently.
              </p>
            </>
          ) : (
            <>
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: `rgba(${tier.glowColor},0.12)`, border: `1px solid rgba(${tier.glowColor},0.25)` }}>
                  <Check className="h-6 w-6" style={{ color: tier.accentColor }} />
                </div>
                <h3 className="font-bold mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2rem', color: '#fff' }}>
                  You're an Ambassador.
                </h3>
                <p style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '0.95rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>
                  Share your link. Every person who joins through it counts toward your tier.
                </p>
              </div>

              <div className="rounded-xl p-4 mb-3" style={{ background: `rgba(${tier.glowColor},0.06)`, border: `1px solid rgba(${tier.glowColor},0.15)` }}>
                <p className="text-[0.58rem] font-bold tracking-[0.25em] uppercase mb-2" style={{ color: `rgba(${tier.glowColor},0.6)` }}>
                  Your Referral Code
                </p>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-bold text-lg tracking-wider" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#fff' }}>
                    {referralCode}
                  </span>
                  <button
                    onClick={() => handleCopy(referralCode)}
                    className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200"
                    style={{ background: `rgba(${tier.glowColor},0.12)`, color: tier.accentColor }}
                  >
                    {copied ? <CheckCheck className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              <div className="rounded-xl p-4 mb-6" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <p className="text-[0.58rem] font-bold tracking-[0.25em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.25)' }}>
                  Your Shareable Link
                </p>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs truncate" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'monospace' }}>
                    {referralLink}
                  </span>
                  <button
                    onClick={() => handleCopy(referralLink)}
                    className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg flex-shrink-0 transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}
                  >
                    {copied ? <CheckCheck className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    Copy link
                  </button>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                Done
              </button>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const AmbassadorProgram = ({ onBecomeAmbassador }: AmbassadorProgramProps) => {
  const [activeTier, setActiveTier] = useState<typeof tiers[0] | null>(null);

  return (
    <>
      <AnimatePresence>
        {activeTier && (
          <AmbassadorModal tier={activeTier} onClose={() => setActiveTier(null)} />
        )}
      </AnimatePresence>

      <section id="ambassador-program" className="relative overflow-hidden py-24 md:py-32" style={{ background: '#020817' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.025] z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px' }} />
        <div className="absolute top-0 left-0 right-0 h-px z-10" style={{ background: 'linear-gradient(to right, transparent, rgba(168,85,247,0.4), rgba(6,182,212,0.4), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px z-10" style={{ background: 'linear-gradient(to right, transparent, rgba(168,85,247,0.4), rgba(6,182,212,0.4), transparent)' }} />

        <div className="relative z-10 container mx-auto px-5 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }} />
              <span className="text-[0.65rem] font-semibold tracking-[0.3em] uppercase" style={{ color: 'rgba(168,85,247,0.8)' }}>The Founding Circle</span>
              <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #3b82f6, #06b6d4)' }} />
            </div>
            <h2 className="font-bold leading-[1.05] mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', background: 'linear-gradient(135deg, #ffffff 30%, rgba(168,85,247,0.95) 65%, rgba(6,182,212,0.9) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              You believed before<br />the world did.
            </h2>
            <p className="mb-4" style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
              The CelestiFan Ambassador Program — for the fans and artists who showed up first.
            </p>
            <p style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: 'rgba(255,255,255,0.28)', lineHeight: 1.7 }}>
              These are the unique chances. The Founding Circle closes the moment we launch — the badges and this status would be gone forever.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {tiers.map((tier, index) => (
              <motion.div key={tier.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className={tier.highlighted ? 'md:-mt-4' : ''}>
                <div className="relative rounded-2xl overflow-hidden h-full flex flex-col" style={{ background: tier.highlighted ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)', border: tier.highlighted ? `1px solid rgba(${tier.glowColor},0.35)` : '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="h-px w-full" style={{ background: tier.gradient }} />
                  {tier.highlighted && (
                    <div className="px-8 pt-6">
                      <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full" style={{ background: tier.gradient, color: '#fff' }}>Most Exclusive</span>
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-light" style={{ background: tier.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{tier.number}</span>
                      <div className="h-px flex-1 opacity-20" style={{ background: tier.gradient }} />
                    </div>
                    <h3 className="font-bold leading-tight mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: '#fff' }}>{tier.title}</h3>
                    <p className="mb-6" style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '0.95rem', color: 'rgba(255,255,255,0.4)' }}>{tier.qualifier}</p>
                    <div className="mb-6 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-2" style={{ background: `rgba(${tier.glowColor},0.12)`, border: `1px solid rgba(${tier.glowColor},0.25)`, color: tier.accentColor }}>{tier.badgeName}</span>
                      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>{tier.badgeNote}</p>
                    </div>
                    <div className="space-y-3 flex-1 mb-8">
                      {tier.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `rgba(${tier.glowColor},0.15)` }}>
                            <Check className="w-2.5 h-2.5" style={{ color: tier.accentColor }} />
                          </div>
                          <span style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setActiveTier(tier)}
                      className="w-full py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02]"
                      style={tier.highlighted ? { background: tier.gradient, color: '#fff', boxShadow: `0 0 24px rgba(${tier.glowColor},0.2)` } : { background: 'transparent', color: 'rgba(255,255,255,0.7)', border: `1px solid rgba(${tier.glowColor},0.3)` }}
                      onMouseEnter={e => { if (!tier.highlighted) { (e.currentTarget as HTMLElement).style.background = `rgba(${tier.glowColor},0.1)`; (e.currentTarget as HTMLElement).style.color = '#fff'; } }}
                      onMouseLeave={e => { if (!tier.highlighted) { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; } }}
                    >
                      Become an Ambassador ✦
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="text-center mt-16" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.05em' }}>
            Fan Lives Matter. And you were here first.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default AmbassadorProgram;