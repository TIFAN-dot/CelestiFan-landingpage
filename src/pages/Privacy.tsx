import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  EyeOff,
  Search,
  FileText,
  AlertTriangle,
  Mail,
  ChevronRight,
  Sparkles,
  Database,
  Globe,
  Clock,
  Trash2,
  Scale,
  Server,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

const Privacy = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const summaryCards = [
    {
      icon: ShieldCheck,
      title: "Data Controller",
      description: "CelestiFan Ltd (UK Co. 17292209). We govern and safeguard your personal data responsibly under UK & EU GDPR.",
      badge: "UK & EU GDPR",
    },
    {
      icon: EyeOff,
      title: "No Data Selling",
      description: "We never sell your personal data or share it with third-party advertisers or data brokers. Ever.",
      badge: "100% Private",
    },
    {
      icon: Lock,
      title: "Encrypted & Secure",
      description: "Passwords are salted & hashed. Transmitted data is encrypted over HTTPS with zero plain-text storage.",
      badge: "HTTPS / Encrypted",
    },
    {
      icon: UserCheck,
      title: "Your Rights & Control",
      description: "Access, export, correct, or request permanent account deletion within 30 days directly in Settings.",
      badge: "Full Control",
    },
  ];

  const sections = [
    {
      id: "section-1",
      number: "1",
      title: "INTRODUCTION",
      content: (
        <div className="space-y-4">
          <p>
            This policy explains what personal data we collect, why we collect it, how we use it, and what rights you have.
          </p>
          <p>
            It applies to <span className="text-purple-300 font-mono text-sm">beta.celestifan.com</span>,{" "}
            <span className="text-purple-300 font-mono text-sm">celestifan.com</span>, and the CelestiFan mobile applications.
          </p>
          <div className="p-4 rounded-xl border border-purple-500/20 bg-purple-950/20 text-sm text-purple-200/90 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-purple-300">Data Controller Details:</span> CelestiFan Ltd is a company registered in England and Wales (company number <span className="font-mono">17292209</span>), registered office 182-184 High Street North, East Ham, London E6 2JA, United Kingdom.
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "section-2",
      number: "2",
      title: "DATA WE COLLECT",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-base font-semibold text-slate-200 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span> Information You Provide
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-300">
              <li className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]"><strong>Name & Email:</strong> Account identity & communications</li>
              <li className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]"><strong>Password:</strong> Stored encrypted, never in plain text</li>
              <li className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]"><strong>Profile Info:</strong> Biography, location, avatar image</li>
              <li className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]"><strong>For Artists:</strong> Stage name, genre, social & streaming links</li>
              <li className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]"><strong>Uploaded Content:</strong> Proof screenshots, links, posts, comments, audio & video</li>
              <li className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]"><strong>Messages & Reports:</strong> Direct messages and moderation submissions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-slate-200 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span> Information Collected Automatically
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-300">
              <li className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">Device identifiers for push notifications</li>
              <li className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">Device and browser type</li>
              <li className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">IP address</li>
              <li className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">Pages & screens visited, features used</li>
              <li className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">Campaign participation, proof submissions, Celeste balance, streaks & leaderboard position</li>
              <li className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">Crash reports & performance diagnostics</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-slate-200 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span> Information From Third Parties
            </h4>
            <p className="text-sm text-slate-300">
              If you sign in with Google, we receive your name, email address, and profile photo from Google. We do not receive your Google password.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-emerald-200/90 text-sm">
            <h5 className="font-semibold text-emerald-400 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> WHAT WE DO NOT COLLECT
            </h5>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li><strong>Your device location:</strong> Any location shown on your profile is text you typed yourself.</li>
              <li><strong>Your contacts:</strong> We never scan or upload your device contact list.</li>
              <li><strong>Your payment card details:</strong> Payments are processed directly by Apple or Google and we never see your card information.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "section-3",
      number: "3",
      title: "WHY WE USE YOUR DATA AND OUR LEGAL BASIS",
      content: (
        <div className="space-y-4 text-sm text-slate-300">
          <p>Under the UK GDPR and EU GDPR we must have a lawful basis for processing your data.</p>
          <div className="grid grid-cols-1 gap-3">
            <div className="p-4 rounded-xl border border-purple-500/20 bg-white/[0.02]">
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 inline-block mb-2">CONTRACT</span>
              <p className="text-slate-300 text-sm mb-2">Necessary to provide the service you signed up for:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-400 text-xs">
                <li>Creating and managing your account</li>
                <li>Processing campaign participation and proof submissions</li>
                <li>Awarding Celeste and unlocking rewards</li>
                <li>Displaying leaderboards and rankings</li>
                <li>Delivering messages between users</li>
                <li>Managing subscriptions</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-blue-500/20 bg-white/[0.02]">
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 inline-block mb-2">LEGITIMATE INTERESTS</span>
              <p className="text-slate-300 text-sm mb-2">Necessary to operate and protect the platform:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-400 text-xs">
                <li>Reviewing reported content and enforcing our terms</li>
                <li>Detecting fraudulent or manipulated proof submissions</li>
                <li>Improving the platform and fixing bugs</li>
                <li>Understanding how features are used</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-emerald-500/20 bg-white/[0.02]">
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 inline-block mb-2">CONSENT</span>
              <p className="text-slate-300 text-sm mb-2">Where you have given explicit permission:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-400 text-xs">
                <li>Push notifications</li>
                <li>Marketing emails</li>
              </ul>
              <p className="text-xs text-emerald-400/80 mt-2 font-medium">You may withdraw consent at any time in Settings.</p>
            </div>

            <div className="p-4 rounded-xl border border-amber-500/20 bg-white/[0.02]">
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 inline-block mb-2">LEGAL OBLIGATION</span>
              <p className="text-slate-400 text-xs">Where we are required by applicable UK or EU law to retain or disclose data.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "section-4",
      number: "4",
      title: "AUTOMATED DECISION-MAKING & RIGHT TO HUMAN REVIEW",
      content: (
        <div className="space-y-4 text-sm text-slate-300">
          <p>
            Proof submissions may be reviewed using automated systems that check for image manipulation, duplicate submissions, and whether the submission matches campaign requirements.
          </p>
          <p>
            These systems may approve a submission, reject it, or refer it for manual review. Automated rejection may mean you do not receive Celeste for that submission; it does not affect your account standing on its own.
          </p>
          <div className="p-4 rounded-xl border border-cyan-500/30 bg-cyan-950/20 text-cyan-200">
            <h5 className="font-semibold text-cyan-300 mb-1 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-cyan-400" /> YOUR RIGHT TO HUMAN REVIEW
            </h5>
            <p className="text-xs text-slate-300 leading-relaxed">
              If your submission is rejected by an automated process, you have the right to request human review. Contact <a href="mailto:privacy@celestifan.com" className="text-cyan-400 underline font-semibold hover:text-cyan-300">privacy@celestifan.com</a> and a human moderator will review the decision.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "section-5",
      number: "5",
      title: "SHARING YOUR DATA",
      content: (
        <div className="space-y-4 text-sm text-slate-300">
          <div className="p-3 rounded-lg border border-red-500/20 bg-red-950/10 text-red-200/90 font-medium text-xs">
            We do not sell your personal data. We do not share it with advertisers or data brokers.
          </div>

          <h5 className="font-semibold text-slate-200 text-base">We share data only as follows:</h5>

          <div className="space-y-3">
            <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <strong className="text-purple-300 block mb-1">With Other Users</strong>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                <li>Your username, avatar, Celeste balance, and rank appear on public leaderboards</li>
                <li>Artists whose campaigns you join can see your username, proof submissions, streak, and participation history</li>
                <li>Content you post publicly is visible to other Celestifans</li>
              </ul>
              <p className="text-xs text-slate-400 mt-2 italic">You can limit some of this in Privacy Settings.</p>
            </div>

            <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <strong className="text-cyan-300 block mb-2">With Service Providers</strong>
              <p className="text-xs text-slate-300 mb-3">
                We use third parties to operate the platform. Each is bound by contract to protect your data and may only use it to provide services to us:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                <span className="p-2 rounded bg-slate-900 border border-white/10 font-mono text-purple-200">Railway — Backend Hosting</span>
                <span className="p-2 rounded bg-slate-900 border border-white/10 font-mono text-purple-200">Supabase — DB & File Storage</span>
                <span className="p-2 rounded bg-slate-900 border border-white/10 font-mono text-purple-200">Vercel — Web Hosting</span>
                <span className="p-2 rounded bg-slate-900 border border-white/10 font-mono text-purple-200">Resend — Transactional Email</span>
                <span className="p-2 rounded bg-slate-900 border border-white/10 font-mono text-purple-200">PostHog — Product Analytics</span>
                <span className="p-2 rounded bg-slate-900 border border-white/10 font-mono text-purple-200">Apple & Google — Apps & Payments</span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <strong className="text-amber-300 block mb-1">Where Required by Law</strong>
              <p className="text-xs text-slate-300">
                We may disclose data where legally required, or to protect the rights and safety of users.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "section-6",
      number: "6",
      title: "INTERNATIONAL TRANSFERS",
      content: (
        <div className="space-y-3 text-sm text-slate-300">
          <p>
            CelestiFan is operated from the United Kingdom and our users are worldwide. Some of our service providers process data outside the UK and European Economic Area.
          </p>
          <p>
            Where data is transferred outside the UK or EEA, we rely on appropriate safeguards including Standard Contractual Clauses approved by the UK Information Commissioner or the European Commission.
          </p>
        </div>
      ),
    },
    {
      id: "section-7",
      number: "7",
      title: "HOW LONG WE KEEP DATA",
      content: (
        <div className="space-y-3 text-sm text-slate-300">
          <ul className="space-y-2 text-xs">
            <li className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] flex justify-between items-center">
              <span><strong>Account data:</strong> Retained for as long as your account is active</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-purple-500/20 text-purple-300 font-mono">Active Duration</span>
            </li>
            <li className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] flex justify-between items-center">
              <span><strong>Devotion history:</strong> Proof submissions, Celeste, streaks, leaderboard positions</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-purple-500/20 text-purple-300 font-mono">Core Service</span>
            </li>
            <li className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] flex justify-between items-center">
              <span><strong>Messages:</strong> Retained while your account is active</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-purple-500/20 text-purple-300 font-mono">Active Duration</span>
            </li>
            <li className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] flex justify-between items-center">
              <span><strong>Earned reward content:</strong> Expires 30 days from date earned</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-300 font-mono">30 Days</span>
            </li>
            <li className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] flex justify-between items-center">
              <span><strong>Reports and moderation records:</strong> To enforce terms & address repeat behavior</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-300 font-mono">Up to 2 Years</span>
            </li>
            <li className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] flex justify-between items-center">
              <span><strong>Crash and analytics data:</strong> Diagnostic performance metrics</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-blue-500/20 text-blue-300 font-mono">Up to 12 Months</span>
            </li>
          </ul>
          <p className="text-xs text-slate-400 pt-2">
            When you delete your account we permanently delete your personal data within 30 days, except where we are required by law to retain it.
          </p>
        </div>
      ),
    },
    {
      id: "section-8",
      number: "8",
      title: "YOUR RIGHTS",
      content: (
        <div className="space-y-4 text-sm text-slate-300">
          <p>Under UK and EU data protection law you have the right to:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.05]">✔ Access personal data we hold about you</div>
            <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.05]">✔ Correct inaccurate data</div>
            <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.05]">✔ Request deletion of your data</div>
            <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.05]">✔ Restrict or object to processing</div>
            <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.05]">✔ Receive data in a portable format</div>
            <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.05]">✔ Withdraw consent at any time</div>
            <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.05] col-span-1 sm:col-span-2">✔ Not be subject to solely automated decisions with significant effect (see section 4)</div>
          </div>
          <p>
            To exercise any of these rights, contact <a href="mailto:privacy@celestifan.com" className="text-purple-300 underline hover:text-purple-200">privacy@celestifan.com</a>. We will respond within one month.
          </p>
          <div className="p-3 rounded-lg border border-white/10 bg-slate-900/60 text-xs text-slate-400">
            If you are unhappy with how we handle your data you have the right to complain to a supervisory authority. In the UK this is the <strong>Information Commissioner's Office</strong> (<a href="https://ico.org.uk" target="_blank" rel="noreferrer" className="text-purple-300 underline">ico.org.uk</a>). In the EU this is the data protection authority in your country.
          </div>
        </div>
      ),
    },
    {
      id: "section-9",
      number: "9",
      title: "HOW TO DELETE YOUR ACCOUNT",
      content: (
        <div className="space-y-4 text-sm text-slate-300">
          <p className="font-semibold text-slate-200">You can delete your account at any time directly in the app:</p>
          <ol className="list-decimal list-inside space-y-1 text-xs text-purple-200 bg-purple-950/20 p-4 rounded-xl border border-purple-500/20">
            <li>Open the CelestiFan app</li>
            <li>Go to <strong>Settings</strong></li>
            <li>Tap <strong>Delete Account</strong></li>
            <li>Confirm</li>
          </ol>
          <p className="text-xs">
            Alternatively, email <a href="mailto:privacy@celestifan.com" className="text-purple-300 underline">privacy@celestifan.com</a> from the address associated with your account and we will process the deletion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-2">
            <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/20 text-red-200">
              <strong className="block text-red-300 mb-1">WHAT IS DELETED PERMANENTLY:</strong>
              Your profile, name, email, avatar, biography, posts, comments, messages, proof submissions, Celeste balance, streaks, leaderboard history, earned rewards, and campaign participation.
            </div>
            <div className="p-3 rounded-lg bg-slate-900/60 border border-white/10 text-slate-300">
              <strong className="block text-slate-200 mb-1">WHAT MAY BE RETAINED:</strong>
              <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-400">
                <li>Subscription transaction records required for legal/tax purposes</li>
                <li>Moderation records where account was suspended for terms breach (up to 2 years)</li>
                <li>Aggregated statistics that cannot identify you</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-red-400 font-semibold italic">
            Deletion is permanent and cannot be undone. Your devotion history cannot be recovered.
          </p>
        </div>
      ),
    },
    {
      id: "section-10",
      number: "10",
      title: "SECURITY",
      content: (
        <div className="space-y-3 text-sm text-slate-300">
          <p>
            All data transmitted between the app and our servers is encrypted using HTTPS. Passwords are stored using industry-standard hashing and are never stored in readable form.
          </p>
          <p className="text-xs text-slate-400">
            No system is completely secure. If a data breach occurs that is likely to affect your rights, we will notify you and the relevant authority as required by law.
          </p>
        </div>
      ),
    },
    {
      id: "section-11",
      number: "11",
      title: "COOKIES",
      content: (
        <div className="space-y-3 text-sm text-slate-300">
          <p>
            On our website we use cookies necessary to keep you signed in and to maintain your session. We use PostHog analytics cookies to understand how the site is used. You can control cookies through your browser settings.
          </p>
          <p className="text-xs text-purple-300 bg-purple-950/30 p-3 rounded-lg border border-purple-500/20">
            <strong>Mobile Apps:</strong> The mobile apps do not use cookies. They use secure device storage to keep you signed in.
          </p>
        </div>
      ),
    },
    {
      id: "section-12",
      number: "12",
      title: "CHILDREN",
      content: (
        <div className="space-y-3 text-sm text-slate-300">
          <p>
            CelestiFan is not intended for anyone under 16. We do not knowingly collect data from children under 16.
          </p>
          <p className="text-xs text-amber-300 bg-amber-950/20 p-3 rounded-lg border border-amber-500/20">
            If you believe a child under 16 has created an account, contact <a href="mailto:privacy@celestifan.com" className="underline font-semibold">privacy@celestifan.com</a> and we will immediately remove it.
          </p>
        </div>
      ),
    },
    {
      id: "section-13",
      number: "13",
      title: "CHANGES TO THIS POLICY",
      content: (
        <div className="space-y-3 text-sm text-slate-300">
          <p>
            We may update this policy. We will notify you of significant changes by email or prominent notice in the app. The date at the top shows when it was last updated.
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
          <div className="pt-2 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-slate-400 block">Privacy Enquiries:</span>
              <a href="mailto:privacy@celestifan.com" className="text-purple-300 font-mono hover:underline">privacy@celestifan.com</a>
            </div>
            <div>
              <span className="text-slate-400 block">General Support:</span>
              <a href="mailto:celestifan@gmail.com" className="text-purple-300 font-mono hover:underline">celestifan@gmail.com</a>
            </div>
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
        <title>Privacy Policy | CelestiFan</title>
        <meta
          name="description"
          content="CelestiFan Privacy Policy. Understand what personal data CelestiFan Ltd collects, how it is protected, your UK/EU GDPR rights, and account deletion options."
        />
        <link rel="canonical" href="https://celestifan.com/privacy" />
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
              Privacy Policy
            </h1>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              Clear, transparent data protections. Learn how CelestiFan Ltd protects your data, honors your rights, and puts you in total control.
            </p>

            {/* Policy Tab Switcher */}
            <div className="mt-8 inline-flex p-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
              <Link
                to="/privacy"
                className="px-6 py-2 rounded-full text-xs font-bold transition-all bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
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

          {/* At a Glance Cards Grid */}
          <div className="mb-14">
            <h3 className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-4 text-center">
              Privacy at a Glance
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
                placeholder="Search privacy topics (e.g. GDPR, Delete, Cookies, Automated)..."
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
                  <FileText className="w-4 h-4 text-purple-400" /> Policy Index
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
            <h3 className="text-xl font-bold text-slate-100 mb-2">Have Questions About Your Privacy?</h3>
            <p className="text-slate-300 text-sm mb-6 max-w-xl mx-auto">
              Our dedicated Data Protection team is ready to answer questions, process data rights, or assist with account deletion requests.
            </p>
            <a
              href="mailto:privacy@celestifan.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm shadow-lg hover:brightness-110 transition-all"
            >
              Contact Data Protection Team <ChevronRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Privacy;
