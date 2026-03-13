import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is CelestiFan?",
    a: "CelestiFan is a fan engagement platform that connects artists and fans through real actions. Fans prove their support — streaming, sharing, uploading proof — and earn Celeste, our virtual currency. Artists get a dedicated fanbase that moves the needle.",
  },
  {
    q: "What is Celeste?",
    a: "Celeste is CelestiFan's virtual currency. You earn it by taking real fan actions — streaming an artist's music, sharing campaigns, uploading proof of support. Celeste powers your leaderboard rank and unlocks exclusive rewards from the artists you support.",
  },
  {
    q: "Is CelestiFan for artists or fans?",
    a: "Both. Artists use CelestiFan to launch campaigns, track real fan engagement, and build a community that goes beyond passive listeners. Fans use it to make their devotion visible, climb leaderboards, and connect directly with the artists they love.",
  },
  {
    q: "When does CelestiFan launch?",
    a: "We're currently in the final stages of building our MVP. Joining the waitlist gets you priority early access — you'll be among the first to use the platform the moment it goes live.",
  },
  {
    q: "Is CelestiFan only for Afrobeats?",
    a: "No — CelestiFan is built for every genre and every fan worldwide. Whether you're in Lagos, London, Tokyo or São Paulo, if you love music and the artists who make it, CelestiFan is for you.",
  },
  {
    q: "How do I join?",
    a: "Simply enter your name and email in the waitlist form above. Takes 10 seconds. We'll notify you the moment early access opens — and you'll get a head start before the public launch.",
  },
];

const gradients = [
  "linear-gradient(to right, #a855f7, #3b82f6)",
  "linear-gradient(to right, #3b82f6, #06b6d4)",
  "linear-gradient(to right, #06b6d4, #10b981)",
  "linear-gradient(to right, #10b981, #a855f7)",
  "linear-gradient(to right, #a855f7, #3b82f6)",
  "linear-gradient(to right, #3b82f6, #06b6d4)",
];

const FAQItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      viewport={{ once: true }}
      className="border-b border-white/10 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left gap-4 group"
      >
        {/* Gradient number */}
        <span
          className="text-xs font-bold tracking-[0.2em] shrink-0 w-8"
          style={{
            background: gradients[index],
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Question */}
        <span
          className="flex-1 text-base md:text-lg font-semibold text-slate-100 group-hover:text-white transition-colors"
          style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
        >
          {q}
        </span>

        {/* Toggle icon */}
        <span
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all"
          style={{ background: open ? gradients[index] : "transparent" }}
        >
          {open ? (
            <Minus className="w-3.5 h-3.5 text-white" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
          )}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p
              className="pb-6 pl-12 text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl"
              style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-5 max-w-3xl">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-px w-10" style={{ background: "linear-gradient(to right, #a855f7, #3b82f6)" }} />
          <span
            className="text-xs font-semibold tracking-[0.3em] uppercase"
            style={{
              background: "linear-gradient(to right, #a855f7, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Got Questions
          </span>
          <div className="h-px w-10" style={{ background: "linear-gradient(to right, #3b82f6, #06b6d4)" }} />
        </div>

        <h2
          className="font-bold text-white mb-3"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
          }}
        >
          Frequently Asked
        </h2>
        <p className="text-sm md:text-base text-slate-400 max-w-md mx-auto">
          Everything you need to know before joining the movement.
        </p>
      </motion.div>

      {/* Items */}
      <div className="rounded-2xl border border-white/10 px-5 md:px-10 bg-white/[0.02] backdrop-blur-sm">
        {faqs.map((item, i) => (
          <FAQItem key={i} q={item.q} a={item.a} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-slate-500 mt-8 text-sm"
      >
        Still have questions?{" "}
        <a
          href="/connect"
          className="underline underline-offset-4 hover:text-slate-300 transition-colors"
          style={{
            background: "linear-gradient(to right, #a855f7, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Reach out to us
        </a>
      </motion.p>
    </div>
  </section>
);

export default FAQ;