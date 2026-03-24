import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export type AmbassadorUserType = "artist" | "fan";

export interface AmbassadorProgramProps {
  onBecomeAmbassador: (userType: AmbassadorUserType) => void;
}

const tiers: {
  title: string;
  qualifier: string;
  badgeName: string;
  badgeNote: string;
  benefits: string[];
  highlighted: boolean;
  waitlistType: AmbassadorUserType;
}[] = [
  {
    title: "Fan Ambassador",
    qualifier: "Refer 5 people to CelestiFan",
    badgeName: "Founding Fan",
    badgeNote: "Permanent",
    benefits: [
      "Free platform access — 6 months",
      "Permanent Founding Fan verified badge",
      "Your name on the CelestiFan Founding Wall",
      "Double Celeste earnings for 6 months",
      "First access to every new feature before public release",
      "Direct feedback line to the CelestiFan team",
    ],
    highlighted: false,
    waitlistType: "fan",
  },
  {
    title: "Elite Fan Ambassador",
    qualifier: "Refer 10 people to CelestiFan",
    badgeName: "OG",
    badgeNote: "Rarest tier, never available after launch",
    benefits: [
      "Free platform access — 8 months",
      "Permanent OG status badge — never available again after launch",
      "Everything in Fan Ambassador tier",
      "Official shoutout from CelestiFan social accounts",
      "Invited to closed product feedback sessions",
      "First campaign on the platform dedicated to an artist of your choice",
    ],
    highlighted: true,
    waitlistType: "fan",
  },
  {
    title: "Founding Artist Ambassador",
    qualifier: "Refer 5 fans or artists to CelestiFan",
    badgeName: "Founding Artist",
    badgeNote: "Permanent",
    benefits: [
      "Free Pro access — 8 months",
      "Permanent Founding Artist verified badge",
      "First campaign personally set up by the CelestiFan team",
      "Featured in CelestiFan's official launch content and social",
      "Priority support for first 6 months",
      "Direct input on features that matter most to artists",
    ],
    highlighted: false,
    waitlistType: "artist",
  },
];

const AmbassadorProgram = ({ onBecomeAmbassador }: AmbassadorProgramProps) => {
  return (
    <motion.section
      id="ambassador-program"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true, margin: "-80px" }}
      className="bg-card border-y border-border/60 py-16 md:py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <h2
            className="font-display font-bold text-gradient mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}
          >
            You believed before the world did. We don&apos;t forget that.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            The CelestiFan Ambassador Program — for the fans and artists who showed up first.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Before CelestiFan opens to the world, we&apos;re giving something permanent to the people
            already here. This is not a promotion. This is history. The Founding Circle closes the
            moment we launch publicly — after that, these badges and this status are gone forever.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto md:items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card
                className={`p-8 bg-card border-2 transition-all flex flex-col w-full ${
                  tier.highlighted
                    ? "border-primary md:scale-105 shadow-2xl shadow-primary/20 z-10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {tier.highlighted ? (
                  <div className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4 self-start">
                    Featured
                  </div>
                ) : (
                  <div className="mb-4 self-start invisible select-none pointer-events-none" aria-hidden>
                    <div className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full inline-block">
                      Featured
                    </div>
                  </div>
                )}
                <h3 className="text-2xl md:text-3xl font-display mb-2">{tier.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{tier.qualifier}</p>

                <div className="mb-6 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="font-semibold">
                      {tier.badgeName}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{tier.badgeNote}</p>
                </div>

                <div className="space-y-3 flex-1 mb-8">
                  <p className="font-semibold text-sm text-muted-foreground uppercase">Includes:</p>
                  {tier.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className={`w-full mt-auto ${
                    tier.highlighted
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                      : "border-primary text-primary hover:bg-primary/10"
                  }`}
                  variant={tier.highlighted ? "default" : "outline"}
                  onClick={() => onBecomeAmbassador(tier.waitlistType)}
                >
                  Become an Ambassador
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-14 text-muted-foreground text-sm md:text-base font-medium"
        >
          Fan Lives Matter. And you were here first.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AmbassadorProgram;
