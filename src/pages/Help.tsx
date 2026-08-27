import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Search,
  Sparkles,
  Heart,
  Music,
  ShieldAlert,
  Lock,
  Mail,
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Flame,
  Trophy,
  Award,
  UserCheck,
  Ban,
  Flag,
  Key,
  Trash2,
  CreditCard,
  FileText,
  Clock,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    { id: "getting-started", title: "Getting Started", icon: Sparkles, color: "from-purple-500/20 to-purple-900/20 border-purple-500/30 text-purple-300" },
    { id: "for-fans", title: "For Fans", icon: Heart, color: "from-blue-500/20 to-blue-900/20 border-blue-500/30 text-blue-300" },
    { id: "for-artists", title: "For Artists", icon: Music, color: "from-emerald-500/20 to-emerald-900/20 border-emerald-500/30 text-emerald-300" },
    { id: "safety-reporting", title: "Safety & Reporting", icon: ShieldAlert, color: "from-red-500/20 to-red-900/20 border-red-500/30 text-red-300" },
    { id: "account-privacy", title: "Account & Privacy", icon: Lock, color: "from-amber-500/20 to-amber-900/20 border-amber-500/30 text-amber-300" },
    { id: "contact-us", title: "Contact Us", icon: Mail, color: "from-cyan-500/20 to-cyan-900/20 border-cyan-500/30 text-cyan-300" },
  ];

  const faqData = [
    // GETTING STARTED
    {
      category: "getting-started",
      question: "WHAT IS CELESTIFAN?",
      answer: (
        <div className="space-y-3">
          <p className="text-slate-300 font-semibold text-base">CelestiFan is where support gets remembered.</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            You've been streaming your favourite artists for years. Sharing them. Showing up before anyone else noticed. None of that has ever been recorded anywhere.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            CelestiFan changes that. You submit proof of the support you're already giving, and it becomes a permanent record the artist can actually see.
          </p>
        </div>
      ),
    },
    {
      category: "getting-started",
      question: "DO I NEED TO PAY?",
      answer: (
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5" /> 100% Free Core Access
          </div>
          <p className="text-slate-300 text-sm">
            No. CelestiFan is free to download and free to use.
          </p>
          <p className="text-slate-400 text-xs leading-relaxed">
            Optional paid tiers exist for people who want extra features, but everything core — joining campaigns, submitting proof, earning Celeste, appearing on leaderboards — is free.
          </p>
        </div>
      ),
    },
    {
      category: "getting-started",
      question: "AM I A FAN OR AN ARTIST?",
      answer: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 text-slate-300">
            <strong className="text-purple-300 text-sm block mb-1">Choose Fan</strong>
            If you want to support artists you love and have that support recorded permanently.
          </div>
          <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 text-slate-300">
            <strong className="text-blue-300 text-sm block mb-1">Choose Artist</strong>
            If you make music and want to see who your real, most devoted supporters are.
          </div>
          <p className="text-slate-400 text-xs col-span-1 sm:col-span-2 italic">You choose when you sign up.</p>
        </div>
      ),
    },

    // FOR FANS
    {
      category: "for-fans",
      question: "HOW DO I JOIN A CAMPAIGN?",
      answer: (
        <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-300 bg-slate-900/60 p-4 rounded-xl border border-white/10">
          <li>Open the <strong>Campaigns</strong> tab</li>
          <li>Tap a campaign that interests you</li>
          <li>Tap <strong>Join</strong></li>
          <li className="text-purple-300 font-semibold pt-1">That's it. You're in.</li>
        </ol>
      ),
    },
    {
      category: "for-fans",
      question: "HOW DO I SUBMIT PROOF?",
      answer: (
        <div className="space-y-4 text-xs text-slate-300">
          <p className="text-slate-300">
            Every campaign has tasks. Each one tells you exactly what to do and what proof it needs.
          </p>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-2">
            <strong className="text-purple-300 text-sm block flex items-center gap-2">
              <Music className="w-4 h-4 text-purple-400" /> For a Listening Task:
            </strong>
            <ol className="list-decimal list-inside space-y-1 text-slate-300">
              <li>Open the <strong>Fan Tasks</strong> tab</li>
              <li>Tap a task like <em>"Listen to the song"</em></li>
              <li>Play the song on Spotify, Apple Music, Boomplay or wherever you listen</li>
              <li>Take a screenshot while it's playing</li>
              <li>Come back, upload the screenshot, tap <strong>Submit Proof</strong></li>
            </ol>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-2">
            <strong className="text-cyan-300 text-sm block flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-cyan-400" /> For a Social Media Task:
            </strong>
            <ol className="list-decimal list-inside space-y-1 text-slate-300">
              <li>Create a post, story or video using the song on TikTok, Instagram, X or any platform</li>
              <li>Copy the link to your post</li>
              <li>Paste the link into the task and tap <strong>Submit Proof</strong></li>
            </ol>
          </div>
          <p className="text-xs text-purple-300 font-medium italic">
            Your submission goes to the artist for approval. Once approved, you earn Celeste.
          </p>
        </div>
      ),
    },
    {
      category: "for-fans",
      question: "WHY WAS MY PROOF REJECTED?",
      answer: (
        <div className="space-y-3 text-xs text-slate-300">
          <p className="font-semibold text-slate-200">A submission can be rejected if:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-300 bg-red-950/20 p-4 rounded-xl border border-red-500/20">
            <li>The screenshot doesn't clearly show the song playing</li>
            <li>The same screenshot was submitted before</li>
            <li>The image appears edited or manipulated</li>
            <li>The link doesn't contain the song</li>
            <li>It doesn't match what the task asked for</li>
          </ul>
          <div className="p-3 rounded-lg bg-cyan-950/20 border border-cyan-500/20 text-cyan-200">
            <strong>Automated Appeals:</strong> Some submissions are checked automatically. If you believe an automated decision was wrong, email <a href="mailto:support@celestifan.com" className="text-cyan-300 underline font-semibold">support@celestifan.com</a> and a human moderator will review it.
          </div>
        </div>
      ),
    },
    {
      category: "for-fans",
      question: "WHAT IS CELESTE?",
      answer: (
        <div className="space-y-3 text-xs text-slate-300">
          <p className="text-sm font-semibold text-amber-300">
            Celeste is CelestiFan's recognition currency. You earn it when your proof is approved.
          </p>
          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-amber-100 space-y-2">
            <strong className="block text-amber-400 text-xs">IMPORTANT DISCLAIMERS:</strong>
            <p>
              Celeste is not money. It cannot be converted to cash, transferred, sold or traded. It is not a cryptocurrency.
            </p>
          </div>
          <p className="text-slate-300">
            Celeste exists to measure and recognise devotion. It's how your support becomes visible to the artist.
          </p>
        </div>
      ),
    },
    {
      category: "for-fans",
      question: "WHAT ARE STREAKS?",
      answer: (
        <div className="space-y-3 text-xs text-slate-300">
          <p>
            If you submit approved proof on consecutive days, you build a streak — and streaks multiply the Celeste you earn.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
            <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/30 text-center">
              <span className="block font-mono text-xs text-purple-400">3 Days</span>
              <strong className="text-lg text-purple-200">1.1x</strong>
            </div>
            <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/30 text-center">
              <span className="block font-mono text-xs text-purple-400">7 Days</span>
              <strong className="text-lg text-purple-200">1.25x</strong>
            </div>
            <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/30 text-center">
              <span className="block font-mono text-xs text-purple-400">14 Days</span>
              <strong className="text-lg text-purple-200">1.5x</strong>
            </div>
            <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/30 text-center">
              <span className="block font-mono text-xs text-purple-400">30 Days</span>
              <strong className="text-lg text-purple-200">2.0x</strong>
            </div>
          </div>
          <p className="text-slate-400 italic">
            Miss a day and the streak resets. Showing up consistently is the point.
          </p>
        </div>
      ),
    },
    {
      category: "for-fans",
      question: "HOW DO REWARDS WORK?",
      answer: (
        <div className="space-y-3 text-xs text-slate-300">
          <p>Artists set up to three reward tiers on a campaign:</p>
          <div className="space-y-2">
            <div className="p-3 rounded-lg bg-slate-900/60 border border-white/10 flex justify-between items-center">
              <div>
                <strong className="text-purple-300 block">Base Tier</strong>
                <span className="text-slate-400 text-[11px]">Unlocks after 1 approved proof</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono text-[10px]">1 Proof</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/60 border border-white/10 flex justify-between items-center">
              <div>
                <strong className="text-cyan-300 block">Mid Tier</strong>
                <span className="text-slate-400 text-[11px]">Unlocks after 3 approved proofs</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px]">3 Proofs</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/60 border border-white/10 flex justify-between items-center">
              <div>
                <strong className="text-amber-300 block">Top Fan Tier</strong>
                <span className="text-slate-400 text-[11px]">Unlocks if you reach top 10 on leaderboard</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px]">Top 10 Rank</span>
            </div>
          </div>
          <p className="text-slate-400 pt-1">
            Rewards can be exclusive images, audio or certificates. Once unlocked, you have <strong>30 days</strong> to save the reward to your collection.
          </p>
        </div>
      ),
    },
    {
      category: "for-fans",
      question: "WHAT IS THE LEADERBOARD?",
      answer: (
        <div className="space-y-3 text-xs text-slate-300">
          <p>
            Every campaign has a leaderboard ranking Celestifans by the Celeste they've earned.
          </p>
          <p className="p-3 rounded-lg bg-purple-950/20 border border-purple-500/20 text-purple-200">
            The artist can see it. Your name, your streak, your proof history — visible to the person whose music you support.
          </p>
          <p className="text-slate-400">
            There's also a global ranking across the whole platform.
          </p>
        </div>
      ),
    },

    // FOR ARTISTS
    {
      category: "for-artists",
      question: "HOW DO I CREATE A CAMPAIGN?",
      answer: (
        <div className="space-y-3 text-xs text-slate-300">
          <ol className="list-decimal list-inside space-y-1.5 bg-slate-900/60 p-4 rounded-xl border border-white/10">
            <li>Go to <strong>Campaigns</strong> and tap <strong>Create Campaign</strong></li>
            <li>Add a title and description</li>
            <li>Select the song you're promoting</li>
            <li>Add tasks — choose from templates like <em>"Listen to the song"</em> or <em>"Use song on social media"</em></li>
            <li>Set up to three reward tiers</li>
            <li>Publish, then share the link with your fans</li>
          </ol>
          <p className="text-emerald-400 font-semibold text-xs italic">Takes about five minutes.</p>
        </div>
      ),
    },
    {
      category: "for-artists",
      question: "HOW DO I REVIEW SUBMISSIONS?",
      answer: (
        <div className="space-y-3 text-xs text-slate-300">
          <p>
            Open the <strong>Studio</strong> tab. The <strong>Submissions</strong> section shows every proof your fans have sent, with their name, what they submitted, and how long they've been supporting you.
          </p>
          <p>
            Approve or decline each one. If you decline, you can add a note explaining why.
          </p>
        </div>
      ),
    },
    {
      category: "for-artists",
      question: "WHAT CAN I SEE ABOUT MY FANS?",
      answer: (
        <div className="space-y-3 text-xs text-slate-300">
          <p className="font-semibold text-slate-200">The Studio shows you what no streaming platform does:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-300 bg-emerald-950/20 p-4 rounded-xl border border-emerald-500/20">
            <li>Who your most devoted supporters are, by name</li>
            <li>How long each person has been supporting you</li>
            <li>Their submission streaks</li>
            <li>Who showed up first</li>
          </ul>
          <p className="text-slate-400 italic">
            You can sort by deepest devotion, longest streak, or most consistent.
          </p>
        </div>
      ),
    },

    // SAFETY AND REPORTING
    {
      category: "safety-reporting",
      question: "HOW DO I REPORT SOMETHING?",
      answer: (
        <div className="space-y-3 text-xs text-slate-300">
          <p>You can report any post, comment, message, campaign, profile or proof submission.</p>
          <ol className="list-decimal list-inside space-y-1.5 bg-slate-900/60 p-4 rounded-xl border border-white/10">
            <li>Tap the three-dot menu on the content or profile</li>
            <li>Tap <strong>Report</strong></li>
            <li>Choose a reason</li>
            <li>Submit</li>
          </ol>
          <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/30 text-red-200">
            <strong className="block text-red-300 font-semibold mb-1">24-Hour Review SLA:</strong>
            We review every report within 24 hours. Content that breaks our rules is removed and the account responsible is suspended or permanently terminated.
          </div>
          <p className="text-slate-400">
            You can also email <a href="mailto:support@celestifan.com" className="text-purple-300 underline font-mono">support@celestifan.com</a> with details.
          </p>
        </div>
      ),
    },
    {
      category: "safety-reporting",
      question: "HOW DO I BLOCK SOMEONE?",
      answer: (
        <div className="space-y-3 text-xs text-slate-300">
          <ol className="list-decimal list-inside space-y-1.5 bg-slate-900/60 p-4 rounded-xl border border-white/10">
            <li>Go to their profile, or tap the three-dot menu in a conversation</li>
            <li>Tap <strong>Block</strong></li>
          </ol>
          <p className="p-3 rounded-lg bg-blue-950/20 border border-blue-500/20 text-blue-200">
            Once blocked, their content disappears from your feed immediately and they can't message you.
          </p>
          <p className="text-slate-400">
            You can manage blocked users in <strong>Settings → Blocked Users</strong>.
          </p>
        </div>
      ),
    },
    {
      category: "safety-reporting",
      question: "WHAT COUNTS AS OBJECTIONABLE CONTENT?",
      answer: (
        <div className="space-y-3 text-xs text-slate-300">
          <p>
            Harassment, hate speech, threats, sexually explicit content, violence, spam, scams, impersonation, copyright infringement, and fake or manipulated proof submissions.
          </p>
          <p>
            Full details are in our <Link to="/terms" className="text-purple-300 underline font-semibold">Terms of Service</Link>.
          </p>
        </div>
      ),
    },

    // ACCOUNT AND PRIVACY
    {
      category: "account-privacy",
      question: "HOW DO I CHANGE MY PASSWORD?",
      answer: (
        <div className="space-y-3 text-xs text-slate-300">
          <p>Go to <strong>Settings → Change Password</strong>.</p>
          <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/20 text-purple-200">
            <strong>Google Sign-In Users:</strong> If you signed up with Google you may not have a password. To sign in on a device without your Google account, use <em>"Get a login code instead"</em> on the login screen — we'll email you a six-digit code.
          </div>
        </div>
      ),
    },
    {
      category: "account-privacy",
      question: "I FORGOT MY PASSWORD",
      answer: (
        <div className="space-y-3 text-xs text-slate-300">
          <p>
            On the login screen, tap <strong>"Get a login code instead"</strong>. Enter your email and we'll send you a six-digit code that signs you in.
          </p>
        </div>
      ),
    },
    {
      category: "account-privacy",
      question: "HOW DO I DELETE MY ACCOUNT?",
      answer: (
        <div className="space-y-3 text-xs text-slate-300">
          <ol className="list-decimal list-inside space-y-1.5 bg-slate-900/60 p-4 rounded-xl border border-white/10">
            <li>Open the CelestiFan app</li>
            <li>Go to <strong>Settings</strong></li>
            <li>Tap <strong>Delete Account</strong></li>
            <li>Confirm</li>
          </ol>
          <p>
            Or email <a href="mailto:privacy@celestifan.com" className="text-purple-300 underline font-mono">privacy@celestifan.com</a> from the address on your account.
          </p>
          <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/20 text-red-200">
            This permanently deletes your profile, your content, your Celeste and your devotion history. It cannot be undone. Full details in our <Link to="/privacy" className="text-red-300 underline font-semibold">Privacy Policy</Link>.
          </div>
        </div>
      ),
    },
    {
      category: "account-privacy",
      question: "WHAT DATA DO YOU COLLECT?",
      answer: (
        <div className="space-y-3 text-xs text-slate-300">
          <p>
            Your name, email, profile information, the content you upload, and your activity on the platform.
          </p>
          <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-emerald-200">
            <strong>WHAT WE DO NOT COLLECT:</strong> We do not collect your device location, your contacts, or your payment card details. We do not sell your data.
          </div>
          <p>
            Full details in our <Link to="/privacy" className="text-purple-300 underline font-semibold">Privacy Policy</Link>.
          </p>
        </div>
      ),
    },
  ];

  const filteredFaqs = faqData.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (typeof item.answer === "string" && item.answer.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory ? item.category === activeCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Help & Support Center | CelestiFan</title>
        <meta
          name="description"
          content="CelestiFan Help & Support Center. Everything you need to know about using CelestiFan for fans and artists, campaign proof submissions, Celeste tokens, streaks, safety, and account management."
        />
        <link rel="canonical" href="https://celestifan.com/help" />
      </Helmet>

      <div className="min-h-screen bg-[#04020a] text-slate-100 relative overflow-hidden pb-24">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_70%)]" />

        <div className="container mx-auto px-4 pt-12 max-w-6xl relative z-10">

          {/* Header Hero */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-300 text-xs font-semibold mb-4 backdrop-blur-md">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>SUPPORT & KNOWLEDGE BASE</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-400 via-purple-200 to-cyan-300 bg-clip-text text-transparent">
              How can we help you?
            </h1>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              Everything you need to know about using CelestiFan. If you can't find your answer here, email us and a real person will reply.
            </p>

            {/* Support / Legal Tab Switcher */}
            <div className="mt-8 inline-flex p-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
              <Link
                to="/help"
                className="px-6 py-2 rounded-full text-xs font-bold transition-all bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
              >
                Help Center
              </Link>
              <Link
                to="/privacy"
                className="px-6 py-2 rounded-full text-xs font-bold text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="px-6 py-2 rounded-full text-xs font-bold text-slate-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Search Input Bar */}
          <div className="max-w-2xl mx-auto mb-14">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search help articles (e.g. proof, streaks, Celeste, delete account, report)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-slate-900/80 border border-white/15 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-purple-500/50 shadow-xl backdrop-blur-md transition-all"
              />
            </div>
          </div>

          {/* Categories Grid */}
          <div className="mb-14">
            <h3 className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-4 text-center">
              Browse by Category
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <button
                onClick={() => setActiveCategory(null)}
                className={`p-4 rounded-2xl border text-center transition-all ${
                  activeCategory === null
                    ? "bg-purple-600/20 border-purple-500/50 text-white font-bold shadow-lg"
                    : "bg-slate-900/40 border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                <span className="text-xs">All Topics</span>
              </button>
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(isSelected ? null : cat.id)}
                    className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 ${
                      isSelected
                        ? "bg-purple-600/30 border-purple-400 text-white font-bold shadow-lg scale-105"
                        : "bg-slate-900/40 border-white/[0.08] text-slate-400 hover:text-white hover:border-purple-500/30"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isSelected ? "text-purple-300" : "text-slate-400"}`} />
                    <span className="text-xs">{cat.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Q&A Accordion Sections */}
          <div className="max-w-4xl mx-auto space-y-4 mb-20">
            {filteredFaqs.length === 0 ? (
              <div className="p-8 text-center rounded-2xl border border-white/10 bg-slate-900/30 text-slate-400 text-sm">
                No help topics match "{searchQuery}". Try searching another keyword or email us directly at <a href="mailto:support@celestifan.com" className="text-purple-300 underline">support@celestifan.com</a>.
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/[0.08] bg-slate-900/40 backdrop-blur-md transition-all hover:border-purple-500/30"
                >
                  <h3 className="text-base font-bold text-slate-100 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    {faq.question}
                  </h3>
                  {faq.answer}
                </div>
              ))
            )}
          </div>

          {/* Direct Contact & Company Details Section */}
          <div className="max-w-4xl mx-auto p-8 rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-950/40 via-slate-900/60 to-cyan-950/40 backdrop-blur-md">
            <div className="text-center mb-8">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-slate-100 mb-1">Still Need Help?</h3>
              <p className="text-slate-300 text-sm">
                Email support@celestifan.com and tell us what's happening. A real person will reply.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-8">
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2">
                <strong className="text-purple-300 text-sm block">General Support & Questions</strong>
                <p className="text-slate-400">Campaigns, streaks, rewards, or platform issues:</p>
                <a href="mailto:support@celestifan.com" className="text-purple-300 font-mono text-sm underline block font-semibold">
                  support@celestifan.com
                </a>
                <span className="inline-block px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-mono">
                  SLA: Reply within 48 hours
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2">
                <strong className="text-cyan-300 text-sm block">Privacy, Data & Account Deletion</strong>
                <p className="text-slate-400">GDPR data rights, privacy inquiries, or account deletion:</p>
                <a href="mailto:privacy@celestifan.com" className="text-cyan-300 font-mono text-sm underline block font-semibold">
                  privacy@celestifan.com
                </a>
                <span className="inline-block px-2 py-0.5 rounded bg-red-500/20 text-red-300 text-[10px] font-mono">
                  Harmful Content SLA: Reviewed within 24 hours
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-center text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-200">CelestiFan Ltd</p>
              <p>182-184 High Street North, East Ham, London E6 2JA, United Kingdom</p>
              <p className="font-mono text-slate-500">Company Number: 17292209</p>
              <p className="text-purple-400 font-semibold pt-2 text-sm">CelestiFan Ltd — Fan Lives Matter</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Help;
