import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Celeste", path: "/celeste" },
    { name: "Blog", path: "/blog" },
    { name: "Connect", path: "/connect" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleWaitlistClick = () => {
    if (location.pathname !== "/") {
      window.location.href = "/#waitlist-section";
    } else {
      document.getElementById("waitlist-section")?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(2,8,23,0.88)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <img src="/logo.webp" alt="CelestiFan" className="h-8 w-8" />
            <span
              className="font-bold hidden sm:block"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.5rem',
                background: 'linear-gradient(to right, #a855f7, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              CelestiFan
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200"
                style={{ color: isActive(item.path) ? '#fff' : 'rgba(255,255,255,0.45)' }}
                onMouseEnter={e => { if (!isActive(item.path)) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)'; }}
                onMouseLeave={e => { if (!isActive(item.path)) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)'; }}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-3 right-3 h-px"
                    style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block flex-shrink-0">
            <button
              onClick={handleWaitlistClick}
              className="text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200"
              style={{ background: 'rgba(59,130,246,0.1)', color: 'rgba(147,197,253,0.75)', border: '1px solid rgba(59,130,246,0.2)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(59,130,246,0.18)'; (e.currentTarget as HTMLElement).style.color = 'rgba(147,197,253,0.95)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(59,130,246,0.1)'; (e.currentTarget as HTMLElement).style.color = 'rgba(147,197,253,0.75)'; }}
            >
              Join the Waitlist
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-5 pb-5"
            style={{
              background: 'rgba(2,8,23,0.97)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div className="space-y-1 pt-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive(item.path) ? '#fff' : 'rgba(255,255,255,0.4)',
                    background: isActive(item.path) ? 'rgba(168,85,247,0.08)' : 'transparent',
                  }}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }} />
                  )}
                </Link>
              ))}
            </div>
            <div className="pt-4">
              <button
                onClick={handleWaitlistClick}
                className="w-full text-sm font-semibold py-3 rounded-full transition-opacity duration-200"
                style={{ background: 'rgba(59,130,246,0.1)', color: 'rgba(147,197,253,0.75)', border: '1px solid rgba(59,130,246,0.2)' }}
              >
                Join the Waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;