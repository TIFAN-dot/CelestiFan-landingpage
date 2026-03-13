import { ArrowRight, PartyPopper, Sparkles } from "lucide-react";
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
   Social Proof — update PROOF_COUNT to your
   real waitlist number anytime
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
      return "Get early access and start building meaningful connections with your fans. Launch campaigns, track engagement, and amplify your music career.";
    if (formData.userType === "fan")
      return "Be among the first fans to join CelestiFan. Prove your dedication, earn rewards, and connect directly with the artists you love.";
    return "Be the first to know when CelestiFan launches. Join artists and fans worldwide building the future of music together.";
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
                <p>Welcome to CelestiFan, where every moment of support matters.</p>
                <p>
                  You've officially joined the movement that connects artists and fans through real
                  actions, creativity, and rewards.
                </p>
                <div className="!mt-6">
                  <p className="font-bold text-gradient">Your journey starts now</p>
                  <p>Earn Celeste. Empower artists. Elevate fandom.</p>
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
        {/* Glow blobs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-16 right-[12%] w-[45%] h-[55%] bg-primary rounded-full blur-[120px] animate-float" />
          <div
            className="absolute top-[30%] right-[4%] w-[32%] h-[42%] bg-secondary rounded-full blur-[100px] animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-5 relative z-10">
          {/* ── HEADLINE — fluid clamp() scaling, no step jumps ── */}
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

          {/* ── SUBTITLE — fluid clamp() ── */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-300/80 font-light leading-relaxed tracking-wide max-w-2xl mx-auto mb-10"
            style={{ fontSize: "clamp(1rem, 2.2vw, 1.35rem)" }}
          >
            The ultimate platform where fans fuel music breakthroughs.
            <br className="hidden md:block" />
            Support artists. Earn Celeste. Change the game.
          </motion.p>

          {/* ── CTA BUTTONS ── */}
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

      {/* ── QUIZ ── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10"
      >
        <div className="container mx-auto px-5 text-center">
          <Sparkles className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-6 text-primary animate-pulse" />
          <h2
            className="font-display font-bold text-gradient mb-3"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}
          >
            Discover Your Celesti Energy
          </h2>
          <p
            className="font-semibold text-muted-foreground mb-3"
            style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}
          >
            Find the music identity that makes you unforgettable.
          </p>
          <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-xl mx-auto">
            Your music taste isn't random. It reveals who you are. Take our 60-second cosmic quiz
            and uncover the energy that defines your vibe.
          </p>
          <CelestiQuiz />
        </div>
      </motion.section>

      {/* ── FEATURES SHOWCASE ── */}
      <FeaturesShowcase />

      {/* ── WAITLIST ── */}
      <motion.section
        id="waitlist-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-16 md:py-24 relative overflow-hidden"
      >
        {/* Glow */}
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

          {/* Social proof */}
          <SocialProof />

          {/* Form */}
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
            No spam. No credit card. Just early access.
          </p>
        </div>
      </motion.section>

      {/* ── FAQ ── */}
      <FAQ />
    </motion.div>
  );
};

export default Home;