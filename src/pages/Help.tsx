import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Mail,
  Clock,
  HelpCircle,
  Send,
  CheckCircle2,
  Shield,
  FileText,
  Search,
  Sparkles,
  Heart,
  Music,
  ShieldAlert,
  Lock,
  MessageSquare,
} from "lucide-react";

export default function Help() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Form State for Support Inquiry
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const categories = [
    { id: "getting-started", title: "Getting Started", icon: Sparkles },
    { id: "for-fans", title: "For Fans", icon: Heart },
    { id: "for-artists", title: "For Artists", icon: Music },
    { id: "safety-reporting", title: "Safety & Reporting", icon: ShieldAlert },
    { id: "account-privacy", title: "Account & Privacy", icon: Lock },
    { id: "contact-us", title: "Contact Us", icon: Mail },
  ];

  const faqData = [
    // APP STORE GUIDELINE SPECIFIC FAQS
    {
      category: "safety-reporting",
      question: "How do I report offensive content or abusive users in the app?",
      answer: (
        <div className="space-y-2 text-sm text-slate-300">
          <p>
            Tap the three dots (•••) on any post, comment, message, campaign, or user profile and select <strong>Report</strong>. Choose a reason and submit.
          </p>
          <p className="p-3 rounded-lg bg-red-950/20 border border-red-500/20 text-xs text-red-200">
            <strong>24-Hour Review SLA:</strong> We review all reports within 24 hours. Content violating our terms is removed and the responsible account is suspended or terminated.
          </p>
          <p>
            You can also tap <strong>Block User</strong> to immediately hide all content from that user and prevent them from contacting you.
          </p>
        </div>
      ),
    },
    {
      category: "account-privacy",
      question: "How do I request account deletion or data removal?",
      answer: (
        <div className="space-y-2 text-sm text-slate-300">
          <p>
            You can request account and data deletion directly in the mobile app by going to <strong>Settings → Delete Account</strong> and confirming.
          </p>
          <p>
            Alternatively, email us at <a href="mailto:privacy@celestifan.com" className="text-purple-300 underline font-mono">privacy@celestifan.com</a> or <a href="mailto:support@celestifan.com" className="text-purple-300 underline font-mono">support@celestifan.com</a> with the subject <em>"Account Deletion Request"</em>.
          </p>
          <p className="text-xs text-slate-400">
            Account deletion permanently removes your profile, uploaded content, Celeste points, and devotion history within 30 days.
          </p>
        </div>
      ),
    },
    {
      category: "getting-started",
      question: "What should I do if audio or video fails to play?",
      answer: (
        <div className="space-y-2 text-sm text-slate-300">
          <p>
            Ensure your device has an active internet connection and that Silent/Mute mode is toggled off. Tap the retry button on the audio preview or restart the app.
          </p>
        </div>
      ),
    },
    {
      category: "for-fans",
      question: "How do campaigns and Celeste rewards work?",
      answer: (
        <div className="space-y-2 text-sm text-slate-300">
          <p>
            Fans support their favorite artists by completing verified proof submissions (e.g. streaming songs or sharing links). When approved by the artist or system, fans receive Celeste points to unlock exclusive music, rewards, and leaderboard rankings.
          </p>
        </div>
      ),
    },

    // GETTING STARTED
    {
      category: "getting-started",
      question: "What is CelestiFan?",
      answer: (
        <div className="space-y-2 text-sm text-slate-300">
          <p className="font-semibold text-slate-200">CelestiFan is where support gets remembered.</p>
          <p className="text-slate-300">
            You submit proof of the support you're already giving to artists (streaming, sharing, posting), and it becomes a permanent record the artist can actually see.
          </p>
        </div>
      ),
    },
    {
      category: "getting-started",
      question: "Do I need to pay to use CelestiFan?",
      answer: (
        <div className="space-y-2 text-sm text-slate-300">
          <p>
            <strong>No. CelestiFan is 100% free to download and free to use.</strong>
          </p>
          <p className="text-xs text-slate-400">
            Optional paid tiers exist for people who want extra features, but everything core — joining campaigns, submitting proof, earning Celeste, appearing on leaderboards — is free.
          </p>
        </div>
      ),
    },
    {
      category: "getting-started",
      question: "Am I a Fan or an Artist?",
      answer: (
        <div className="space-y-2 text-sm text-slate-300">
          <p>
            Choose <strong>Fan</strong> if you want to support artists you love and have that support recorded. Choose <strong>Artist</strong> if you make music and want to see who your real supporters are. You select your account type when you sign up.
          </p>
        </div>
      ),
    },

    // FOR FANS
    {
      category: "for-fans",
      question: "How do I join a campaign?",
      answer: (
        <ol className="list-decimal list-inside space-y-1 text-sm text-slate-300">
          <li>Open the <strong>Campaigns</strong> tab in the app</li>
          <li>Tap a campaign that interests you</li>
          <li>Tap <strong>Join</strong></li>
        </ol>
      ),
    },
    {
      category: "for-fans",
      question: "How do I submit proof?",
      answer: (
        <div className="space-y-3 text-sm text-slate-300">
          <div>
            <strong className="text-purple-300 block mb-1">For Listening Tasks:</strong>
            <p className="text-xs text-slate-300">
              Play the song on Spotify, Apple Music, Boomplay or your preferred player. Take a screenshot showing the song playing, then upload the screenshot in the task and tap <strong>Submit Proof</strong>.
            </p>
          </div>
          <div>
            <strong className="text-cyan-300 block mb-1">For Social Media Tasks:</strong>
            <p className="text-xs text-slate-300">
              Create a post or story using the song on TikTok, Instagram, or X. Copy your post link, paste it into the task, and tap <strong>Submit Proof</strong>.
            </p>
          </div>
        </div>
      ),
    },
    {
      category: "for-fans",
      question: "Why was my proof rejected?",
      answer: (
        <div className="space-y-2 text-sm text-slate-300">
          <p>A submission can be rejected if:</p>
          <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
            <li>The screenshot does not clearly show the song playing</li>
            <li>The same screenshot or link was submitted previously</li>
            <li>The image appears edited or manipulated</li>
            <li>It does not match the task requirements</li>
          </ul>
          <p className="text-xs text-cyan-300 pt-1">
            If you believe an automated rejection was wrong, email <a href="mailto:support@celestifan.com" className="underline">support@celestifan.com</a> for human review.
          </p>
        </div>
      ),
    },
    {
      category: "for-fans",
      question: "What is Celeste?",
      answer: (
        <div className="space-y-2 text-sm text-slate-300">
          <p>
            Celeste is CelestiFan's recognition currency awarded for approved proof.
          </p>
          <div className="p-3 rounded bg-amber-950/30 border border-amber-500/20 text-xs text-amber-200">
            <strong>Important:</strong> Celeste has no monetary value. It cannot be converted to cash, transferred, sold, or traded. It is not a cryptocurrency.
          </div>
        </div>
      ),
    },
    {
      category: "for-fans",
      question: "What are streaks and multipliers?",
      answer: (
        <div className="space-y-2 text-sm text-slate-300">
          <p>
            Submitting approved proof on consecutive days builds a streak, boosting your earned Celeste:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-center font-mono pt-1">
            <div className="p-2 rounded bg-slate-900 border border-white/10">3 Days: 1.1x</div>
            <div className="p-2 rounded bg-slate-900 border border-white/10">7 Days: 1.25x</div>
            <div className="p-2 rounded bg-slate-900 border border-white/10">14 Days: 1.5x</div>
            <div className="p-2 rounded bg-slate-900 border border-white/10">30 Days: 2.0x</div>
          </div>
        </div>
      ),
    },

    // FOR ARTISTS
    {
      category: "for-artists",
      question: "How do I create a campaign?",
      answer: (
        <div className="space-y-2 text-sm text-slate-300">
          <ol className="list-decimal list-inside space-y-1 text-xs text-slate-300">
            <li>Go to <strong>Campaigns → Create Campaign</strong></li>
            <li>Add a title, description, and song selection</li>
            <li>Add tasks (listening or social media templates)</li>
            <li>Set up to three reward tiers (Base, Mid, Top Fan)</li>
            <li>Publish and share the campaign link with fans</li>
          </ol>
        </div>
      ),
    },
    {
      category: "for-artists",
      question: "How do I review fan submissions?",
      answer: (
        <p className="text-sm text-slate-300">
          Open the <strong>Studio</strong> tab. The Submissions section shows all proof sent by fans with their name, submission, and streak. You can approve or decline each submission.
        </p>
      ),
    },

    // ACCOUNT & PRIVACY
    {
      category: "account-privacy",
      question: "How do I change or reset my password?",
      answer: (
        <p className="text-sm text-slate-300">
          Go to <strong>Settings → Change Password</strong> in the app. On the login screen, you can also select <em>"Get a login code instead"</em> to receive a 6-digit email code.
        </p>
      ),
    },
  ];

  const filteredFaqs = faqData.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory ? item.category === activeCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Help & Support | CelestiFan</title>
        <meta
          name="description"
          content="Official Support Portal for the CelestiFan iOS and Android applications. Contact support@celestifan.com, submit help inquiries, and search user FAQs."
        />
        <link rel="canonical" href="https://celestifan.com/help" />
      </Helmet>

      <div className="min-h-screen bg-[#0A0A0F] text-slate-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              CelestiFan Help & Support
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              Welcome to the official support portal for the <strong>CelestiFan iOS and Android applications</strong>. We are here to assist you with any questions, issues, or feedback.
            </p>

            {/* Navigation Switcher */}
            <div className="mt-6 inline-flex p-1 rounded-full bg-slate-900 border border-white/10 text-xs">
              <Link
                to="/help"
                className="px-5 py-2 rounded-full font-bold bg-purple-600 text-white"
              >
                Help & Support
              </Link>
              <Link
                to="/privacy"
                className="px-5 py-2 rounded-full font-medium text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="px-5 py-2 rounded-full font-medium text-slate-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Direct Support Channels Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="p-6 rounded-2xl bg-[#12121A] border border-white/10 text-center">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Email Support</h3>
              <p className="text-slate-400 text-xs mb-3">Reach out directly to our support team.</p>
              <a
                href="mailto:support@celestifan.com"
                className="text-cyan-400 font-bold text-sm underline font-mono hover:text-cyan-300"
              >
                support@celestifan.com
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-[#12121A] border border-white/10 text-center">
              <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">Response Expectation</h3>
              <p className="text-slate-400 text-xs mb-3">Typical response time window:</p>
              <span className="text-emerald-400 font-bold text-sm font-mono">
                24 – 48 Business Hours
              </span>
            </div>
          </div>

          {/* Contact Support Form */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#12121A] border border-white/10 mb-10">
            <h2 className="text-xl font-bold mb-2">Send Us a Message</h2>
            <p className="text-slate-400 text-xs mb-6">
              Have an issue with your account, app bugs, or campaign submissions? Fill out the form below and we will email you back.
            </p>

            {submitted ? (
              <div className="text-center py-8 px-4 border border-emerald-500/30 rounded-xl bg-emerald-950/20">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-1 text-slate-100">Thank you for reaching out!</h3>
                <p className="text-slate-300 text-xs mb-4">
                  Your inquiry has been submitted. A support representative will email you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-lg bg-purple-600 text-white font-bold text-xs hover:bg-purple-500 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full p-3 rounded-lg bg-[#1E1E2D] border border-white/10 text-sm text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full p-3 rounded-lg bg-[#1E1E2D] border border-white/10 text-sm text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Issue Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-3 rounded-lg bg-[#1E1E2D] border border-white/10 text-sm text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value="Account Access">Account & Login Issues</option>
                    <option value="Bug Report">App Bug or Crash Report</option>
                    <option value="Content Moderation">Content Moderation & Safety</option>
                    <option value="Campaigns & Rewards">Campaigns & Rewards Inquiries</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your issue or question in detail..."
                    className="w-full p-3 rounded-lg bg-[#1E1E2D] border border-white/10 text-sm text-white focus:outline-none focus:border-purple-500 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full p-3.5 rounded-lg bg-purple-600 text-white font-bold text-sm hover:bg-purple-500 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Submit Support Request
                </button>
              </form>
            )}
          </div>

          {/* Search FAQs */}
          <div className="mb-6">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search help topics (e.g. report, delete account, audio, Celeste)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#12121A] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                activeCategory === null
                  ? "bg-purple-600 border-purple-500 text-white"
                  : "bg-[#12121A] border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              All Topics
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  activeCategory === cat.id
                    ? "bg-purple-600 border-purple-500 text-white"
                    : "bg-[#12121A] border-white/10 text-slate-400 hover:text-white"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="p-6 rounded-2xl bg-[#12121A] border border-white/10 mb-10">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {filteredFaqs.length === 0 ? (
                <p className="text-slate-400 text-xs text-center py-4">
                  No questions match "{searchQuery}". Email <a href="mailto:support@celestifan.com" className="text-cyan-400 underline">support@celestifan.com</a> for assistance.
                </p>
              ) : (
                filteredFaqs.map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#181824] border border-white/5">
                    <h4 className="text-sm font-bold text-slate-100 mb-2">{faq.question}</h4>
                    {faq.answer}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Footer Legal & Platform Links */}
          <div className="text-center border-t border-white/10 pt-8">
            <div className="flex justify-center gap-6 mb-4">
              <Link to="/privacy" className="text-slate-400 hover:text-white text-xs flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" /> Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-white text-xs flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" /> Terms of Service
              </Link>
            </div>
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} CelestiFan Ltd (Company No. 17292209). All rights reserved. CelestiFan mobile application for iOS and Android.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
