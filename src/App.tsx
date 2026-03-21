import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Connect from "./pages/Connect";
import NotFound from "./pages/NotFound";
import Celeste from "./pages/Celeste";
import Quiz from "./pages/Quiz";
import BlogReactions from "@/pages/BlogReactions";
import BlogPostExchange from "@/pages/BlogPostExchange"; // ← ADD THIS

const queryClient = new QueryClient();
const CONSENT_KEY = "celestifan_consent_choice";
const GA_ID = "G-S2NR6RXKR7";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);
    if (!saved) {
      setVisible(true);
      return;
    }

    if (saved === "accepted" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
      window.gtag("config", GA_ID);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
      window.gtag("config", GA_ID);
    }
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-3xl rounded-2xl border border-white/15 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-md">
      <p className="text-sm text-slate-200">
        We use analytics cookies to improve CelestiFan experience. Accept to help us measure and improve the platform.
      </p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <button
          onClick={handleReject}
          className="rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-200 transition-colors hover:bg-slate-800"
        >
          Reject
        </button>
        <button
          onClick={handleAccept}
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/connect" element={<Connect />} />
              <Route path="/celeste" element={<Celeste />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/blog/reactions" element={<BlogReactions />} />
              <Route path="/blog/exchange-backwards" element={<BlogPostExchange />} /> {/* ← ADD THIS */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <CookieConsentBanner />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;