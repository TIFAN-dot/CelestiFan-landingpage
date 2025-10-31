import { useState, useEffect } from "react";
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
  PartyPopper, Download, Share2, Lock
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
    message: "Your Celesti Energy flows like a gentle storm"
  },
  vibeAlchemist: {
    name: "Vibe Alchemist",
    icon: Zap,
    color: "from-orange-500 to-yellow-500",
    description: "You transform every beat into emotion. Your Celesti Energy is pure rhythm — a mix of joy, motion, and instinct. Music isn't therapy for you — it's magic.",
    traits: ["Joyful", "Rhythmic", "Magnetic", "Spontaneous"],
    message: "You turn sound into pure energy"
  },
  dreamArchitect: {
    name: "Dream Architect",
    icon: Star,
    color: "from-cyan-500 to-blue-600",
    description: "You live in soundscapes. Your Celesti Energy is delicate and structured — music helps you build the world you dream of living in.",
    traits: ["Organized", "Creative", "Visionary", "Structured"],
    message: "You build worlds from melodies"
  },
  fireSpirit: {
    name: "Fire Spirit",
    icon: Flame,
    color: "from-red-500 to-pink-600",
    description: "You burn bright — your Celesti Energy is raw and impulsive. Music keeps your flame alive when life feels heavy. You chase sound to find peace.",
    traits: ["Passionate", "Intense", "Authentic", "Bold"],
    message: "Your flame never goes out"
  },
  emotionalHealer: {
    name: "Emotional Healer",
    icon: Sparkles,
    color: "from-purple-600 to-pink-500",
    description: "You carry too much but heal through sound. Your Celesti Energy is reflective — you understand pain, yet turn it into peace every time a melody plays.",
    traits: ["Empathetic", "Nurturing", "Deep", "Understanding"],
    message: "You heal hearts through harmony"
  },
  flowSeeker: {
    name: "Flow Seeker",
    icon: Wind,
    color: "from-teal-500 to-green-500",
    description: "You're made of groove. Your Celesti Energy is calm confidence. Music doesn't fix you — it reminds you that you're already whole.",
    traits: ["Balanced", "Confident", "Smooth", "Grounded"],
    message: "You move with effortless grace"
  },
  storyCollector: {
    name: "Story Collector",
    icon: Music,
    color: "from-indigo-600 to-purple-700",
    description: "You don't chase hits — you chase stories. Your Celesti Energy is nostalgic, cinematic, and deeply human. You find yourself in verses, again and again.",
    traits: ["Nostalgic", "Thoughtful", "Soulful", "Connected"],
    message: "You live a thousand lives through lyrics"
  },
  cosmicConnector: {
    name: "Cosmic Connector",
    icon: Sparkles,
    color: "from-violet-600 to-fuchsia-600",
    description: "You're a bridge between feeling and sound. Your Celesti Energy is universal — it moves between joy, pain, and hope, turning music into your language with the world.",
    traits: ["Universal", "Empathetic", "Wise", "Connected"],
    message: "You speak the language of the universe"
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
// HELPER FUNCTION: Random Question Selection
// ========================================

const getRandomQuestions = (questionPool: any[], count: number = 4) => {
  const shuffled = [...questionPool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
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
  const [hasJoinedWaitlist, setHasJoinedWaitlist] = useState(() => {
    // Check if user already joined
    if (typeof window !== 'undefined') {
      return localStorage.getItem('celestifan-waitlist-joined') === 'true';
    }
    return false;
  });
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  // Initialize random questions when user selects type
  useEffect(() => {
    if (userType) {
      const questionPool = userType === 'creator' ? allArtistQuestions : allFanQuestions;
      const randomQuestions = getRandomQuestions(questionPool, 4);
      setQuestions(randomQuestions);
    }
  }, [userType]);

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

  const handleJoinWaitlist = () => {
    // Save to localStorage and unlock immediately
    localStorage.setItem('celestifan-waitlist-joined', 'true');
    
    // Unlock with smooth transition
    setTimeout(() => {
      setHasJoinedWaitlist(true);
    }, 100);
    
    // Modal stays open so they can download immediately!
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
        }
        setIsGeneratingImage(false);
      });
    }
  };

  const handleShareToStory = () => {
    if (!userName.trim()) {
      alert("Please enter your name first!");
      return;
    }

    // Web Share API
    if (navigator.share) {
      navigator.share({
        title: `${userName}'s Celesti Energy`,
        text: `I'm a ${result ? energyTypes[result].name : ''}! Discover your Celesti Energy at celestifan.com/quiz`,
        url: 'https://celestifan.com/quiz'
      }).catch(console.error);
    } else {
      // Fallback - copy link
      navigator.clipboard.writeText('https://celestifan.com/quiz');
      alert('Link copied! Share it on your story!');
    }
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
    setHasJoinedWaitlist(false);
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

            {/* Scene 4: Results */}
            {scene === 4 && result && (
              <motion.div
                key="scene4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="pt-8"
              >
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

                <div className="mt-8 space-y-6">
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

                  {/* Name Input */}
                  <div className="pt-6 border-t border-border">
                    <label className="block text-sm font-medium mb-2 text-center">
                      Enter your name to claim your energy:
                    </label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-primary outline-none transition-all text-center"
                    />
                  </div>

                  {/* Sharing Section */}
                  {!hasJoinedWaitlist ? (
                    <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-6 text-center">
                      <Lock className="w-12 h-12 mx-auto mb-3 text-primary/50" />
                      <p className="text-muted-foreground mb-4">
                        Join the waitlist to unlock sharing and download your personalized Celesti Energy card!
                      </p>
                      <Button
                        size="lg"
                        onClick={handleJoinWaitlist}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                      >
                        Join Waitlist to Unlock
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-center text-sm text-muted-foreground">
                        ✨ Unlocked! Share your Celesti Energy with the world
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          size="lg"
                          onClick={handleDownloadImage}
                          disabled={isGeneratingImage || !userName.trim()}
                          className="flex-1 bg-primary hover:bg-primary/90"
                        >
                          <Download className="mr-2 h-5 w-5" />
                          {isGeneratingImage ? 'Generating...' : 'Download Image'}
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          onClick={handleShareToStory}
                          disabled={!userName.trim()}
                          className="flex-1"
                        >
                          <Share2 className="mr-2 h-5 w-5" />
                          Share to Story
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Take Again */}
                  <Button
                    variant="ghost"
                    onClick={resetQuiz}
                    className="w-full"
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