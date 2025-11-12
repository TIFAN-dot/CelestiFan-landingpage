import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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

// Simulate fetching waitlist count from Google Sheets
const useWaitlistCount = () => {
  const [count, setCount] = useState(3124);
  
  useEffect(() => {
    // In production, fetch from your Google Sheets
    // For now, simulate growing count
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3));
    }, 30000); // Update every 30 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return count;
};

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
    soulVoyager: 0,
    vibeAlchemist: 0,
    dreamArchitect: 0,
    fireSpirit: 0,
    emotionalHealer: 0,
    flowSeeker: 0,
    storyCollector: 0,
    cosmicConnector: 0
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
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const waitlistCount = useWaitlistCount();

  // Track quiz completion
  const trackQuizCompletion = async (resultType: string, name: string, type: 'creator' | 'fan') => {
    if (hasTrackedCompletion) return; // Prevent duplicate tracking
    
    try {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzHtjBUTZrE0ML9SV0XvyOzAYFIOF3YXyXX3v0fJizvK0IgikyqF2dGrRUbw1nFNSyB/exec';
      
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'quiz_completion',
          userType: type,
          result: energyTypes[resultType as keyof typeof energyTypes]?.name || resultType,
          name: name || 'anonymous'
        })
      });
      
      setHasTrackedCompletion(true);
      console.log('Quiz completion tracked successfully');
    } catch (error) {
      console.error('Failed to track quiz completion:', error);
    }
  };

  // Initialize random questions when user selects type
  useEffect(() => {
    if (userType) {
      const questionPool = userType === 'creator' ? allArtistQuestions : allFanQuestions;
      const randomQuestions = getRandomQuestions(questionPool, 4);
      setQuestions(randomQuestions);
    }
  }, [userType]);

  // Track quiz completion when user sees results and has entered name
  useEffect(() => {
    if (result && scene === 4 && userName.trim() && userType && !hasTrackedCompletion) {
      // Small delay to ensure user is actually viewing the result
      const timer = setTimeout(() => {
        trackQuizCompletion(result, userName, userType);
      }, 2000); // Track after 2 seconds of viewing result
      
      return () => clearTimeout(timer);
    }
  }, [result, scene, userName, userType, hasTrackedCompletion]);

  // Manage background music playback
  useEffect(() => {
    // Initialize audio when modal opens
    if (isOpen && !audioRef.current) {
      audioRef.current = new Audio('/quiz-music.mp3.wav');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3; // 30% volume by default
    }

    // Play music when modal opens
    if (isOpen && audioRef.current) {
      audioRef.current.play().catch(error => {
        // Autoplay might be blocked by browser, that's okay
        console.log('Audio autoplay prevented:', error);
      });
    }

    // Stop music when modal closes
    if (!isOpen && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isOpen]);

  // Handle mute/unmute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleTypeSelect = (type: 'creator' | 'fan') => {
    setUserType(type);
    setScene(2);
  };

  const handleAnswer = (points: Record<string, number>) => {
    const newScores = { ...scores };
    Object.keys(points).forEach(key => {
      newScores[key] += points[key];
    });
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      setScene(3);
      setTimeout(() => {
        const winner = Object.keys(newScores).reduce((a, b) => 
          newScores[a] > newScores[b] ? a : b
        ) as keyof typeof energyTypes;
        setResult(winner);
        setScene(4);
      }, 3000);
    }
  };

  const handleDownloadImage = async () => {
    if (!userName.trim()) {
      alert("Please enter your name first!");
      return;
    }

    setIsGeneratingImage(true);
    
    // Create canvas for image generation
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1920; // Instagram Story format
    const ctx = canvas.getContext('2d');

    if (ctx && result) {
      const energy = energyTypes[result];
      
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, 1920);
      gradient.addColorStop(0, '#1a0b2e');
      gradient.addColorStop(1, '#16213e');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 1080, 1920);

      // Add decorative elements
      ctx.fillStyle = 'rgba(139, 92, 246, 0.1)';
      ctx.beginPath();
      ctx.arc(200, 300, 300, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(880, 1600, 400, 0, Math.PI * 2);
      ctx.fill();

      // CelestiFan logo text at top
      ctx.fillStyle = '#8b5cf6';
      ctx.font = 'bold 48px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('CelestiFan', 540, 150);

      // User's name
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 56px Inter, sans-serif';
      ctx.fillText(`${userName}'s Celesti Energy`, 540, 500);

      // Energy type name with gradient effect
      ctx.font = 'bold 72px Inter, sans-serif';
      ctx.fillStyle = '#8b5cf6';
      ctx.fillText(energy.name.toUpperCase(), 540, 750);

      // Message
      ctx.font = 'italic 36px Inter, sans-serif';
      ctx.fillStyle = '#a78bfa';
      const words = energy.message.split(' ');
      let line = '';
      let y = 900;
      words.forEach(word => {
        const testLine = line + word + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > 900 && line !== '') {
          ctx.fillText(line, 540, y);
          line = word + ' ';
          y += 50;
        } else {
          line = testLine;
        }
      });
      ctx.fillText(line, 540, y);

      // Traits
      ctx.font = 'bold 32px Inter, sans-serif';
      ctx.fillStyle = '#ffffff';
      const traitY = 1100;
      energy.traits.forEach((trait, i) => {
        const x = 270 + (i % 2) * 540;
        const yPos = traitY + Math.floor(i / 2) * 80;
        
        // Trait background
        ctx.fillStyle = 'rgba(139, 92, 246, 0.3)';
        ctx.fillRect(x - 120, yPos - 40, 240, 60);
        
        // Trait text
        ctx.fillStyle = '#ffffff';
        ctx.fillText(trait, x, yPos);
      });

      // Call to action
      ctx.font = 'bold 36px Inter, sans-serif';
      ctx.fillStyle = '#c4b5fd';
      ctx.fillText('Discover your energy at', 540, 1600);
      ctx.font = 'bold 42px Inter, sans-serif';
      ctx.fillStyle = '#8b5cf6';
      ctx.fillText('celestifan.com/quiz', 540, 1670);

      // Border
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 8;
      ctx.strokeRect(20, 20, 1040, 1880);

      // Download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${userName}-celesti-energy.png`;
          a.click();
          URL.revokeObjectURL(url);
          
          // After download, show waitlist prompt if they haven't shared yet
          if (!hasShared) {
            setTimeout(() => setShowWaitlistPrompt(true), 1000);
          }
        }
        setIsGeneratingImage(false);
      });
    }
  };

  const handleShareToTwitter = () => {
    if (!userName.trim()) {
      alert("Please enter your name first!");
      return;
    }

    const text = `I'm a ${result ? energyTypes[result].name : ''}! 🌟\n${result ? energyTypes[result].message : ''}\n\nDiscover your Celesti Energy at`;
    const url = 'https://celestifan.com/quiz';
    const hashtags = result ? energyTypes[result].hashtags.replace(/#/g, '').replace(/ /g, ',') : '';
    
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=${hashtags}`,
      '_blank',
      'width=550,height=420'
    );
    
    setHasShared(true);
    // Show waitlist prompt after they tweet
    setTimeout(() => setShowWaitlistPrompt(true), 2000);
  };

  const handleShareToInstagram = () => {
    if (!userName.trim()) {
      alert("Please enter your name first!");
      return;
    }

    // Copy link for Instagram
    navigator.clipboard.writeText('https://celestifan.com/quiz');
    alert('✨ Link copied! Open Instagram and paste in your story. Don\'t forget to tag @celestifan!');
    
    setHasShared(true);
    setTimeout(() => setShowWaitlistPrompt(true), 1000);
  };

  const handleJoinWaitlist = async () => {
    if (!waitlistEmail.trim() || !waitlistName.trim()) {
      alert('Please fill in all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(waitlistEmail)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmittingWaitlist(true);

    try {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzHtjBUTZrE0ML9SV0XvyOzAYFIOF3YXyXX3v0fJizvK0IgikyqF2dGrRUbw1nFNSyB/exec';

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: waitlistName,
          email: waitlistEmail,
          userType: waitlistType || 'general'
        })
      });

      // Show success
      setWaitlistStep('success');

    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmittingWaitlist(false);
    }
  };

  const openWaitlistForm = () => {
    setShowWaitlistForm(true);
    setWaitlistStep('type');
    setShowWaitlistPrompt(false);
  };

  const closeWaitlistForm = () => {
    setShowWaitlistForm(false);
    setWaitlistStep('type');
    setWaitlistType(null);
    setWaitlistName('');
    setWaitlistEmail('');
  };

  const resetQuiz = () => {
    setScene(1);
    setUserType(null);
    setQuestions([]);
    setCurrentQuestion(0);
    setScores({
      soulVoyager: 0,
      vibeAlchemist: 0,
      dreamArchitect: 0,
      fireSpirit: 0,
      emotionalHealer: 0,
      flowSeeker: 0,
      storyCollector: 0,
      cosmicConnector: 0
    });
    setResult(null);
    setUserName("");
    setShowWaitlistPrompt(false);
    setHasShared(false);
    setHasTrackedCompletion(false); // Reset tracking for next quiz
  };

  return (
    <>
      {/* Trigger Button */}
      <Button
        onClick={() => setIsOpen(true)}
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
      >
        <Sparkles className="mr-2 h-5 w-5" />
        Discover Your Celesti Energy
      </Button>

      {/* Quiz Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-2xl bg-background border-primary shadow-2xl shadow-primary/20 max-h-[90vh] overflow-y-auto">
          {/* Mute/Unmute Button - Fixed Position */}
          <button
            onClick={toggleMute}
            className="absolute top-4 right-14 z-50 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label={isMuted ? "Unmute music" : "Mute music"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-primary" />
            ) : (
              <Volume2 className="w-5 h-5 text-primary" />
            )}
          </button>

          <AnimatePresence mode="wait">
            {/* Scene 1: Choose Path */}
            {scene === 1 && (
              <motion.div
                key="scene1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <DialogHeader className="text-center items-center pt-8">
                  <Sparkles className="h-16 w-16 text-primary animate-pulse mx-auto mb-4" />
                  <DialogTitle className="text-3xl md:text-4xl font-display text-gradient">
                    Discover Your Celesti Energy
                  </DialogTitle>
                  <p className="text-lg text-muted-foreground mt-4">
                    Every soul has a unique cosmic frequency. What's yours?
                  </p>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleTypeSelect('creator')}
                    className="p-8 bg-card/50 backdrop-blur border-2 border-primary/20 hover:border-primary/50 rounded-lg cursor-pointer transition-all"
                  >
                    <Music className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-2xl font-bold text-center mb-3">I Create</h3>
                    <p className="text-muted-foreground text-center">
                      I'm an artist, bringing my vision to life through music
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleTypeSelect('fan')}
                    className="p-8 bg-card/50 backdrop-blur border-2 border-primary/20 hover:border-primary/50 rounded-lg cursor-pointer transition-all"
                  >
                    <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-2xl font-bold text-center mb-3">I Support</h3>
                    <p className="text-muted-foreground text-center">
                      I'm a fan, uplifting the artists I believe in
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Scene 2: Questions */}
            {scene === 2 && questions.length > 0 && (
              <motion.div
                key="scene2"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="pt-8"
              >
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-muted-foreground">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <div className="flex gap-2">
                      {questions.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-2 w-8 rounded-full transition-all ${
                            idx <= currentQuestion ? 'bg-primary' : 'bg-primary/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                    {questions[currentQuestion].question}
                  </h2>

                  <div className="grid gap-4 mb-6">
                    {questions[currentQuestion].options.map((option: any, idx: number) => (
                      <motion.button
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => handleAnswer(option.points)}
                        className="p-6 text-left rounded-lg bg-background/50 border-2 border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <span className="text-primary font-bold">
                              {String.fromCharCode(65 + idx)}
                            </span>
                          </div>
                          <span className="text-lg">{option.text}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Scene 3: Loading */}
            {scene === 3 && (
              <motion.div
                key="scene3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="text-center py-20"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-20 h-20 mx-auto text-primary" />
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-3xl md:text-4xl font-display mt-8 text-gradient"
                >
                  Analyzing your cosmic frequency...
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-muted-foreground mt-4"
                >
                  The universe is revealing your true energy
                </motion.p>
              </motion.div>
            )}

            {/* Scene 4: Results - IMPROVED! */}
            {scene === 4 && result && (
              <motion.div
                key="scene4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="pt-8 pb-4"
              >
                {/* CELEBRATION HEADER */}
                <DialogHeader className="text-center items-center">
                  {(() => {
                    const Icon = energyTypes[result].icon;
                    return <Icon className="w-20 h-20 text-primary animate-bounce mx-auto mb-4" />;
                  })()}
                  
                  <DialogTitle className="text-3xl md:text-4xl font-display">
                    <span className={`bg-gradient-to-r ${energyTypes[result].color} bg-clip-text text-transparent`}>
                      {energyTypes[result].name}
                    </span>
                  </DialogTitle>
                  
                  <p className="text-lg md:text-xl text-muted-foreground mt-4 italic">
                    "{energyTypes[result].message}"
                  </p>
                </DialogHeader>

                {/* DESCRIPTION & TRAITS */}
                <div className="mt-6 space-y-6">
                  <p className="text-lg leading-relaxed text-center">
                    {energyTypes[result].description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-3">
                    {energyTypes[result].traits.map((trait, idx) => (
                      <motion.span
                        key={trait}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`px-4 py-2 rounded-full bg-gradient-to-r ${energyTypes[result].color} text-white font-semibold`}
                      >
                        {trait}
                      </motion.span>
                    ))}
                  </div>

                  {/* NAME INPUT */}
                  <div className="pt-4 border-t border-border">
                    <label className="block text-sm font-medium mb-2 text-center">
                      Enter your name to personalize your energy card:
                    </label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-primary outline-none transition-all text-center"
                    />
                  </div>

                  {/* PRIMARY CTA: SHARE YOUR CELESTI ENERGY (UNLOCKED!) */}
                  <div className="space-y-4 pt-4">
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
                        <Share2 className="w-5 h-5 text-primary" />
                        Share Your Celesti Energy
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Show the world your cosmic vibe! ✨
                      </p>
                    </div>

                    {/* SHARE BUTTONS - BIG & PROMINENT */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <Button
                        size="lg"
                        onClick={handleShareToTwitter}
                        disabled={!userName.trim()}
                        className="bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white"
                      >
                        <Twitter className="mr-2 h-5 w-5" />
                        Tweet It
                      </Button>
                      
                      <Button
                        size="lg"
                        onClick={handleShareToInstagram}
                        disabled={!userName.trim()}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                      >
                        <Instagram className="mr-2 h-5 w-5" />
                        Story It
                      </Button>
                      
                      <Button
                        size="lg"
                        onClick={handleDownloadImage}
                        disabled={isGeneratingImage || !userName.trim()}
                        variant="outline"
                        className="border-primary/50 hover:bg-primary/10"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        {isGeneratingImage ? 'Creating...' : 'Download'}
                      </Button>
                    </div>
                  </div>

                  {/* DIVIDER */}
                  <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">
                        Want More?
                      </span>
                    </div>
                  </div>

                  {/* SECONDARY CTA: WAITLIST (OPTIONAL VALUE-ADD) */}
                  {!showWaitlistPrompt ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6"
                    >
                      <div className="flex items-start gap-4">
                        <Gift className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-bold text-lg mb-2">
                            ✨ Unlock Exclusive Perks
                          </h4>
                          <p className="text-sm text-muted-foreground mb-4">
                            Join {waitlistCount.toLocaleString()}+ music lovers getting early access
                          </p>
                          
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-2 text-sm">
                              <TrendingUp className="w-4 h-4 text-primary" />
                              <span>Early platform access before public launch</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Music className="w-4 h-4 text-primary" />
                              <span>3 exclusive artist interviews immediately</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Users className="w-4 h-4 text-primary" />
                              <span>Private community of music lovers</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Sparkles className="w-4 h-4 text-primary" />
                              <span>Founder member badge on profile</span>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button
                              onClick={openWaitlistForm}
                              className="flex-1 bg-primary hover:bg-primary/90"
                            >
                              Join Waitlist & Get Perks
                            </Button>
                            <Button
                              variant="ghost"
                              onClick={() => setShowWaitlistPrompt(false)}
                              className="sm:w-auto"
                            >
                              Maybe Later
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    // POST-SHARE CONVERSION PROMPT
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-gradient-to-br from-green-500/10 to-primary/10 border border-green-500/20 rounded-xl p-6"
                    >
                      <div className="text-center">
                        <PartyPopper className="w-12 h-12 mx-auto mb-3 text-primary" />
                        <h4 className="font-bold text-xl mb-2">
                          🎉 Thanks for Sharing!
                        </h4>
                        <p className="text-muted-foreground mb-4">
                          Want to unlock even more? Join our exclusive waitlist!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <Button
                            onClick={openWaitlistForm}
                            size="lg"
                            className="bg-primary hover:bg-primary/90"
                          >
                            Yes, Give Me Access!
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => setShowWaitlistPrompt(false)}
                          >
                            I'm Good
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* INLINE WAITLIST FORM */}
                  <AnimatePresence>
                    {showWaitlistForm && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-xl p-6">
                          {/* Step 1: Select Type */}
                          {waitlistStep === 'type' && (
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                            >
                              <h4 className="text-xl font-bold text-center mb-4">
                                🎵 Join as Artist or Fan?
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Button
                                  size="lg"
                                  onClick={() => {
                                    setWaitlistType('artist');
                                    setWaitlistStep('details');
                                  }}
                                  className="h-auto py-6 flex-col gap-2 bg-card hover:bg-primary/10 text-foreground border-2 border-primary/20 hover:border-primary/50"
                                  variant="outline"
                                >
                                  <Music className="w-8 h-8 text-primary" />
                                  <div>
                                    <div className="font-bold">Artist</div>
                                    <div className="text-xs text-muted-foreground">I create music</div>
                                  </div>
                                </Button>
                                <Button
                                  size="lg"
                                  onClick={() => {
                                    setWaitlistType('fan');
                                    setWaitlistStep('details');
                                  }}
                                  className="h-auto py-6 flex-col gap-2 bg-card hover:bg-primary/10 text-foreground border-2 border-primary/20 hover:border-primary/50"
                                  variant="outline"
                                >
                                  <Users className="w-8 h-8 text-primary" />
                                  <div>
                                    <div className="font-bold">Fan</div>
                                    <div className="text-xs text-muted-foreground">I support artists</div>
                                  </div>
                                </Button>
                              </div>
                              <Button
                                variant="ghost"
                                onClick={closeWaitlistForm}
                                className="w-full mt-4"
                              >
                                Cancel
                              </Button>
                            </motion.div>
                          )}

                          {/* Step 2: Enter Details */}
                          {waitlistStep === 'details' && (
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                            >
                              <h4 className="text-xl font-bold text-center mb-2">
                                {waitlistType === 'artist' ? '🎸 Artist Waitlist' : '🎵 Fan Waitlist'}
                              </h4>
                              <p className="text-sm text-muted-foreground text-center mb-6">
                                {waitlistType === 'artist' 
                                  ? 'Get early access to launch your profile & connect with fans'
                                  : 'Be first to support artists & unlock exclusive content'
                                }
                              </p>

                              <div className="space-y-4">
                                <div>
                                  <label className="block text-sm font-medium mb-2">
                                    {waitlistType === 'artist' ? 'Artist Name' : 'Your Name'}
                                  </label>
                                  <input
                                    type="text"
                                    value={waitlistName}
                                    onChange={(e) => setWaitlistName(e.target.value)}
                                    placeholder={waitlistType === 'artist' ? 'Enter your artist name' : 'Enter your name'}
                                    className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-primary outline-none transition-all"
                                    disabled={isSubmittingWaitlist}
                                  />
                                </div>

                                <div>
                                  <label className="block text-sm font-medium mb-2">
                                    Email Address
                                  </label>
                                  <input
                                    type="email"
                                    value={waitlistEmail}
                                    onChange={(e) => setWaitlistEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-primary outline-none transition-all"
                                    disabled={isSubmittingWaitlist}
                                  />
                                </div>

                                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                                  <p className="text-sm font-medium mb-2">You'll get:</p>
                                  <ul className="text-sm space-y-1 text-muted-foreground">
                                    <li>✅ Early platform access</li>
                                    <li>✅ Exclusive artist interviews</li>
                                    <li>✅ Private community access</li>
                                    <li>✅ Founder member badge</li>
                                  </ul>
                                </div>

                                <div className="flex gap-3">
                                  <Button
                                    onClick={handleJoinWaitlist}
                                    disabled={isSubmittingWaitlist || !waitlistName.trim() || !waitlistEmail.trim()}
                                    className="flex-1 bg-primary hover:bg-primary/90"
                                  >
                                    {isSubmittingWaitlist ? 'Joining...' : 'Join Waitlist 🚀'}
                                  </Button>
                                  <Button
                                    variant="outline"
                                    onClick={() => setWaitlistStep('type')}
                                    disabled={isSubmittingWaitlist}
                                  >
                                    Back
                                  </Button>
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {/* Step 3: Success */}
                          {waitlistStep === 'success' && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="text-center py-6"
                            >
                              <motion.div
                                animate={{ 
                                  rotate: [0, 10, -10, 10, 0],
                                  scale: [1, 1.2, 1.2, 1.2, 1]
                                }}
                                transition={{ duration: 0.6 }}
                              >
                                <PartyPopper className="w-20 h-20 mx-auto mb-4 text-primary" />
                              </motion.div>
                              
                              <h4 className="text-2xl font-bold mb-2 text-gradient">
                                🎉 Welcome to the Movement!
                              </h4>
                              
                              <p className="text-lg mb-4">
                                You're officially on the waitlist, <span className="font-bold text-primary">{waitlistName}</span>!
                              </p>
                              
                              <div className="bg-background/50 rounded-lg p-4 mb-6">
                                <p className="text-sm text-muted-foreground mb-2">
                                  Welcome to CelestiFan, where every moment of support matters.
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  <span className="font-bold text-primary">Your journey starts now:</span> Earn Celeste. Empower artists. Elevate fandom.
                                </p>
                              </div>

                              <p className="text-sm text-muted-foreground mb-6">
                                Check your email for next steps! 📧
                              </p>

                              <Button
                                onClick={closeWaitlistForm}
                                className="bg-primary hover:bg-primary/90"
                              >
                                Awesome! Back to Results
                              </Button>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* RETAKE QUIZ */}
                  <Button
                    variant="ghost"
                    onClick={resetQuiz}
                    className="w-full mt-4"
                  >
                    Take Quiz Again
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CelestiQuiz;