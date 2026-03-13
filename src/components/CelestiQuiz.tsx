import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { 
  Sparkles, Music, Users, Waves, Flame, Star, Wind, Zap,
  PartyPopper, Download, Share2, Twitter, Instagram, Gift, TrendingUp, Volume2, VolumeX
} from "lucide-react";

// ========================================
// CELESTI ENERGY TYPES (8 Total)
// ========================================

const energyTypes = {
  soulVoyager: {
    name: "Soul Voyager",
    icon: Waves,
    color: "from-blue-600 to-purple-600",
    description: "You don't just listen to music — you travel through it. Every note carries your memories, every lyric your unspoken story.",
    traits: ["Deep", "Emotional", "Healing", "Reflective"],
    message: "Your Celesti Energy flows like a gentle storm",
    hashtags: "#SoulVoyager #CelestiFan #MusicJourney"
  },
  vibeAlchemist: {
    name: "Vibe Alchemist",
    icon: Zap,
    color: "from-orange-500 to-yellow-500",
    description: "You transform every beat into emotion. Your Celesti Energy is pure rhythm — a mix of joy, motion, and instinct. Music isn't therapy for you — it's magic.",
    traits: ["Joyful", "Rhythmic", "Magnetic", "Spontaneous"],
    message: "You turn sound into pure energy",
    hashtags: "#VibeAlchemist #CelestiFan #PureEnergy"
  },
  dreamArchitect: {
    name: "Dream Architect",
    icon: Star,
    color: "from-cyan-500 to-blue-600",
    description: "You live in soundscapes. Your Celesti Energy is delicate and structured — music helps you build the world you dream of living in.",
    traits: ["Organized", "Creative", "Visionary", "Structured"],
    message: "You build worlds from melodies",
    hashtags: "#DreamArchitect #CelestiFan #Visionary"
  },
  fireSpirit: {
    name: "Fire Spirit",
    icon: Flame,
    color: "from-red-500 to-pink-600",
    description: "You burn bright — your Celesti Energy is raw and impulsive. Music keeps your flame alive when life feels heavy. You chase sound to find peace.",
    traits: ["Passionate", "Intense", "Authentic", "Bold"],
    message: "Your flame never goes out",
    hashtags: "#FireSpirit #CelestiFan #BurnBright"
  },
  emotionalHealer: {
    name: "Emotional Healer",
    icon: Sparkles,
    color: "from-purple-600 to-pink-500",
    description: "You carry too much but heal through sound. Your Celesti Energy is reflective — you understand pain, yet turn it into peace every time a melody plays.",
    traits: ["Empathetic", "Nurturing", "Deep", "Understanding"],
    message: "You heal hearts through harmony",
    hashtags: "#EmotionalHealer #CelestiFan #Healing"
  },
  flowSeeker: {
    name: "Flow Seeker",
    icon: Wind,
    color: "from-teal-500 to-green-500",
    description: "You're made of groove. Your Celesti Energy is calm confidence. Music doesn't fix you — it reminds you that you're already whole.",
    traits: ["Balanced", "Confident", "Smooth", "Grounded"],
    message: "You move with effortless grace",
    hashtags: "#FlowSeeker #CelestiFan #InTheFlow"
  },
  storyCollector: {
    name: "Story Collector",
    icon: Music,
    color: "from-indigo-600 to-purple-700",
    description: "You don't chase hits — you chase stories. Your Celesti Energy is nostalgic, cinematic, and deeply human. You find yourself in verses, again and again.",
    traits: ["Nostalgic", "Thoughtful", "Soulful", "Connected"],
    message: "You live a thousand lives through lyrics",
    hashtags: "#StoryCollector #CelestiFan #Storyteller"
  },
  cosmicConnector: {
    name: "Cosmic Connector",
    icon: Sparkles,
    color: "from-violet-600 to-fuchsia-600",
    description: "You're a bridge between feeling and sound. Your Celesti Energy is universal — it moves between joy, pain, and hope, turning music into your language with the world.",
    traits: ["Universal", "Empathetic", "Wise", "Connected"],
    message: "You speak the language of the universe",
    hashtags: "#CosmicConnector #CelestiFan #Universal"
  }
};

// ========================================
// FAN QUESTIONS (8 total - pick 4 random)
// ========================================

const allFanQuestions = [
  {
    id: 1,
    question: "What's the instrument that activates your feelings in a song?",
    options: [
      { text: "Piano", points: { soulVoyager: 3, dreamArchitect: 1 } },
      { text: "Guitar", points: { vibeAlchemist: 3, flowSeeker: 1 } },
      { text: "Saxophone", points: { fireSpirit: 3, storyCollector: 1 } },
      { text: "Flute", points: { dreamArchitect: 3, emotionalHealer: 1 } }
    ]
  },
  {
    id: 2,
    question: "When do you feel music deep in your soul?",
    options: [
      { text: "When I'm with someone I love", points: { vibeAlchemist: 2, cosmicConnector: 2 } },
      { text: "When I'm in my zone, totally relaxed", points: { fireSpirit: 3, flowSeeker: 1 } },
      { text: "When I'm cleaning I vibe most", points: { dreamArchitect: 2, vibeAlchemist: 2 } },
      { text: "Nostalgia or life hustle", points: { soulVoyager: 3, storyCollector: 1 } }
    ]
  },
  {
    id: 3,
    question: "What debate can you really take on a podcast?",
    options: [
      { text: "Davido vs Wizkid", points: { vibeAlchemist: 2, fireSpirit: 2 } },
      { text: "Chris Brown vs Michael Jackson", points: { storyCollector: 3, cosmicConnector: 1 } },
      { text: "Kendrick vs Drake", points: { soulVoyager: 3, emotionalHealer: 1 } },
      { text: "Rihanna vs Beyoncé", points: { cosmicConnector: 2, dreamArchitect: 2 } }
    ]
  },
  {
    id: 4,
    question: "Why are your favorite artists your FAVORITE?",
    options: [
      { text: "Because they offer something others don't", points: { dreamArchitect: 3, fireSpirit: 1 } },
      { text: "They represent who I am and where I wanna be", points: { cosmicConnector: 3, soulVoyager: 1 } },
      { text: "Their music heals me", points: { emotionalHealer: 3, soulVoyager: 1 } },
      { text: "The vibe is unmatched", points: { vibeAlchemist: 3, flowSeeker: 1 } }
    ]
  },
  {
    id: 5,
    question: "Why do you hit play on music?",
    options: [
      { text: "For the entertainment factor", points: { vibeAlchemist: 3, flowSeeker: 1 } },
      { text: "For me music it's like a friend", points: { dreamArchitect: 2, cosmicConnector: 2 } },
      { text: "Because it's my best therapy session", points: { soulVoyager: 3, emotionalHealer: 1 } },
      { text: "It's my only medicine", points: { fireSpirit: 3, emotionalHealer: 1 } }
    ]
  },
  {
    id: 6,
    question: "What happens if you don't listen to music for a week?",
    options: [
      { text: "I will adapt", points: { flowSeeker: 3, dreamArchitect: 1 } },
      { text: "Start overthinking", points: { soulVoyager: 3, emotionalHealer: 1 } },
      { text: "My world would start falling apart", points: { fireSpirit: 3, soulVoyager: 1 } },
      { text: "It's fine I'm strong", points: { flowSeeker: 2, vibeAlchemist: 2 } }
    ]
  },
  {
    id: 7,
    question: "What your playlist feels like?",
    options: [
      { text: "A sort of emotional salad", points: { soulVoyager: 3, cosmicConnector: 1 } },
      { text: "Very organized based on my mood", points: { dreamArchitect: 3, flowSeeker: 1 } },
      { text: "Each mood each playlist", points: { vibeAlchemist: 2, dreamArchitect: 2 } },
      { text: "I'm an album person", points: { storyCollector: 3, soulVoyager: 1 } }
    ]
  },
  {
    id: 8,
    question: "Music is your...",
    options: [
      { text: "Escape from reality", points: { dreamArchitect: 3, fireSpirit: 1 } },
      { text: "Mirror of my soul", points: { soulVoyager: 3, emotionalHealer: 1 } },
      { text: "Energy source", points: { vibeAlchemist: 3, flowSeeker: 1 } },
      { text: "Life companion", points: { cosmicConnector: 3, storyCollector: 1 } }
    ]
  }
];

// ========================================
// ARTIST QUESTIONS (6 total - pick 4 random)
// ========================================

const allArtistQuestions = [
  {
    id: 1,
    question: "What defines your music?",
    options: [
      { text: "I'm vibe", points: { vibeAlchemist: 3, flowSeeker: 1 } },
      { text: "Only feelings matter for me", points: { soulVoyager: 3, emotionalHealer: 1 } },
      { text: "Life perspective", points: { fireSpirit: 3, storyCollector: 1 } },
      { text: "The instrumental", points: { dreamArchitect: 3, vibeAlchemist: 1 } }
    ]
  },
  {
    id: 2,
    question: "People think lyrics don't matter, what do you think?",
    options: [
      { text: "Nah, lyrics don't matter to me", points: { vibeAlchemist: 3, flowSeeker: 1 } },
      { text: "Facts, as long as the vibe is there", points: { fireSpirit: 2, vibeAlchemist: 2 } },
      { text: "I'm 50/50", points: { dreamArchitect: 2, cosmicConnector: 2 } },
      { text: "I agree they matter", points: { soulVoyager: 3, storyCollector: 1 } }
    ]
  },
  {
    id: 3,
    question: "What is your storytelling skill?",
    options: [
      { text: "I bring my fear into the story", points: { fireSpirit: 3, emotionalHealer: 1 } },
      { text: "I talk about what others don't", points: { soulVoyager: 3, storyCollector: 1 } },
      { text: "I tell people what they want to hear", points: { vibeAlchemist: 2, cosmicConnector: 2 } },
      { text: "I create imaginary scenarios", points: { dreamArchitect: 3, storyCollector: 1 } }
    ]
  },
  {
    id: 4,
    question: "Your inspiration is from?",
    options: [
      { text: "Life hustle", points: { fireSpirit: 3, soulVoyager: 1 } },
      { text: "Happy/Love feeling", points: { vibeAlchemist: 3, cosmicConnector: 1 } },
      { text: "Enjoyment", points: { flowSeeker: 3, vibeAlchemist: 1 } },
      { text: "Films/mangas", points: { dreamArchitect: 3, storyCollector: 1 } }
    ]
  },
  {
    id: 5,
    question: "Choose the scenario:",
    options: [
      { text: "I woke up and see I'm trending", points: { fireSpirit: 3, vibeAlchemist: 1 } },
      { text: "Becoming trend myself overtime", points: { vibeAlchemist: 2, dreamArchitect: 2 } },
      { text: "Want my first or second EP blow up to get signed", points: { dreamArchitect: 3, fireSpirit: 1 } },
      { text: "I just need good team and good people around me", points: { cosmicConnector: 3, flowSeeker: 1 } }
    ]
  },
  {
    id: 6,
    question: "What thing you need to work on ASAP?",
    options: [
      { text: "Myself and my brand", points: { dreamArchitect: 3, fireSpirit: 1 } },
      { text: "My vocal range and pitch", points: { flowSeeker: 3, vibeAlchemist: 1 } },
      { text: "Just consistency", points: { fireSpirit: 2, dreamArchitect: 2 } },
      { text: "Lyrics and melody", points: { soulVoyager: 3, storyCollector: 1 } }
    ]
  }
];

// ========================================
// HELPER FUNCTIONS
// ========================================

const getRandomQuestions = (questionPool: any[], count: number = 4) => {
  const shuffled = [...questionPool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const useWaitlistCount = () => {
  const [count, setCount] = useState(3124);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3));
    }, 30000);
    return () => clearInterval(interval);
  }, []);
  return count;
};

// ========================================
// OPTION LETTERS
// ========================================
const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

// ========================================
// MAIN COMPONENT
// ========================================

const CelestiQuiz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scene, setScene] = useState(1);
  const [userType, setUserType] = useState<'creator' | 'fan' | null>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    soulVoyager: 0, vibeAlchemist: 0, dreamArchitect: 0, fireSpirit: 0,
    emotionalHealer: 0, flowSeeker: 0, storyCollector: 0, cosmicConnector: 0
  });
  const [result, setResult] = useState<keyof typeof energyTypes | null>(null);
  const [userName, setUserName] = useState("");
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [showWaitlistPrompt, setShowWaitlistPrompt] = useState(false);
  const [hasShared, setHasShared] = useState(false);
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);
  const [waitlistStep, setWaitlistStep] = useState<'type' | 'details' | 'success'>('type');
  const [waitlistType, setWaitlistType] = useState<'artist' | 'fan' | null>(null);
  const [waitlistName, setWaitlistName] = useState('');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [isSubmittingWaitlist, setIsSubmittingWaitlist] = useState(false);
  const [hasTrackedCompletion, setHasTrackedCompletion] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState('');
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const waitlistCount = useWaitlistCount();

  const trackQuizCompletion = async (resultType: string, name: string, type: 'creator' | 'fan') => {
    if (hasTrackedCompletion) return;
    try {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzHtjBUTZrE0ML9SV0XvyOzAYFIOF3YXyXX3v0fJizvK0IgikyqF2dGrRUbw1nFNSyB/exec';
      await fetch(SCRIPT_URL, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'quiz_completion', userType: type, result: energyTypes[resultType as keyof typeof energyTypes]?.name || resultType, name: name || 'anonymous' })
      });
      setHasTrackedCompletion(true);
    } catch (error) { console.error('Failed to track quiz completion:', error); }
  };

  useEffect(() => {
    if (userType) {
      const questionPool = userType === 'creator' ? allArtistQuestions : allFanQuestions;
      setQuestions(getRandomQuestions(questionPool, 4));
    }
  }, [userType]);

  useEffect(() => {
    if (result && scene === 4 && userName.trim() && userType && !hasTrackedCompletion) {
      const timer = setTimeout(() => trackQuizCompletion(result, userName, userType), 2000);
      return () => clearTimeout(timer);
    }
  }, [result, scene, userName, userType, hasTrackedCompletion]);

  useEffect(() => {
    if (isOpen && !audioRef.current) {
      audioRef.current = new Audio('/quiz-music.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
    if (isOpen && audioRef.current) {
      audioRef.current.play().catch(e => console.log('Audio autoplay prevented:', e));
    }
    if (!isOpen && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    return () => { if (audioRef.current) audioRef.current.pause(); };
  }, [isOpen]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = isMuted;
  }, [isMuted]);

  const toggleMute = () => setIsMuted(!isMuted);

  const handleTypeSelect = (type: 'creator' | 'fan') => {
    setUserType(type);
    setScene(2);
  };

  const handleAnswer = (points: Record<string, number>) => {
    setSelectedOption(null);
    const newScores = { ...scores };
    Object.keys(points).forEach(key => { newScores[key] += points[key]; });
    setScores(newScores);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScene(3);
      setTimeout(() => {
        const winner = Object.keys(newScores).reduce((a, b) => newScores[a] > newScores[b] ? a : b) as keyof typeof energyTypes;
        setResult(winner);
        setScene(4);
      }, 3000);
    }
  };

  const handleDownloadImage = async () => {
    if (!userName.trim()) { alert("Please enter your name first!"); return; }
    setIsGeneratingImage(true);
    const canvas = document.createElement('canvas');
    canvas.width = 1080; canvas.height = 1920;
    const ctx = canvas.getContext('2d');
    if (ctx && result) {
      const energy = energyTypes[result];
      const gradient = ctx.createLinearGradient(0, 0, 0, 1920);
      gradient.addColorStop(0, '#1a0b2e'); gradient.addColorStop(1, '#16213e');
      ctx.fillStyle = gradient; ctx.fillRect(0, 0, 1080, 1920);
      ctx.fillStyle = 'rgba(139, 92, 246, 0.1)';
      ctx.beginPath(); ctx.arc(200, 300, 300, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(880, 1600, 400, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#8b5cf6'; ctx.font = 'bold 48px Inter, sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('CelestiFan', 540, 150);
      ctx.fillStyle = '#ffffff'; ctx.font = 'bold 56px Inter, sans-serif';
      ctx.fillText(`${userName}'s Celesti Energy`, 540, 500);
      ctx.font = 'bold 72px Inter, sans-serif'; ctx.fillStyle = '#8b5cf6';
      ctx.fillText(energy.name.toUpperCase(), 540, 750);
      ctx.font = 'italic 36px Inter, sans-serif'; ctx.fillStyle = '#a78bfa';
      const words = energy.message.split(' '); let line = ''; let y = 900;
      words.forEach(word => {
        const testLine = line + word + ' ';
        if (ctx.measureText(testLine).width > 900 && line !== '') { ctx.fillText(line, 540, y); line = word + ' '; y += 50; }
        else { line = testLine; }
      });
      ctx.fillText(line, 540, y);
      ctx.font = 'bold 32px Inter, sans-serif'; ctx.fillStyle = '#ffffff';
      const traitY = 1100;
      energy.traits.forEach((trait, i) => {
        const x = 270 + (i % 2) * 540; const yPos = traitY + Math.floor(i / 2) * 80;
        ctx.fillStyle = 'rgba(139, 92, 246, 0.3)'; ctx.fillRect(x - 120, yPos - 40, 240, 60);
        ctx.fillStyle = '#ffffff'; ctx.fillText(trait, x, yPos);
      });
      ctx.font = 'bold 36px Inter, sans-serif'; ctx.fillStyle = '#c4b5fd';
      ctx.fillText('Discover your energy at', 540, 1600);
      ctx.font = 'bold 42px Inter, sans-serif'; ctx.fillStyle = '#8b5cf6';
      ctx.fillText('celestifan.com/quiz', 540, 1670);
      ctx.strokeStyle = '#8b5cf6'; ctx.lineWidth = 8; ctx.strokeRect(20, 20, 1040, 1880);
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob); const a = document.createElement('a');
          a.href = url; a.download = `${userName}-celesti-energy.png`; a.click(); URL.revokeObjectURL(url);
          if (!hasShared) setTimeout(() => setShowWaitlistPrompt(true), 1000);
        }
        setIsGeneratingImage(false);
      });
    }
  };

  const handleShareToTwitter = () => {
    if (!userName.trim()) { alert("Please enter your name first!"); return; }
    const text = `I'm a ${result ? energyTypes[result].name : ''}! 🌟\n${result ? energyTypes[result].message : ''}\n\nDiscover your Celesti Energy at`;
    const url = 'https://celestifan.com/quiz';
    const hashtags = result ? energyTypes[result].hashtags.replace(/#/g, '').replace(/ /g, ',') : '';
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=${hashtags}`, '_blank', 'width=550,height=420');
    setHasShared(true); setTimeout(() => setShowWaitlistPrompt(true), 2000);
  };

  const handleShareToInstagram = () => {
    if (!userName.trim()) { alert("Please enter your name first!"); return; }
    navigator.clipboard.writeText('https://celestifan.com/quiz');
    alert('✨ Link copied! Open Instagram and paste in your story. Don\'t forget to tag @celestifan!');
    setHasShared(true); setTimeout(() => setShowWaitlistPrompt(true), 1000);
  };

  const handleJoinWaitlist = async () => {
    if (!waitlistEmail.trim() || !waitlistName.trim()) { alert('Please fill in all fields'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(waitlistEmail)) { alert('Please enter a valid email address'); return; }
    setIsSubmittingWaitlist(true);
    try {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzHtjBUTZrE0ML9SV0XvyOzAYFIOF3YXyXX3v0fJizvK0IgikyqF2dGrRUbw1nFNSyB/exec';
      await fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: waitlistName, email: waitlistEmail, userType: waitlistType || 'general' }) });
      setWaitlistStep('success');
    } catch (error) { alert('Something went wrong. Please try again.'); }
    finally { setIsSubmittingWaitlist(false); }
  };

  const handleSubmitFeedback = async () => {
    if (!userRating || !userName.trim()) { alert('Please rate your experience and enter your name!'); return; }
    setIsSubmittingFeedback(true);
    try {
      let country = 'Unknown'; let flag = '🌍';
      try {
        const geoData = await (await fetch('https://ipapi.co/json/')).json();
        country = geoData.country_name || 'Unknown';
        const countryFlags: Record<string, string> = { 'Nigeria': '🇳🇬', 'United States': '🇺🇸', 'Italy': '🇮🇹', 'United Kingdom': '🇬🇧', 'Germany': '🇩🇪', 'France': '🇫🇷', 'Canada': '🇨🇦', 'Australia': '🇦🇺', 'Brazil': '🇧🇷', 'Japan': '🇯🇵', 'South Korea': '🇰🇷', 'India': '🇮🇳', 'Mexico': '🇲🇽', 'Spain': '🇪🇸', 'Netherlands': '🇳🇱', 'South Africa': '🇿🇦', 'Kenya': '🇰🇪', 'Ghana': '🇬🇭', 'Ireland': '🇮🇪', 'Sweden': '🇸🇪', 'Poland': '🇵🇱', 'Portugal': '🇵🇹', 'Belgium': '🇧🇪', 'Switzerland': '🇨🇭', 'Austria': '🇦🇹', 'Greece': '🇬🇷', 'Turkey': '🇹🇷', 'UAE': '🇦🇪', 'Egypt': '🇪🇬', 'Argentina': '🇦🇷', 'Philippines': '🇵🇭', 'Thailand': '🇹🇭', 'Singapore': '🇸🇬', 'Malaysia': '🇲🇾', 'Indonesia': '🇮🇩', 'Jamaica': '🇯🇲' };
        flag = countryFlags[country] || '🌍';
      } catch {}
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzHtjBUTZrE0ML9SV0XvyOzAYFIOF3YXyXX3v0fJizvK0IgikyqF2dGrRUbw1nFNSyB/exec';
      await fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'quiz_feedback', name: userName, rating: userRating, comment: userComment || 'No comment', energyType: result ? energyTypes[result].name : '', country, flag, timestamp: new Date().toISOString() }) });
      setFeedbackSubmitted(true);
    } catch (error) { alert('Something went wrong. Please try again.'); }
    finally { setIsSubmittingFeedback(false); }
  };

  const openWaitlistForm = () => { setShowWaitlistForm(true); setWaitlistStep('type'); setShowWaitlistPrompt(false); };
  const closeWaitlistForm = () => { setShowWaitlistForm(false); setWaitlistStep('type'); setWaitlistType(null); setWaitlistName(''); setWaitlistEmail(''); };

  const resetQuiz = () => {
    setScene(1); setUserType(null); setQuestions([]); setCurrentQuestion(0);
    setScores({ soulVoyager: 0, vibeAlchemist: 0, dreamArchitect: 0, fireSpirit: 0, emotionalHealer: 0, flowSeeker: 0, storyCollector: 0, cosmicConnector: 0 });
    setResult(null); setUserName(""); setShowWaitlistPrompt(false); setHasShared(false); setHasTrackedCompletion(false); setSelectedOption(null);
  };

  // ── STYLES ──
  const modalBg = { background: 'linear-gradient(135deg, #07050f 0%, #0d0818 50%, #050a12 100%)', border: '1px solid rgba(168,85,247,0.15)' };
  const inputStyle = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none' };

  return (
    <>
      {/* ── TRIGGER BUTTON ── */}
      <style>{`
        @keyframes celestial-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168,85,247,0.35), 0 0 40px rgba(168,85,247,0.15); }
          50% { box-shadow: 0 0 35px rgba(168,85,247,0.6), 0 0 70px rgba(59,130,246,0.3), 0 0 100px rgba(168,85,247,0.15); }
        }
        .celesti-glow-button { animation: celestial-glow 4s ease-in-out infinite; }
        .quiz-option:hover { background: rgba(168,85,247,0.08) !important; border-color: rgba(168,85,247,0.4) !important; }
        .quiz-option-selected { background: rgba(168,85,247,0.12) !important; border-color: rgba(168,85,247,0.6) !important; }
      `}</style>

      <button
        onClick={() => setIsOpen(true)}
        className="celesti-glow-button inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
        style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)', fontSize: '1rem' }}
      >
        <Sparkles className="w-5 h-5" />
        Reveal My Celesti Energy
      </button>

      {/* ── QUIZ MODAL ── */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="sm:max-w-2xl max-h-[92vh] overflow-y-auto p-0 rounded-2xl"
          style={modalBg}
        >
          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className="absolute top-4 right-12 z-50 p-2 rounded-full transition-colors"
            style={{ background: 'rgba(168,85,247,0.1)' }}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-purple-400" /> : <Volume2 className="w-4 h-4 text-purple-400" />}
          </button>

          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">

              {/* ── SCENE 1: CHOOSE PATH ── */}
              {scene === 1 && (
                <motion.div key="scene1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
                  
                  {/* Header */}
                  <div className="text-center pt-4 pb-8">
                    {/* Ambient orb */}
                    <div className="relative flex justify-center mb-6">
                      <div className="absolute w-32 h-32 rounded-full blur-3xl opacity-30" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }} />
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
                        <Sparkles className="w-12 h-12 relative z-10" style={{ color: '#a855f7' }} />
                      </motion.div>
                    </div>

                    <div className="flex items-center justify-center gap-3 mb-3">
                      <div className="h-px w-8" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }} />
                      <span className="text-xs font-semibold tracking-[0.3em] uppercase text-purple-400">CelestiFan</span>
                      <div className="h-px w-8" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }} />
                    </div>

                    <h2
                      className="font-bold text-white mb-3"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                        background: 'linear-gradient(to right, #e2d9f3, #fff, #c4b5fd)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Discover Your Celesti Energy
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem' }}>
                      60 seconds · 8 possible archetypes · one truth
                    </p>
                  </div>

                  {/* Choose cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      { type: 'creator' as const, icon: Music, label: 'I Create', sub: "I'm an artist, bringing my vision to life through music" },
                      { type: 'fan' as const, icon: Users, label: 'I Support', sub: "I'm a fan, uplifting the artists I believe in" },
                    ].map(({ type, icon: Icon, label, sub }) => (
                      <motion.button
                        key={type}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleTypeSelect(type)}
                        className="p-7 rounded-xl text-left transition-all duration-300 group"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(168,85,247,0.15)',
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.border = '1px solid rgba(168,85,247,0.45)'; (e.currentTarget as HTMLElement).style.background = 'rgba(168,85,247,0.07)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.border = '1px solid rgba(168,85,247,0.15)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; }}
                      >
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(168,85,247,0.12)' }}>
                          <Icon className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{label}</h3>
                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', lineHeight: '1.5' }}>{sub}</p>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── SCENE 2: QUESTIONS ── */}
              {scene === 2 && questions.length > 0 && (
                <motion.div key="scene2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4 }}>
                  
                  {/* Progress */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-3">
                      <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                        {currentQuestion + 1} / {questions.length}
                      </span>
                      <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>
                        {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                      </span>
                    </div>
                    <div className="h-1 w-full rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }}
                        initial={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                        animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </div>

                  <motion.div key={currentQuestion} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
                    <h2
                      className="font-bold text-white text-center mb-8"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                        lineHeight: 1.3,
                      }}
                    >
                      {questions[currentQuestion].question}
                    </h2>

                    <div className="space-y-3">
                      {questions[currentQuestion].options.map((option: any, idx: number) => (
                        <motion.button
                          key={idx}
                          initial={{ opacity: 0, x: -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.07 }}
                          onClick={() => handleAnswer(option.points)}
                          className="quiz-option w-full p-4 text-left rounded-xl transition-all duration-200 flex items-center gap-4"
                          style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.07)',
                          }}
                        >
                          <span
                            className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-sm font-bold"
                            style={{ background: 'rgba(168,85,247,0.12)', color: '#a855f7' }}
                          >
                            {OPTION_LETTERS[idx]}
                          </span>
                          <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>{option.text}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* ── SCENE 3: LOADING ── */}
              {scene === 3 && (
                <motion.div key="scene3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-20">
                  <div className="relative flex justify-center mb-8">
                    <div className="absolute w-48 h-48 rounded-full blur-3xl opacity-20" style={{ background: 'linear-gradient(to right, #a855f7, #06b6d4)' }} />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      className="relative z-10"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles className="w-16 h-16" style={{ color: '#a855f7' }} />
                      </motion.div>
                    </motion.div>
                  </div>

                  <h2
                    className="font-bold mb-3"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                      background: 'linear-gradient(to right, #a855f7, #3b82f6, #06b6d4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Analyzing your cosmic frequency...
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.9rem' }}>
                    The universe is revealing your true energy
                  </p>

                  {/* Animated dots */}
                  <div className="flex justify-center gap-2 mt-8">
                    {[0, 1, 2].map(i => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full"
                        style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }}
                        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── SCENE 4: RESULTS ── */}
              {scene === 4 && result && (
                <motion.div key="scene4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}>

                  {/* Result header card */}
                  <div className="rounded-2xl overflow-hidden mb-6" style={{ border: '1px solid rgba(168,85,247,0.2)' }}>
                    {/* Gradient band */}
                    <div className="h-1.5 w-full" style={{ background: `linear-gradient(to right, ${energyTypes[result].color.replace('from-', '').split(' ')[0].replace('-', ':').includes(':') ? '#a855f7' : '#a855f7'}, #3b82f6, #06b6d4)` }} />
                    
                    <div className="p-6 text-center" style={{ background: 'rgba(255,255,255,0.02)' }}>
                      {(() => { const Icon = energyTypes[result].icon; return (
                        <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 2, repeat: Infinity }} className="inline-block mb-4">
                          <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center" style={{ background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.2)' }}>
                            <Icon className="w-8 h-8 text-purple-400" />
                          </div>
                        </motion.div>
                      ); })()}

                      <h2
                        className="font-bold mb-2"
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                          background: 'linear-gradient(to right, #a855f7, #3b82f6, #06b6d4)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {energyTypes[result].name}
                      </h2>

                      <p className="italic mb-5" style={{ color: 'rgba(168,85,247,0.8)', fontSize: '0.95rem' }}>
                        "{energyTypes[result].message}"
                      </p>

                      {/* Traits */}
                      <div className="flex flex-wrap justify-center gap-2 mb-5">
                        {energyTypes[result].traits.map((trait, idx) => (
                          <motion.span
                            key={trait}
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.08 }}
                            className="px-4 py-1.5 rounded-full text-sm font-semibold text-white"
                            style={{ background: 'rgba(168,85,247,0.2)', border: '1px solid rgba(168,85,247,0.25)' }}
                          >
                            {trait}
                          </motion.span>
                        ))}
                      </div>

                      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                        {energyTypes[result].description}
                      </p>
                    </div>
                  </div>

                  {/* Name input */}
                  <div className="mb-6">
                    <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      Your Name — to personalize your energy card
                    </label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={{ ...inputStyle, transition: 'border-color 0.2s' }}
                      onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(168,85,247,0.5)'}
                      onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>

                  {/* Share */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold tracking-widest uppercase mb-3 flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      <Share2 className="w-3 h-3" /> Share Your Energy
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      <button onClick={handleShareToTwitter} disabled={!userName.trim()} className="py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-30" style={{ background: '#1DA1F2' }}>
                        <Twitter className="w-4 h-4 inline mr-1" /> Tweet
                      </button>
                      <button onClick={handleShareToInstagram} disabled={!userName.trim()} className="py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-30" style={{ background: 'linear-gradient(to right, #7c3aed, #db2777)' }}>
                        <Instagram className="w-4 h-4 inline mr-1" /> Story
                      </button>
                      <button onClick={handleDownloadImage} disabled={isGeneratingImage || !userName.trim()} className="py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-30" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>
                        <Download className="w-4 h-4 inline mr-1" /> {isGeneratingImage ? '...' : 'Save'}
                      </button>
                    </div>
                  </div>

                  {/* Waitlist CTA */}
                  {!showWaitlistPrompt ? (
                    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl p-5 mb-4" style={{ background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.15)' }}>
                      <div className="flex gap-4">
                        <Gift className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <h4 className="font-bold text-white mb-1">Unlock Exclusive Perks</h4>
                          <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Join {waitlistCount.toLocaleString()}+ music lovers getting early access</p>
                          <div className="space-y-1.5 mb-4 text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                            {['Early platform access before public launch', '3 exclusive artist interviews immediately', 'Private community of music lovers', 'Founder member badge on profile'].map(item => (
                              <div key={item} className="flex items-center gap-2"><span style={{ color: '#a855f7' }}>✦</span> {item}</div>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <button onClick={openWaitlistForm} className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }}>
                              Join Waitlist
                            </button>
                            <button onClick={() => setShowWaitlistPrompt(false)} className="px-4 py-2.5 rounded-xl text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                              Later
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-xl p-5 mb-4 text-center" style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)' }}>
                      <PartyPopper className="w-10 h-10 mx-auto mb-2 text-emerald-400" />
                      <h4 className="font-bold text-white mb-1">Thanks for Sharing!</h4>
                      <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Want to unlock even more? Join our exclusive waitlist!</p>
                      <div className="flex gap-2 justify-center">
                        <button onClick={openWaitlistForm} className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }}>Yes, Give Me Access!</button>
                        <button onClick={() => setShowWaitlistPrompt(false)} className="px-4 py-2.5 rounded-xl text-xs" style={{ color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.08)' }}>I'm Good</button>
                      </div>
                    </motion.div>
                  )}

                  {/* Waitlist form */}
                  <AnimatePresence>
                    {showWaitlistForm && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="rounded-xl p-5 mb-4" style={{ background: 'rgba(168,85,247,0.05)', border: '1px solid rgba(168,85,247,0.2)' }}>
                          {waitlistStep === 'type' && (
                            <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}>
                              <h4 className="text-lg font-bold text-center text-white mb-4">Join as Artist or Fan?</h4>
                              <div className="grid grid-cols-2 gap-3 mb-3">
                                {[{ type: 'artist' as const, icon: Music, label: 'Artist', sub: 'I create music' }, { type: 'fan' as const, icon: Users, label: 'Fan', sub: 'I support artists' }].map(({ type, icon: Icon, label, sub }) => (
                                  <button key={type} onClick={() => { setWaitlistType(type); setWaitlistStep('details'); }} className="p-4 rounded-xl text-center transition-all" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(168,85,247,0.15)' }}
                                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(168,85,247,0.4)'}
                                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(168,85,247,0.15)'}
                                  >
                                    <Icon className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                                    <div className="font-bold text-white text-sm">{label}</div>
                                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{sub}</div>
                                  </button>
                                ))}
                              </div>
                              <button onClick={closeWaitlistForm} className="w-full py-2 text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>Cancel</button>
                            </motion.div>
                          )}

                          {waitlistStep === 'details' && (
                            <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}>
                              <h4 className="text-lg font-bold text-center text-white mb-1">{waitlistType === 'artist' ? '🎸 Artist Waitlist' : '🎵 Fan Waitlist'}</h4>
                              <p className="text-xs text-center mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>{waitlistType === 'artist' ? 'Get early access to launch your profile & connect with fans' : 'Be first to support artists & unlock exclusive content'}</p>
                              <div className="space-y-3 mb-4">
                                <input type="text" value={waitlistName} onChange={e => setWaitlistName(e.target.value)} placeholder={waitlistType === 'artist' ? 'Artist name' : 'Your name'} className="w-full px-4 py-3 rounded-xl text-sm" style={inputStyle} disabled={isSubmittingWaitlist} />
                                <input type="email" value={waitlistEmail} onChange={e => setWaitlistEmail(e.target.value)} placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl text-sm" style={inputStyle} disabled={isSubmittingWaitlist} />
                              </div>
                              <div className="flex gap-2">
                                <button onClick={handleJoinWaitlist} disabled={isSubmittingWaitlist || !waitlistName.trim() || !waitlistEmail.trim()} className="flex-1 py-3 rounded-xl text-sm font-semibold text-white disabled:opacity-40" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }}>
                                  {isSubmittingWaitlist ? 'Joining...' : 'Join Waitlist 🚀'}
                                </button>
                                <button onClick={() => setWaitlistStep('type')} disabled={isSubmittingWaitlist} className="px-4 py-3 rounded-xl text-sm" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}>Back</button>
                              </div>
                            </motion.div>
                          )}

                          {waitlistStep === 'success' && (
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-4">
                              <motion.div animate={{ rotate: [0, 10, -10, 10, 0], scale: [1, 1.2, 1.2, 1.2, 1] }} transition={{ duration: 0.6 }}>
                                <PartyPopper className="w-16 h-16 mx-auto mb-4 text-purple-400" />
                              </motion.div>
                              <h4 className="text-2xl font-bold text-white mb-2">Welcome to the Movement!</h4>
                              <p className="mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>You're officially on the waitlist, <span className="text-purple-400 font-bold">{waitlistName}</span>!</p>
                              <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.35)' }}>Check your email for next steps! 📧</p>
                              <button onClick={closeWaitlistForm} className="px-6 py-3 rounded-xl text-sm font-semibold text-white" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }}>Back to Results</button>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Feedback */}
                  <div className="rounded-xl p-5 mb-4" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h3 className="font-bold text-white text-center mb-1">How Accurate Was Your Result?</h3>
                    <p className="text-xs text-center mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>Your feedback helps us improve</p>
                    <div className="flex justify-center gap-2 mb-4">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button key={star} onClick={() => setUserRating(star)} className="text-3xl transition-all hover:scale-110" style={{ opacity: userRating >= star ? 1 : 0.2 }}>⭐</button>
                      ))}
                    </div>
                    <textarea value={userComment} onChange={e => setUserComment(e.target.value)} placeholder="Tell us what you think (max 140 characters)..." maxLength={140} className="w-full p-3 rounded-xl text-sm mb-1 resize-none" style={{ ...inputStyle, rows: 3 } as any} rows={3} />
                    <div className="text-right text-xs mb-3" style={{ color: 'rgba(255,255,255,0.2)' }}>{userComment.length}/140</div>
                    <button onClick={handleSubmitFeedback} disabled={!userRating || isSubmittingFeedback} className="w-full py-3 rounded-xl text-sm font-semibold text-white disabled:opacity-40 transition-all" style={{ background: 'linear-gradient(to right, #a855f7, #3b82f6)' }}>
                      {isSubmittingFeedback ? 'Submitting...' : 'Submit Feedback'}
                    </button>
                    {feedbackSubmitted && (
                      <div className="mt-3 p-3 rounded-xl text-center text-sm" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: '#34d399' }}>
                        ✅ Thanks! You might see your feedback featured on our blog.
                      </div>
                    )}
                  </div>

                  {/* Retake */}
                  <button onClick={resetQuiz} className="w-full py-3 rounded-xl text-sm transition-all" style={{ color: 'rgba(255,255,255,0.25)' }}>
                    Take Quiz Again
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CelestiQuiz;