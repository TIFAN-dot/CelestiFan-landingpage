import { Star } from "lucide-react";
import { motion } from "framer-motion";

// Updated interface with country and flag
interface Reaction {
  timestamp: string;
  name: string;
  energyType: string;
  rating: number;
  comment: string;
  country?: string;   // NEW - Country name
  flag?: string;      // NEW - Flag emoji
}

// Mock data with flags - will be replaced with real Google Sheets data
const mockReactions: Reaction[] = [
  {
    timestamp: "2024-11-25T10:30:00",
    name: "Temmy",
    energyType: "Vibe Alchemist",
    rating: 5,
    comment: "This quiz really captured my essence! I'm definitely a Vibe Alchemist 🔥",
    country: "Nigeria",
    flag: "🇳🇬"
  },
  {
    timestamp: "2024-11-25T09:15:00",
    name: "Sarah",
    energyType: "Soul Voyager",
    rating: 5,
    comment: "Absolutely spot on! The Soul Voyager description gave me chills.",
    country: "United States",
    flag: "🇺🇸"
  },
  {
    timestamp: "2024-11-25T08:45:00",
    name: "Marco",
    energyType: "Dream Architect",
    rating: 4,
    comment: "Really interesting quiz! Loved the personalized result card.",
    country: "Italy",
    flag: "🇮🇹"
  },
  {
    timestamp: "2024-11-24T22:30:00",
    name: "Amara",
    energyType: "Fire Spirit",
    rating: 5,
    comment: "Fire Spirit is literally me! Can't wait for CelestiFan to launch 🔥✨",
    country: "Kenya",
    flag: "🇰🇪"
  },
  {
    timestamp: "2024-11-24T20:10:00",
    name: "James",
    energyType: "Flow Seeker",
    rating: 5,
    comment: "This platform is gonna be huge. Love the concept!",
    country: "United Kingdom",
    flag: "🇬🇧"
  },
  {
    timestamp: "2024-11-24T18:00:00",
    name: "Yuki",
    energyType: "Cosmic Connector",
    rating: 4,
    comment: "Beautiful quiz experience. The music in the background was perfect.",
    country: "Japan",
    flag: "🇯🇵"
  }
];

// Energy type color mapping
const energyColors: Record<string, string> = {
  "Soul Voyager": "from-blue-600 to-purple-600",
  "Vibe Alchemist": "from-orange-500 to-yellow-500",
  "Dream Architect": "from-cyan-500 to-blue-600",
  "Fire Spirit": "from-red-500 to-pink-600",
  "Emotional Healer": "from-purple-600 to-pink-500",
  "Flow Seeker": "from-teal-500 to-green-500",
  "Story Collector": "from-indigo-600 to-purple-700",
  "Cosmic Connector": "from-violet-600 to-fuchsia-600"
};

const BlogReactions = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Emoji Font CSS - ensures flags render properly */}
      <style>{`
        .flag-emoji {
          font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', 'Android Emoji', 'EmojiSymbols', sans-serif;
          font-size: 1.5rem;
          line-height: 1;
          display: inline-block;
        }
      `}</style>

      {/* Header Section */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-b border-primary/20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">
                Community Vibes
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              See what music lovers around the world discovered about their Celesti Energy ✨
            </p>
          </motion.div>
        </div>
      </div>

      {/* Reactions Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockReactions.map((reaction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              {/* User Info with Flag */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2 flex-1 flex-wrap">
                  <span className="font-bold text-lg">{reaction.name}</span>
                  {reaction.flag && (
                    <span 
                      className="flag-emoji" 
                      title={reaction.country}
                      role="img"
                      aria-label={`${reaction.country} flag`}
                    >
                      {reaction.flag}
                    </span>
                  )}
                  {reaction.country && (
                    <span className="text-sm text-muted-foreground">
                      {reaction.country}
                    </span>
                  )}
                </div>
              </div>

              {/* Energy Type Badge */}
              <div className="mb-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${
                    energyColors[reaction.energyType] || "from-primary to-pink-600"
                  }`}
                >
                  {reaction.energyType}
                </span>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < reaction.rating
                        ? "fill-yellow-500 text-yellow-500"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                "{reaction.comment}"
              </p>

              {/* Timestamp */}
              <p className="text-xs text-muted-foreground/60 mt-4">
                {new Date(reaction.timestamp).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                })}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Empty State (show when no reactions) */}
        {mockReactions.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No reactions yet. Be the first to share your Celesti Energy!
            </p>
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want to discover your Celesti Energy?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Take the quiz and join music lovers from around the world 🌍
            </p>
            <a
              href="/"
              className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
            >
              Take the Quiz ✨
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogReactions;