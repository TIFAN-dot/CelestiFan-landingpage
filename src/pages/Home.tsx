import { ArrowRight, TrendingUp, Trophy, Music, Zap, Users, BarChart3, MessageCircle, PartyPopper, Sparkles } from "lucide-react"; 
import { Button } from "@/components/ui/button"; 
import { Card } from "@/components/ui/card"; 
import { motion } from "framer-motion"; 
import { useState, useEffect } from "react"; 
import CelestiQuiz from "@/components/CelestiQuiz"; 
import ServicesSection from "@/components/ServicesSection";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
} from "@/components/ui/dialog"; 
 
const Home = () => { 
  const [formData, setFormData] = useState({ name: '', email: '', userType: '' }); 
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' }); 
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); 

  // Generate stars on mount
  useEffect(() => {
    const starsContainer = document.getElementById('starsContainer');
    if (starsContainer && starsContainer.children.length === 0) {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star-dot';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
      }
    }
  }, []);
 
  const stats = [ 
    { label: "Active Fans", value: "50K+", icon: Users, color: "text-cyan-400" }, 
    { label: "Artists", value: "1.2K+", icon: Music, color: "text-purple-400" }, 
    { label: "Campaigns", value: "500+", icon: Zap, color: "text-yellow-400" }, 
    { label: "Total Streams", value: "10M+", icon: TrendingUp, color: "text-emerald-400" }, 
  ];
 
  const howItWorks = [ 
    { 
      icon: BarChart3, 
      title: "Track Fan Power", 
      description: "Real-time insights on your most loyal listeners and supporters", 
    }, 
    { 
      icon: Trophy, 
      title: "Climb Leaderboards", 
      description: "Earn celeste for streams, shares, and engagement activities", 
    }, 
    { 
      icon: Music, 
      title: "Unlock Epic Moments", 
      description: "Access exclusive content and direct artist interactions", 
    }, 
  ]; 
 
  const features = [ 
    { 
      icon: Zap, 
      title: "Launch Campaigns", 
      description: "As an artist, you're in control. Design and launch dynamic campaigns that mobilize your fanbase. Create exciting challenges, set streaming goals, and offer unique rewards to build unstoppable momentum for your new releases. Watch in real-time as your fans rally to support your music, driving streams and expanding your reach organically. It's your vision, your music, your movement.", 
      imageUrl: "/mockups/campaign.png", 
    }, 
    { 
      icon: Trophy, 
      title: "Prove Your Fandom", 
      description: "Your support is more than just a number. With CelestiFan, you can prove your dedication by uploading screenshots of your streams, shares, and purchases. This tangible proof of your fandom earns you celeste, unlocks exclusive content, and gets you noticed by your favorite artists. It's a direct way to show your impact and be rewarded for your loyalty in a way that truly matters.", 
      imageUrl: "/mockups/proof.png", 
    }, 
    { 
      icon: BarChart3, 
      title: "Shine Bright", 
      description: "Rise through the ranks and make your mark. Our dynamic leaderboards track real-time fan engagement, showcasing the most dedicated supporters for each artist. Compete with other fans, climb to the top, and gain recognition for your unwavering passion. This is your chance to shine bright, get noticed by artists, and become a legendary supporter in your favorite music community.", 
      imageUrl: "/mockups/fan.png", 
    }, 
    { 
      icon: MessageCircle, 
      title: "Connect Directly", 
      description: "Break down the barriers between artist and fan. CelestiFan offers exclusive chat rooms and communities where you can connect directly with the artists you admire. Get a behind-the-scenes look at their creative process, ask questions in intimate Q&A sessions, and join a community of like-minded fans. This is more than just a platform; it's a place to build genuine connections.", 
      imageUrl: "/mockups/contact.png", 
    }, 
  ]; 
 
  const handleWaitlistClick = (type: 'artist' | 'fan') => { 
    setFormData(prev => ({ ...prev, userType: type })); 
    const section = document.getElementById('waitlist-section'); 
    if (section) { 
      section.scrollIntoView({ behavior: 'smooth' }); 
    } 
  }; 
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    const { name, value } = e.target; 
    setFormData(prev => ({ ...prev, [name]: value })); 
  }; 
 
  const handleSubmit = async (e: React.FormEvent) => { 
    e.preventDefault(); 
 
    if (!formData.name.trim() || !formData.email.trim()) { 
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields' }); 
      return; 
    } 
 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailRegex.test(formData.email)) { 
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address' }); 
      return; 
    } 
 
    setIsSubmitting(true); 
    setSubmitStatus({ type: '', message: '' }); 
 
    try { 
      const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzHtjBUTZrE0ML9SV0XvyOzAYFIOF3YXyXX3v0fJizvK0IgikyqF2dGrRUbw1nFNSyB/exec"; 
 
      await fetch(SCRIPT_URL, { 
        method: 'POST', 
        mode: 'no-cors', 
        headers: { 
          'Content-Type': 'application/json', 
        }, 
        body: JSON.stringify({ 
          name: formData.name, 
          email: formData.email, 
          userType: formData.userType || 'general' 
        }) 
      }); 
 
      setIsSuccessModalOpen(true); 
      setFormData({ name: '', email: '', userType: '' }); 
    } catch (error) { 
      setSubmitStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again.' 
      }); 
    } finally { 
      setIsSubmitting(false); 
    } 
  }; 
 
  const getNamePlaceholder = () => { 
    if (formData.userType === 'artist') return 'Enter your artist name'; 
    if (formData.userType === 'fan') return 'Enter your name'; 
    return 'Enter your name'; 
  }; 
 
  const getButtonText = () => { 
    if (formData.userType === 'artist') return isSubmitting ? 'Joining...' : 'Join as Artist'; 
    if (formData.userType === 'fan') return isSubmitting ? 'Joining...' : 'Join as Fan'; 
    return isSubmitting ? 'Joining...' : 'Join the Waitlist'; 
  }; 
 
  const getWaitlistTitle = () => { 
    if (formData.userType === 'artist') return 'Join as an Artist'; 
    if (formData.userType === 'fan') return 'Join as a Fan'; 
    return 'Join the Waitlist'; 
  }; 
 
  const getWaitlistDescription = () => { 
    if (formData.userType === 'artist') { 
      return 'Get early access to CelestiFan and start building meaningful connections with your fans. Launch campaigns, track engagement, and amplify your music career.'; 
    } 
    if (formData.userType === 'fan') { 
      return 'Be among the first fans to join CelestiFan. Prove your dedication, earn rewards, and connect directly with your favorite artists.'; 
    } 
    return 'Be the first to know when CelestiFan launches. Join thousands of artists and fans building the future of music together.'; 
  }; 
 
  return ( 
    <>
      <style>{`
        .star-dot {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle-star 3s ease-in-out infinite;
        }

        @keyframes twinkle-star {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .cloud-scene {
          position: relative;
          width: 100%;
          max-width: 1200px;
          height: 500px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .cloud-scene {
            height: 600px;
          }
        }

        .music-note {
          position: absolute;
          top: 20px;
          right: 10%;
          font-size: 48px;
          animation: float 3s ease-in-out infinite, pulse 1.5s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .music-note {
            font-size: 32px;
            right: 5%;
            top: 10px;
          }
        }

        .note-symbol {
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
        }

        .star-emoji {
          position: absolute;
          top: 40%;
          left: 8%;
          font-size: 36px;
          animation: twinkle 2s ease-in-out infinite, rotate 4s linear infinite;
        }

        @media (max-width: 768px) {
          .star-emoji {
            font-size: 24px;
            left: 5%;
            top: 35%;
          }
        }

        .cloud-container {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          animation: bounce 3s ease-in-out infinite;
        }

        .cloud-left {
          left: 15%;
          animation-delay: 0s;
        }

        .cloud-right {
          right: 15%;
          animation-delay: 0.5s;
        }

        @media (max-width: 768px) {
          .cloud-container {
            left: 50% !important;
            right: auto !important;
            transform: translate(-50%, -50%);
          }

          .cloud-left {
            top: 35%;
          }

          .cloud-right {
            top: 65%;
          }
        }

        .cloud {
          position: relative;
          width: 200px;
          height: 120px;
          background: white;
          border-radius: 100px;
          filter: drop-shadow(0 10px 30px rgba(0,0,0,0.15));
          transition: transform 0.3s ease;
        }

        @media (max-width: 768px) {
          .cloud {
            width: 160px;
            height: 96px;
            border-radius: 80px;
          }
        }

        .cloud:hover {
          transform: scale(1.05);
        }

        .cloud::before,
        .cloud::after {
          content: '';
          position: absolute;
          background: white;
          border-radius: 50%;
        }

        .cloud::before {
          width: 100px;
          height: 100px;
          top: -50px;
          left: 20px;
        }

        .cloud::after {
          width: 120px;
          height: 120px;
          top: -60px;
          right: 20px;
        }

        @media (max-width: 768px) {
          .cloud::before {
            width: 80px;
            height: 80px;
            top: -40px;
            left: 16px;
          }

          .cloud::after {
            width: 96px;
            height: 96px;
            top: -48px;
            right: 16px;
          }
        }

        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 10;
        }

        .eyes {
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 30px;
        }

        @media (max-width: 768px) {
          .eyes {
            gap: 24px;
          }
        }

        .eye {
          width: 16px;
          height: 16px;
          background: #333;
          border-radius: 50%;
          position: relative;
          animation: blink 4s infinite;
        }

        @media (max-width: 768px) {
          .eye {
            width: 13px;
            height: 13px;
          }
        }

        .eye::after {
          content: '';
          position: absolute;
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
          top: 3px;
          left: 3px;
        }

        @media (max-width: 768px) {
          .eye::after {
            width: 5px;
            height: 5px;
            top: 2px;
            left: 2px;
          }
        }

        .mouth-happy {
          position: absolute;
          bottom: 35%;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 25px;
          border: 3px solid #333;
          border-top: none;
          border-radius: 0 0 50px 50px;
        }

        @media (max-width: 768px) {
          .mouth-happy {
            width: 40px;
            height: 20px;
            border-width: 2px;
          }
        }

        .mouth-sad {
          position: absolute;
          bottom: 30%;
          left: 50%;
          transform: translateX(-50%) rotate(180deg);
          width: 50px;
          height: 25px;
          border: 3px solid #333;
          border-top: none;
          border-radius: 0 0 50px 50px;
        }

        @media (max-width: 768px) {
          .mouth-sad {
            width: 40px;
            height: 20px;
            border-width: 2px;
          }
        }

        .headphones {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 140px;
          height: 100px;
          z-index: 5;
        }

        @media (max-width: 768px) {
          .headphones {
            width: 112px;
            height: 80px;
            top: -8px;
          }
        }

        .headband {
          width: 100%;
          height: 30px;
          border: 4px solid #ff6b6b;
          border-bottom: none;
          border-radius: 70px 70px 0 0;
        }

        @media (max-width: 768px) {
          .headband {
            height: 24px;
            border-width: 3px;
          }
        }

        .earpiece {
          position: absolute;
          width: 30px;
          height: 35px;
          background: #ff6b6b;
          border-radius: 8px;
          box-shadow: inset 0 2px 8px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          .earpiece {
            width: 24px;
            height: 28px;
          }
        }

        .earpiece-left {
          left: 0;
          top: 25px;
        }

        .earpiece-right {
          right: 0;
          top: 25px;
        }

        @media (max-width: 768px) {
          .earpiece-left {
            top: 20px;
          }

          .earpiece-right {
            top: 20px;
          }
        }

        .glasses {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 40px;
          z-index: 15;
        }

        @media (max-width: 768px) {
          .glasses {
            width: 80px;
            height: 32px;
          }
        }

        .lens {
          position: absolute;
          width: 35px;
          height: 35px;
          background: rgba(100, 100, 100, 0.3);
          border: 3px solid #333;
          border-radius: 50%;
        }

        @media (max-width: 768px) {
          .lens {
            width: 28px;
            height: 28px;
            border-width: 2px;
          }
        }

        .lens-left {
          left: 0;
        }

        .lens-right {
          right: 0;
        }

        .bridge {
          position: absolute;
          width: 20px;
          height: 3px;
          background: #333;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        @media (max-width: 768px) {
          .bridge {
            width: 16px;
            height: 2px;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-50%) translateY(0);
          }
          50% {
            transform: translateY(-50%) translateY(-20px);
          }
        }

        @media (max-width: 768px) {
          @keyframes bounce {
            0%, 100% {
              transform: translate(-50%, -50%) translateY(0);
            }
            50% {
              transform: translate(-50%, -50%) translateY(-15px);
            }
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.8);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes blink {
          0%, 48%, 52%, 100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(0.1);
          }
        }

        .bg-element {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          animation: float-bg 6s ease-in-out infinite;
        }

        .bg-circle-1 {
          width: 100px;
          height: 100px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .bg-circle-2 {
          width: 60px;
          height: 60px;
          top: 20%;
          right: 10%;
          animation-delay: 1s;
        }

        .bg-circle-3 {
          width: 80px;
          height: 80px;
          top: 15%;
          left: 40%;
          animation-delay: 2s;
        }

        @media (max-width: 768px) {
          .bg-circle-1 {
            width: 60px;
            height: 60px;
          }

          .bg-circle-2 {
            width: 40px;
            height: 40px;
          }

          .bg-circle-3 {
            width: 50px;
            height: 50px;
          }
        }

        @keyframes float-bg {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.1);
          }
        }

        .text-section {
          position: absolute;
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          z-index: 100;
          max-width: 650px;
          padding: 0 30px;
          width: 100%;
        }

        @media (max-width: 768px) {
          .text-section {
            bottom: 5%;
            padding: 0 20px;
            max-width: 100%;
          }
        }

        .main-text {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
          font-size: 24px;
          font-weight: 400;
          color: #e5e5e5;
          line-height: 1.4;
          margin-bottom: 14px;
          letter-spacing: 0.3px;
        }

        @media (max-width: 768px) {
          .main-text {
            font-size: 18px;
            line-height: 1.5;
            margin-bottom: 10px;
          }
        }

        @media (max-width: 480px) {
          .main-text {
            font-size: 16px;
          }
        }

        .highlight {
          color: #ffffff;
          font-weight: 500;
        }

        .sub-text {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: #d1d5db;
          line-height: 1.5;
          letter-spacing: 0.2px;
        }

        @media (max-width: 768px) {
          .sub-text {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .sub-text {
            font-size: 13px;
          }
        }

        .brand {
          color: #ffffff;
          font-weight: 500;
          background: #3b82f6;
          padding: 2px 8px;
          border-radius: 3px;
        }

        @media (max-width: 768px) {
          .brand {
            padding: 2px 6px;
            font-size: 14px;
          }
        }
      `}</style>

      <motion.div 
        className="min-h-screen bg-slate-950 text-slate-50"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }} 
      > 
        <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}> 
          <DialogContent className="sm:max-w-md bg-background border-primary shadow-2xl shadow-primary/20"> 
            <DialogHeader className="text-center items-center pt-8"> 
              <PartyPopper className="h-16 w-16 text-primary animate-bounce" /> 
              <DialogTitle className="text-3xl font-display mt-4 text-gradient">Welcome to the Movement!</DialogTitle> 
              <DialogDescription asChild> 
                <div className="text-lg text-muted-foreground mt-4 space-y-4"> 
                  <p>Welcome to CelestiFan, where every moment of support matters.</p> 
                  <p>You've officially joined the movement that connects artists and fans through real actions, creativity, and rewards.</p> 
                  <div className="!mt-6"> 
                    <p className="font-bold text-gradient">Your journey starts now</p> 
                    <p>Earn Celeste. Empower artists. Elevate fandom.</p> 
                  </div> 
                </div> 
              </DialogDescription> 
            </DialogHeader> 
            <div className="flex justify-center py-4"> 
              <Button onClick={() => setIsSuccessModalOpen(false)} className="bg-primary text-primary-foreground hover:bg-primary/90"> 
                Awesome! 
              </Button> 
            </div> 
          </DialogContent> 
        </Dialog> 
  
        {/* HERO SECTION */}
        <motion.section 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          className="min-h-screen flex items-center justify-start pt-24 pb-28 md:pt-16 md:pb-32 md:justify-center text-center overflow-hidden relative" 
        > 
          <div className="absolute inset-0 opacity-20"> 
            <div className="absolute top-16 right-[12%] w-[45%] h-[55%] bg-primary rounded-full blur-[120px] animate-float" /> 
            <div className="absolute top-[30%] right-[4%] w-[32%] h-[42%] bg-secondary rounded-full blur-[100px] animate-float" style={{ animationDelay: "1s" }} /> 
          </div> 
  
          <div className="container mx-auto px-4 relative z-10"> 
            <motion.div 
               initial={{ y: 20, opacity: 0 }} 
               animate={{ y: 0, opacity: 1 }} 
               transition={{ duration: 0.5, delay: 0.2 }}
               className="flex flex-col items-center mb-8"
             >
               <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[1.1] text-center">
                 <span className="text-gradient font-display block">Amplify Artists.</span>
                 <span className="text-gradient font-display block">Ignite Fandom.</span>
               </h1>
             </motion.div>
  
            <motion.p 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.4 }} 
              className="text-lg sm:text-xl md:text-2xl text-slate-300/80 mb-10 max-w-3xl mx-auto font-light leading-relaxed tracking-wide font-sans"
            > 
              The ultimate platform where fans fuel music breakthroughs. 
              <br className="hidden md:block" />
              Support artists. Earn Celeste. Change the game. 
            </motion.p> 
  
            <motion.div 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.6 }} 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-14" 
            > 
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-10 py-7 h-14 rounded-full transition-transform duration-300 hover:scale-105 shadow-[0_0_15px_rgba(var(--primary),0.5)]" 
                onClick={() => handleWaitlistClick('artist')} 
              > 
                Start as an Artist 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" /> 
              </Button> 
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 text-lg px-10 py-7 h-14 rounded-full transition-transform duration-300 hover:scale-105" 
                onClick={() => handleWaitlistClick('fan')} 
              > 
                Join as a Fan 
              </Button> 
            </motion.div>
  
            <motion.div 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.8 }} 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto border-t border-white/10 pt-12" 
            > 
              {stats.map((stat) => ( 
                <div key={stat.label} className="flex flex-col items-center group"> 
                  <div className="mb-4 p-3 rounded-2xl bg-white/5 ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                    <stat.icon className={`w-8 h-8 ${stat.color} drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]`} />
                  </div>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 tracking-tight group-hover:text-slate-200 transition-colors">{stat.value}</div> 
                  <div className="text-xs md:text-sm text-slate-400 uppercase tracking-[0.2em] font-medium">{stat.label}</div> 
                </div> 
              ))} 
            </motion.div>
          </div> 
        </motion.section>

        {/* CLOUD ANIMATION SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="min-h-screen flex items-center justify-center overflow-hidden relative"
          style={{
            background: 'linear-gradient(180deg, #000000 0%, #0a1628 30%, #1e3a5f 60%, #4a7ba7 85%, #87ceeb 100%)'
          }}
        >
          <div className="absolute top-0 left-0 w-full h-[60%] overflow-hidden" id="starsContainer"></div>

          <div className="text-section">
            <p className="main-text">Music exists because <span className="highlight">fans show up</span>.</p>
            <p className="sub-text"><span className="brand">CelestiFan</span> is where that support finally matters.</p>
          </div>

          <div className="cloud-scene">
            <div className="bg-element bg-circle-1"></div>
            <div className="bg-element bg-circle-2"></div>
            <div className="bg-element bg-circle-3"></div>

            <div className="music-note">
              <div className="note-symbol">🎵</div>
            </div>

            <div className="star-emoji">⭐</div>

            <div className="cloud-container cloud-left">
              <div className="cloud">
                <div className="headphones">
                  <div className="headband"></div>
                  <div className="earpiece earpiece-left"></div>
                  <div className="earpiece earpiece-right"></div>
                </div>
                
                <div className="face">
                  <div className="eyes">
                    <div className="eye"></div>
                    <div className="eye"></div>
                  </div>
                  <div className="mouth-happy"></div>
                </div>
              </div>
            </div>

            <div className="cloud-container cloud-right">
              <div className="cloud">
                <div className="glasses">
                  <div className="lens lens-left"></div>
                  <div className="bridge"></div>
                  <div className="lens lens-right"></div>
                </div>
                
                <div className="face">
                  <div className="eyes">
                    <div className="eye"></div>
                    <div className="eye"></div>
                  </div>
                  <div className="mouth-sad"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SERVICES SECTION */}
        <ServicesSection />
  
        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }} 
          className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10" 
        > 
          <div className="container mx-auto px-4 text-center"> 
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-primary animate-pulse" /> 
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-2 text-gradient"> 
              Discover Your Celesti Energy 
            </h2> 
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6"> 
              Find the music identity that makes you unforgettable. 
            </p> 
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"> 
              Your music taste isn't random. it reveals who you are. 
              Take our 60-second cosmic quiz and uncover the energy that defines your vibe. 
            </p> 
            <CelestiQuiz /> 
          </div> 
        </motion.section> 
  
        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }} 
          className="py-16 md:py-20 container mx-auto px-4" 
        > 
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-center mb-4 text-gradient"> 
            How CelestiFan Works 
          </h2> 
          <p className="text-center text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto"> 
            Three simple steps. A whole New Fan Experience 
          </p> 
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"> 
            {howItWorks.map((item, index) => ( 
              <motion.div 
                key={item.title} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.1 }} 
                viewport={{ once: true }} 
              > 
                <Card className="p-6 md:p-8 bg-card border-border hover:border-primary/50 transition-all hover:scale-105 h-full"> 
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary flex items-center justify-center mb-4 md:mb-6"> 
                    <item.icon className="h-7 w-7 md:h-8 md:w-8 text-primary-foreground" /> 
                  </div> 
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{item.title}</h3> 
                  <p className="text-sm md:text-base text-muted-foreground">{item.description}</p> 
                </Card> 
              </motion.div> 
            ))} 
          </div> 
        </motion.section> 
  
        <motion.section 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }} 
          className="py-16 md:py-20 bg-card" 
        > 
          <div className="container mx-auto px-4"> 
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-4 md:mb-6 text-gradient mx-auto text-center"> 
              Why CelestiFan? 
            </h2> 
            <p className="text-center text-muted-foreground mb-10 md:mb-12 max-w-3xl mx-auto"> 
              CelestiFan is A new fan-powered music economy where your support creates real impact and earns you real rewards. 
              <br /> 
              We're dedicated to empowering artists and giving fans a voice. Here's how we're changing the game. 
            </p> 
            <div className="space-y-12 md:space-y-20"> 
              {features.map((feature, index) => ( 
                <motion.div 
                  key={feature.title} 
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center" 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }} 
                  viewport={{ once: true }} 
                > 
                  <div className={`flex justify-center ${index % 2 === 0 ? 'lg:order-last' : 'lg:order-first'}`}> 
                    <div className="max-w-[350px]"> 
                      <img 
                        src={feature.imageUrl} 
                        alt={feature.title} 
                        className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300" 
                        loading="lazy" 
                      /> 
                    </div> 
                  </div> 
                  <div className={`${index % 2 === 0 ? 'lg:order-first' : 'lg:order-last'}`}> 
                    <div className="flex items-center gap-3 md:gap-4 mb-4"> 
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0"> 
                        <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" /> 
                      </div> 
                      <h3 className="text-2xl md:text-3xl font-bold">{feature.title}</h3> 
                    </div> 
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">{feature.description}</p> 
                  </div> 
                </motion.div> 
              ))} 
            </div> 
          </div> 
        </motion.section> 
  
        <motion.section 
          id="waitlist-section" 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }} 
          className="py-16 md:py-20" 
        > 
          <div className="container mx-auto px-4 relative z-10 text-center"> 
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6"> 
              {getWaitlistTitle()} 
            </h2> 
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"> 
              {getWaitlistDescription()} 
            </p> 
            <motion.form 
              initial={{ opacity: 0, y: 20 }} 
              onSubmit={handleSubmit} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }} 
              viewport={{ once: true }} 
              className="flex flex-col gap-4 max-w-md mx-auto" 
            > 
              <input 
                type="text" 
                value={formData.name} 
                onChange={handleInputChange} 
                name="name" 
                disabled={isSubmitting} 
                placeholder={getNamePlaceholder()} 
                className="px-6 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-all" 
                required 
              /> 
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                placeholder="Enter your email" 
                disabled={isSubmitting} 
                className="px-6 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-all" 
                required 
              /> 
              <Button 
                disabled={isSubmitting} 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold" 
                type="submit" 
              > 
                {getButtonText()} 
              </Button> 
              {submitStatus.type === 'error' && submitStatus.message && ( 
                <div className="p-4 mt-4 rounded-lg bg-red-100 text-red-800 border border-red-200"> 
                  {submitStatus.message} 
                </div> 
              )} 
            </motion.form> 
          </div> 
        </motion.section> 
      </motion.div>
    </>
  ); 
}; 
 
export default Home;