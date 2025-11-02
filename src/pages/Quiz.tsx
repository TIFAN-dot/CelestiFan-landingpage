import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import CelestiQuiz from "@/components/CelestiQuiz";
import { Sparkles } from "lucide-react";

const Quiz = () => {
  const quizUrl = "https://celestifan.com/quiz";
  const quizImage = "https://celestifan.com/quiz-preview.png";
  
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>What's Your Celesti Energy? - CelestiFan Quiz</title>
        <meta name="title" content="What's Your Celesti Energy? - CelestiFan Quiz" />
        <meta 
          name="description" 
          content="Take our cosmic quiz and discover the unique energy that defines your music journey. Are you a Sonic Warrior, Rhythm Maven, or Vibe Curator?" 
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={quizUrl} />
        <meta property="og:title" content="What's Your Celesti Energy? - CelestiFan Quiz" />
        <meta 
          property="og:description" 
          content="Take our cosmic quiz and discover the unique energy that defines your music journey. Are you a Sonic Warrior, Rhythm Maven, or Vibe Curator?" 
        />
        <meta property="og:image" content={quizImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={quizUrl} />
        <meta property="twitter:title" content="What's Your Celesti Energy? - CelestiFan Quiz" />
        <meta 
          property="twitter:description" 
          content="Take our cosmic quiz and discover the unique energy that defines your music journey. Are you a Sonic Warrior, Rhythm Maven, or Vibe Curator?" 
        />
        <meta property="twitter:image" content={quizImage} />
      </Helmet>

      <motion.div
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10 min-h-screen flex items-center"
        >
          <div className="container mx-auto px-4 text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-gradient">
              What's Your Celesti Energy?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take our cosmic quiz and discover the unique energy that defines your music journey
            </p>
            <CelestiQuiz />
          </div>
        </motion.section>
      </motion.div>
    </>
  );
};

export default Quiz;