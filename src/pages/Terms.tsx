import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Coins,
  FileText,
  UserCheck,
  Search,
  Mail,
  ChevronRight,
  Sparkles,
  Scale,
  Ban,
  Clock,
  Copyright,
  Music,
  CreditCard,
  AlertTriangle,
  Lock,
  Flag,
  CheckCircle2,
} from "lucide-react";

const Terms = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const summaryCards = [
    {
      icon: UserCheck,
      title: "Age Requirement",
      description: "You must be at least 16 years old to create an account and use CelestiFan.",
      badge: "16+ Only",
    },
    {
      icon: ShieldAlert,
      title: "Zero Tolerance Policy",
      description: "Strict anti-abuse rules. Reports reviewed within 24h with instant 1-click user blocking.",
      badge: "24h Moderation SLA",
    },
    {
      icon: Coins,
      title: "Celeste Currency",
      description: "Recognition currency celebrating fan loyalty. Celeste has no monetary or cash value.",
      badge: "No Cash Value",
    },
    {
      icon: Copyright,
      title: "Content & Music Ownership",
      description: "You retain ownership of your content while granting a operational license to CelestiFan Ltd.",
      badge: "User Owned",
    },
  ];

  const sections = [
    {
      id: "section-1",
      number: "1",
      title: "ACCEPTANCE OF TERMS",
      content: (
        <div className="space-y-3 text-sm text-slate-300">
          <p>
            By creating an account or using CelestiFan you agree to these Terms of Service. If you do not agree, do not use the platform.
          </p>
          <p className="text-xs text-purple-300 font-semibold bg-purple-950/20 p-3 rounded-xl border border-purple-500/20">
            These terms form a binding agreement between you and CelestiFan Ltd.
          </p>
        </div>
      ),
    },
    {
      id: "section-2",
      number: "2",
      title: "WHO CAN USE CELESTIFAN",
      content: (
        <div className="space-y-3 text-sm text-slate-300">
          <p>
            You must be at least 16 years old to use CelestiFan. By creating an account you confirm you meet this requirement.
          </p>
          <div className="p-3 rounded-lg border border-red-500/20 bg-red-950/20 text-xs text-red-200">
            If we learn that an account belongs to someone under 16, we will close it immediately and delete the associated data.
          </div>
        </div>
      ),
    },
    {
      id: "section-3",
      number: "3",
      title: "YOUR ACCOUNT",
      content: (
        <div className="space-y-3 text-sm text-slate-300">
          <p>
            You are responsible for keeping your login credentials secure and for all activity that takes place under your account.
          </p>
          <p>
            You must provide accurate registration information. You may not create multiple accounts to manipulate leaderboards, inflate Celeste balances, or evade a suspension.
          </p>
        </div>
      ),
    },
    {
      id: "section-4",
      number: "4",
      title: "ZERO TOLERANCE FOR OBJECTIONABLE CONTENT AND ABUSIVE BEHAVIOUR",
      content: (
        <div className="space-y-5 text-sm text-slate-300">
          <div className="p-4 rounded-xl border border-red-500/40 bg-red-950/30 text-red-100">
            <h5 className="font-bold text-red-400 mb-2 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-red-400" /> STRICT ZERO TOLERANCE POLICY
            </h5>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              CelestiFan has zero tolerance for objectionable content and abusive users. The following are strictly prohibited:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-200">
              <li className="p-2.5 rounded bg-black/40 border border-red-500/20">✖ Harassment, bullying, threats or intimidation of any person</li>
              <li className="p-2.5 rounded bg-black/40 border border-red-500/20">✖ Hate speech (race, ethnicity, religion, gender, orientation, disability)</li>
              <li className="p-2.5 rounded bg-black/40 border border-red-500/20">✖ Sexually explicit or pornographic content</li>
              <li className="p-2.5 rounded bg-black/40 border border-red-500/20">✖ Content promoting violence, self-harm or illegal activity</li>
              <li className="p-2.5 rounded bg-black/40 border border-red-500/20">✖ Spam, scams or deceptive content</li>
              <li className="p-2.5 rounded bg-black/40 border border-red-500/20">✖ Impersonation of an artist, user, or CelestiFan</li>
              <li className="p-2.5 rounded bg-black/40 border border-red-500/20">✖ Copyright or trademark infringement</li>
              <li className="p-2.5 rounded bg-black/40 border border-red-500/20">✖ False, manipulated or fraudulent proof submissions</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-purple-500/20 bg-white/[0.02] space-y-3">
            <h5 className="font-bold text-purple-300 text-base flex items-center gap-2">
              <Flag className="w-4 h-4 text-purple-400" /> REPORTING AND BLOCKING
            </h5>
            <p className="text-xs text-slate-300">
              Any Celestifan may report content or block another user from within the app. Reports can be submitted on posts, comments, messages, campaigns, profiles, and proof submissions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
              <div className="p-3 rounded-lg bg-purple-950/20 border border-purple-500/20">
                <strong className="text-purple-300 block mb-1">24-Hour Moderation SLA:</strong>
                We review every report within 24 hours. Content violating terms is removed and responsible accounts are suspended or permanently terminated.
              </div>
              <div className="p-3 rounded-lg bg-blue-950/20 border border-blue-500/20">
                <strong className="text-blue-300 block mb-1">Instant User Blocking:</strong>
                Blocking a user immediately removes their content from your feed and prevents them from contacting you.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "section-5",
      number: "5",
      title: "CELESTE RECOGNITION CURRENCY",
      content: (
        <div className="space-y-4 text-sm text-slate-300">
          <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-950/20 text-amber-100">
            <h5 className="font-bold text-amber-300 mb-2 flex items-center gap-2">
              <Coins className="w-5 h-5 text-amber-400" /> CELESTE DISCLAIMERS & RULES
            </h5>
            <p className="text-xs text-slate-300 mb-3">
              Celeste is a recognition currency used within CelestiFan to celebrate fan dedication.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-200">
              <li className="flex items-center gap-2">✔ <strong>No monetary value:</strong> Celeste cannot be exchanged for cash or any real-world currency</li>
              <li className="flex items-center gap-2">✔ <strong>Non-transferable:</strong> Celeste cannot be transferred between accounts, sold, or traded</li>
              <li className="flex items-center gap-2">✔ <strong>Not a financial token:</strong> Celeste is not a cryptocurrency, token, or financial instrument</li>
              <li className="flex items-center gap-2">✔ <strong>Account adjustments:</strong> Balances may be adjusted or removed where terms are breached</li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 italic">
            Celeste exists strictly to recognise support. Earning Celeste does not create any legal entitlement to any reward or benefit.
          </p>
        </div>
      ),
    },
    {
      id: "section-6",
      number: "6",
      title: "CAMPAIGNS AND PROOF SUBMISSIONS",
      content: (
        <div className="space-y-4 text-sm text-slate-300">
          <p>
            When you participate in a campaign you agree to submit genuine proof of the activity described in the task.
          </p>
          <p className="p-3 rounded-lg border border-red-500/20 bg-red-950/20 text-xs text-red-200">
            Submitting false, edited, duplicated, or otherwise manipulated proof is a breach of these terms and may result in removal of Celeste, suspension, or permanent termination of your account.
          </p>

          <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-950/20 space-y-2 text-xs">
            <strong className="text-cyan-300 block text-sm font-semibold">AUTOMATED REVIEW & HUMAN APPEAL</strong>
            <p className="text-slate-300">
              Proof submissions may be reviewed using automated systems that check for image manipulation, duplication, and whether the submission matches campaign requirements.
            </p>
            <p className="text-slate-300">
              If your submission is rejected by an automated process you may request human review by contacting <a href="mailto:support@celestifan.com" className="text-cyan-300 underline font-semibold">support@celestifan.com</a>. We will respond within a reasonable period.
            </p>
            <p className="text-slate-400 italic">Artists may also review and reject submissions at their discretion.</p>
          </div>
        </div>
      ),
    },
    {
      id: "section-7",
      number: "7",
      title: "CONTENT YOU UPLOAD",
      content: (
        <div className="space-y-4 text-sm text-slate-300">
          <p className="font-semibold text-slate-200">You retain ownership of content you upload to CelestiFan.</p>
          <p className="text-xs">By uploading content you:</p>
          <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300 pl-2">
            <li>Confirm you own the content or have all rights necessary to upload it</li>
            <li>Grant CelestiFan Ltd a non-exclusive, worldwide, royalty-free licence to host, store, display and distribute that content within the platform for operating the service</li>
            <li>Confirm the content does not infringe any third party rights</li>
            <li>Confirm the content complies with section 4 (Zero Tolerance policy)</li>
          </ul>
          <p className="text-xs text-slate-400">
            This licence ends when you delete the content or your account, except where shared with others who have not deleted it, or where required by law.
          </p>

          <div className="p-4 rounded-xl border border-white/10 bg-slate-900/60 text-xs text-slate-300 space-y-2">
            <strong className="text-purple-300 block text-sm font-semibold">COPYRIGHT COMPLAINTS (DMCA / NOTICE)</strong>
            <p>
              If you believe content on CelestiFan infringes your copyright, contact <a href="mailto:support@celestifan.com" className="text-purple-300 underline font-mono">support@celestifan.com</a> with details of the work, location of infringing content, and a statement that you are the rights holder or authorized representative. We will investigate and remove infringing content promptly.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "section-8",
      number: "8",
      title: "ARTIST ACCOUNTS",
      content: (
        <div className="space-y-3 text-sm text-slate-300">
          <p className="font-semibold text-slate-200">Artists who create campaigns agree to:</p>
          <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300 pl-2">
            <li>Only upload music and content they own or are licensed to use</li>
            <li>Deliver rewards as described to fans who qualify</li>
            <li>Review submissions within a reasonable time</li>
            <li>Not use the platform to mislead, defraud or exploit fans</li>
            <li>Comply with all applicable laws regarding their music and content</li>
          </ul>
          <p className="text-xs text-amber-300 bg-amber-950/20 p-3 rounded-lg border border-amber-500/20">
            Artists may not require fans to make a purchase or payment in order to complete a campaign task, except where the task explicitly relates to purchasing merchandise and this is clearly stated.
          </p>
        </div>
      ),
    },
    {
      id: "section-9",
      number: "9",
      title: "SUBSCRIPTIONS AND PAYMENTS",
      content: (
        <div className="space-y-3 text-sm text-slate-300">
          <p>CelestiFan is free to download and use. Optional paid subscription tiers are available.</p>
          <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
            <li>Subscription fees are charged in advance</li>
            <li>Subscriptions renew automatically unless cancelled before the renewal date</li>
            <li>Subscriptions purchased through the Apple App Store or Google Play are managed through those platforms and are subject to their refund policies</li>
            <li>We may change subscription pricing with 30 days notice</li>
          </ul>
          <p className="text-xs text-slate-400 italic">
            Cancelling a subscription does not delete your account or your devotion history.
          </p>
        </div>
      ),
    },
    {
      id: "section-10",
      number: "10",
      title: "TERMINATION",
      content: (
        <div className="space-y-3 text-sm text-slate-300">
          <p>We may suspend or terminate your account if:</p>
          <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
            <li>You breach these terms, particularly section 4</li>
            <li>You submit fraudulent proof</li>
            <li>You engage in illegal activity</li>
            <li>We are required to do so by law</li>
          </ul>
          <p className="text-xs text-slate-300 pt-2">
            You may delete your account at any time from Settings within the app. Deleting your account permanently removes your profile, content, and devotion history. This cannot be undone.
          </p>
        </div>
      ),
    },
    {
      id: "section-11",
      number: "11",
      title: "DISCLAIMER AND LIABILITY",
      content: (
        <div className="space-y-3 text-sm text-slate-300">
          <p>
            CelestiFan is provided on an as-is basis. We do not guarantee uninterrupted access.
          </p>
          <p>
            We are not responsible for content uploaded by users or artists, or for the conduct of users on the platform, though we will act on reports as described in section 4.
          </p>
          <div className="p-3.5 rounded-lg border border-white/10 bg-slate-900/60 text-xs text-slate-300">
            <strong>Liability Limit:</strong> Subject to mandatory consumer protection laws, our total liability to you is limited to the amount you paid us in the 12 months preceding any claim.
          </div>
        </div>
      ),
    },
    {
      id: "section-12",
      number: "12",
      title: "GOVERNING LAW",
      content: (
        <div className="space-y-3 text-sm text-slate-300">
          <p>
            These terms are governed by the laws of England and Wales.
          </p>
          <p className="text-xs text-slate-400">
            If you are a consumer resident in the European Union, you retain the benefit of any mandatory consumer protection provisions of the law of your country of residence.
          </p>
          <p className="text-xs text-purple-300">
            Disputes will be resolved through good faith negotiation before any legal proceedings.
          </p>
        </div>
      ),
    },
    {
      id: "section-13",
      number: "13",
      title: "CHANGES TO THESE TERMS",
      content: (
        <div className="space-y-3 text-sm text-slate-300">
          <p>
            We may update these terms. We will notify you of significant changes by email or prominent notice within the app. Continued use after changes take effect constitutes acceptance.
          </p>
        </div>
      ),
    },
    {
      id: "section-14",
      number: "14",
      title: "CONTACT DETAILS",
      content: (
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3 text-sm text-slate-300">
          <div>
            <strong className="text-slate-100 text-base block">CelestiFan Ltd</strong>
            <p className="text-slate-400 text-xs">182-184 High Street North, East Ham, London E6 2JA, United Kingdom</p>
            <p className="text-slate-400 text-xs font-mono">Company Number: 17292209</p>
          </div>
          <div className="pt-2 border-t border-white/[0.06] text-xs">
            <span className="text-slate-400 block">Support & Terms Enquiries:</span>
            <a href="mailto:support@celestifan.com" className="text-purple-300 font-mono hover:underline">support@celestifan.com</a>
          </div>
        </div>
      ),
    },
  ];

  const filteredSections = sections.filter(
    (sec) =>
      sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sec.number.includes(searchQuery)
  );

  return (
    <>
      <Helmet>
        <title>Terms of Service | CelestiFan</title>
        <meta
          name="description"
          content="CelestiFan Terms of Service. Understand terms of use, Zero Tolerance content policy, 24h moderation SLA, Celeste currency rules, and user rights."
        />
        <link rel="canonical" href="https://celestifan.com/terms" />
      </Helmet>

      <div className="min-h-screen bg-[#04020a] text-slate-100 relative overflow-hidden pb-24">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_70%)]" />

        <div className="container mx-auto px-4 pt-12 max-w-6xl relative z-10">

          {/* Header Hero */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-300 text-xs font-semibold mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LEGAL PORTAL • LAST UPDATED: 25 AUGUST 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-400 via-purple-200 to-cyan-300 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              Fair rules for a safe, authentic fan platform. Read our commitments, user rights, zero-tolerance policies, and platform guidelines.
            </p>

            {/* Policy Tab Switcher */}
            <div className="mt-8 inline-flex p-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
              <Link
                to="/privacy"
                className="px-6 py-2 rounded-full text-xs font-bold text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="px-6 py-2 rounded-full text-xs font-bold transition-all bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* At a Glance Cards Grid */}
          <div className="mb-14">
            <h3 className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-4 text-center">
              Terms at a Glance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {summaryCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="p-5 rounded-2xl border border-white/[0.08] bg-slate-900/40 backdrop-blur-md relative overflow-hidden group hover:border-purple-500/40 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/30 text-purple-300">
                        {card.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-100 mb-1">{card.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{card.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search terms topics (e.g. Celeste, Zero Tolerance, Moderation, Copyright)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-slate-900/60 border border-white/10 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-purple-500/50 transition-all backdrop-blur-md"
              />
            </div>
          </div>

          {/* Main Layout with Desktop Table of Contents Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">

            {/* Desktop Table of Contents */}
            <div className="hidden lg:block">
              <div className="sticky top-24 p-5 rounded-2xl border border-white/[0.08] bg-slate-900/40 backdrop-blur-md">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-purple-400" /> Terms Index
                </h4>
                <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-1 text-xs">
                  {sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block px-3 py-2 rounded-lg text-slate-400 hover:text-purple-300 hover:bg-purple-950/30 transition-colors text-ellipsis overflow-hidden whitespace-nowrap"
                    >
                      <span className="font-mono text-purple-400/80 mr-1.5">{sec.number}.</span>
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-6">
              {filteredSections.length === 0 ? (
                <div className="p-8 text-center rounded-2xl border border-white/10 bg-slate-900/30 text-slate-400 text-sm">
                  No sections match "{searchQuery}". Try searching another keyword.
                </div>
              ) : (
                filteredSections.map((sec) => (
                  <div
                    key={sec.id}
                    id={sec.id}
                    className="p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-slate-900/30 backdrop-blur-md scroll-mt-24 transition-all hover:border-white/15"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-sm font-bold flex items-center justify-center">
                        {sec.number}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-slate-100 tracking-tight">
                        {sec.title}
                      </h3>
                    </div>
                    {sec.content}
                  </div>
                ))
              )}
            </div>

          </div>

          {/* Footer Contact Banner */}
          <div className="mt-16 p-8 rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-950/40 via-slate-900/60 to-cyan-950/40 text-center max-w-3xl mx-auto backdrop-blur-md">
            <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-slate-100 mb-2">Questions About Our Terms?</h3>
            <p className="text-slate-300 text-sm mb-6 max-w-xl mx-auto">
              Our legal and support team is ready to help clarify any terms, review content inquiries, or assist with copyright claims.
            </p>
            <a
              href="mailto:support@celestifan.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm shadow-lg hover:brightness-110 transition-all"
            >
              Contact Support Team <ChevronRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Terms;
