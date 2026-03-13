import { ArrowRight, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import CelestiQuiz from "@/components/CelestiQuiz";
import ServicesSection from "@/components/ServicesSection";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import FanLivesMatter from "@/components/FanLivesMatter";
import FAQ from "@/components/FAQ";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/* ─────────────────────────────────────────
   Social Proof
───────────────────────────────────────── */
const PROOF_COUNT = "800+";
const PROOF_LABEL = "artists & fans already on the waitlist";
const avatars = [
  { initials: "AK", color: "#a855f7" },
  { initials: "TF", color: "#3b82f6" },
  { initials: "NJ", color: "#06b6d4" },
  { initials: "RM", color: "#10b981" },
  { initials: "SB", color: "#a855f7" },
];

const SocialProof = () => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    viewport={{ once: true }}
    className="flex flex-col items-center gap-3 mb-10"
  >
    <div className="flex items-center">
      {avatars.map((a, i) => (
        <div
          key={i}
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-slate-950 -ml-2 first:ml-0"
          style={{ background: a.color, zIndex: avatars.length - i }}
        >
          {a.initials}
        </div>
      ))}
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-slate-950 -ml-2"
        style={{ background: "linear-gradient(to right, #a855f7, #06b6d4)", zIndex: 0 }}
      >
        +
      </div>
    </div>
    <p className="text-sm text-slate-400">
      <span
        className="font-bold text-base"
        style={{
          background: "linear-gradient(to right, #a855f7, #06b6d4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {PROOF_COUNT}
      </span>{" "}
      {PROOF_LABEL}
    </p>
  </motion.div>
);

/* ─────────────────────────────────────────
   Archetype names for background
───────────────────────────────────────── */
const archetypes = [
  "Soul Voyager", "Vibe Alchemist", "Dream Architect", "Fire Spirit",
  "Emotional Healer", "Flow Seeker", "Story Collector", "Cosmic Connector"
];

/* ─────────────────────────────────────────
   Home
───────────────────────────────────────── */
const Home = () => {
  const [formData, setFormData] = useState({ name: "", email: "", userType: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleWaitlistClick = (type: "artist" | "fan") => {
    setFormData((prev) => ({ ...prev, userType: type }));
    document.getElementById("waitlist-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setSubmitStatus({ type: "error", message: "Please fill in all fields" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmitStatus({ type: "error", message: "Please enter a valid email address" });
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });
    try {
      const SCRIPT_URL =
        import.meta.env.VITE_SCRIPT_URL ||
        "https://script.google.com/macros/s/AKfycbzHtjBUTZrE0ML9SV0XvyOzAYFIOF3YXyXX3v0fJizvK0IgikyqF2dGrRUbw1nFNSyB/exec";
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          userType: formData.userType || "general",
        }),
      });
      setIsSuccessModalOpen(true);
      setFormData({ name: "", email: "", userType: "" });
    } catch {
      setSubmitStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getNamePlaceholder = () =>
    formData.userType === "artist" ? "Enter your artist name" : "Enter your name";

  const getButtonText = () => {
    if (isSubmitting) return "Joining...";
    if (formData.userType === "artist") return "Join as Artist";
    if (formData.userType === "fan") return "Join as Fan";
    return "Join the Waitlist";
  };

  const getWaitlistTitle = () => {
    if (formData.userType === "artist") return "Join as an Artist";
    if (formData.userType === "fan") return "Join as a Fan";
    return "Join the Waitlist";
  };

  const getWaitlistDescription = () => {
    if (formData.userType === "artist")
      return "Your fans are streaming at 2am, defending your catalog, building culture around your name — and you can't see any of them. CelestiFan changes that. Know who your real community is. Reward them. Build with them.";
    if (formData.userType === "fan")
      return "You've been carrying your artist further than any algorithm ever will — and getting nothing back for it. CelestiFan is where that finally changes. Your support earns, your dedication ranks, and the artist you ride for finally knows you're there.";
    return "Music has always been built by two people — the artist who creates, and the fan who carries it into the world. CelestiFan is where both finally get what they deserve.";
  };

  return (
    <motion.div
      className="min-h-screen bg-slate-950 text-slate-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── SUCCESS MODAL ── */}
      <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
        <DialogContent className="sm:max-w-md bg-background border-primary shadow-2xl shadow-primary/20">
          <DialogHeader className="text-center items-center pt-8">
            <PartyPopper className="h-16 w-16 text-primary animate-bounce" />
            <DialogTitle className="text-3xl font-display mt-4 text-gradient">
              Welcome to the Movement!
            </DialogTitle>
            <DialogDescription asChild>
              <div className="text-lg text-muted-foreground mt-4 space-y-4">
                <p>You put in, you get back. The era where fans built careers in the dark — and artists never knew who was really there — is over.</p>
                <p>
                  You've officially joined the movement where every act of support is seen,
                  every artist knows their real community, and the culture finally rewards both sides.
                </p>
                <div className="!mt-6">
                  <p className="font-bold text-gradient">Your seat at the table is confirmed.</p>
                  <p>Earn Celeste. Know your fans. Build the future.</p>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <Button
              onClick={() => setIsSuccessModalOpen(false)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Awesome!
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* ── HERO ── */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex items-center justify-center text-center pt-20 pb-16 overflow-hidden relative"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-16 right-[12%] w-[45%] h-[55%] bg-primary rounded-full blur-[120px] animate-float" />
          <div
            className="absolute top-[30%] right-[4%] w-[32%] h-[42%] bg-secondary rounded-full blur-[100px] animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-5 relative z-10">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1
              className="font-bold tracking-tight leading-[1.1] text-center text-gradient font-display"
              style={{ fontSize: "clamp(2.4rem, 7.5vw, 6.5rem)" }}
            >
              Amplify Artists.
              <br />
              Ignite Fandom.
            </h1>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-300/80 font-light leading-relaxed tracking-wide max-w-2xl mx-auto mb-10"
            style={{ fontSize: "clamp(1rem, 2.2vw, 1.35rem)" }}
          >
            Streams don't pay fans. Followers don't tell artists who's real.
            <br className="hidden md:block" />
            CelestiFan is where dedication earns — and artists finally see who's truly riding for them.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 h-14 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto text-base"
              onClick={() => handleWaitlistClick("artist")}
            >
              Start as an Artist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 h-14 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto text-base"
              onClick={() => handleWaitlistClick("fan")}
            >
              Join as a Fan
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* ── FAN LIVES MATTER ── */}
      <FanLivesMatter />

      {/* ── SERVICES ── */}
      <ServicesSection />

      {/* ── QUIZ — CINEMATIC SPLIT ── */}
      <section className="relative overflow-hidden" style={{ background: '#04020a' }}>

        {/* Film grain */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025] z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px',
          }}
        />

        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-px z-20"
          style={{ background: 'linear-gradient(to right, transparent, rgba(168,85,247,0.3), rgba(59,130,246,0.3), transparent)' }}
        />

        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '85vh' }}>

          {/* ── LEFT — Text + CTA ── */}
          <div className="flex flex-col justify-center px-8 md:px-14 py-24 lg:py-0">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-10" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }} />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase"
                style={{
                  background: 'linear-gradient(to right, #a855f7, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                60 Seconds · 8 Archetypes
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-bold leading-[1.0] mb-7"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(3rem, 5.5vw, 5.5rem)',
                background: 'linear-gradient(135deg, #ffffff 30%, rgba(168,85,247,0.95) 65%, rgba(59,130,246,0.9) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Discover<br />Your Celesti<br />Energy.
            </motion.h2>

            {/* Sub lines */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-2 leading-relaxed"
              style={{
                fontFamily: "'Crimson Pro', Georgia, serif",
                fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              Your music taste isn't random.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.27 }}
              viewport={{ once: true }}
              className="mb-10"
              style={{
                fontFamily: "'Crimson Pro', Georgia, serif",
                fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)',
                color: 'rgba(255,255,255,0.28)',
              }}
            >
              It reveals exactly who you are in music.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.33 }}
              viewport={{ once: true }}
            >
              <CelestiQuiz />
            </motion.div>

            {/* Archetype pills */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mt-10"
            >
              {archetypes.map((name) => (
                <span
                  key={name}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(168,85,247,0.1)',
                    color: 'rgba(255,255,255,0.18)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {name}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — Mosaic Image ── */}
          <div className="relative hidden lg:block" style={{ overflow: 'hidden' }}>
            <img
              src="/quiz-archetype-mosaic.webp"
              alt="Celesti Energy Archetypes"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />
            {/* Left fade — strong bleed into dark bg */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #04020a 0%, rgba(4,2,10,0.8) 15%, rgba(4,2,10,0.25) 45%, transparent 100%)', zIndex: 1 }} />
            {/* Top + bottom fades */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #04020a 0%, transparent 10%, transparent 90%, #04020a 100%)', zIndex: 2 }} />
            {/* Purple tint */}
            <div className="absolute inset-0" style={{ background: 'rgba(100,60,180,0.07)', zIndex: 3 }} />
          </div>
        </div>

        {/* Mobile image strip */}
        <div className="relative lg:hidden h-64 overflow-hidden">
          <img
            src="/quiz-archetype-mosaic.webp"
            alt="Celesti Energy Archetypes"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, #04020a 0%, transparent 20%, transparent 70%, #04020a 100%)',
            }}
          />
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px z-20"
          style={{ background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.3), rgba(6,182,212,0.3), transparent)' }}
        />
      </section>

      {/* ── FEATURES SHOWCASE ── */}
      <div id="features">
        <FeaturesShowcase />
      </div>

      {/* ── WAITLIST ── */}
      <motion.section
        id="waitlist-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-14 md:py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-primary rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-5 relative z-10 text-center">
          <h2
            className="font-display font-bold text-gradient mb-4"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}
          >
            {getWaitlistTitle()}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-lg mx-auto">
            {getWaitlistDescription()}
          </p>

          <SocialProof />

          {/* Urgency */}
          <p
            className="text-sm font-semibold mb-6"
            style={{
              background: 'linear-gradient(to right, #a855f7, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Early members get Founder status. That doesn't come back after launch.
          </p>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 w-full max-w-sm mx-auto"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={isSubmitting}
              placeholder={getNamePlaceholder()}
              className="px-5 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none transition-all text-base w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              disabled={isSubmitting}
              className="px-5 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none transition-all text-base w-full"
              required
            />
            <Button
              disabled={isSubmitting}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12 rounded-xl w-full"
              type="submit"
            >
              {getButtonText()}
            </Button>
            {submitStatus.type === "error" && submitStatus.message && (
              <div className="p-4 mt-2 rounded-xl bg-red-100 text-red-800 border border-red-200 text-sm">
                {submitStatus.message}
              </div>
            )}
          </motion.form>

          <p className="text-xs text-slate-600 mt-4">
            No spam. No credit card. Just your seat at the table.
          </p>
        </div>
      </motion.section>

      {/* ── FAQ ── */}
      <FAQ />
    </motion.div>
  );
};

export default Home;