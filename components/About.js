import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        
        {/* Title & Subtitle */}
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>What is CelestiFan?</h2>
          <p className={styles.subtext}>
            CelestiFan is where fan love meets music momentum. We’re building a
            community-first music platform that celebrates artist growth by
            spotlighting the fans that make it happen.
          </p>
        </div>

        {/* Features */}
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.icon}>
              <Image
                src="/mockups/Icon 1.png"
                alt="Artist insights"
                width={150}
                height={200}
                className={styles.icon}
              />
            </div>
            <p>Artists get real-time insights on their most loyal listeners</p>
          </div>

          <div className={styles.feature}>
            <div className={styles.icon}>
              <Image
                src="/mockups/Icon 2.png"
                alt="Fan ranking"
                width={150}
                height={200}
                className={styles.icon}
              />
            </div>
            <p>Fans get ranked for every stream, share, and shoutout</p>
          </div>

          <div className={styles.feature}>
            <div className={styles.icon}>
              <Image
                src="/mockups/Icon 3.png"
                alt="Music moments"
                width={150}
                height={200}
                className={styles.icon}
              />
            </div>
            <p>Everyone gets a front row seat to music moments</p>
          </div>
        </div>

        {/* Why Us */}
        <div className={styles.whyUs}>
          <h3>WHY US?</h3>
          <p>
            We’re not just another platform. We’re building a fan-powered world where music feels personal again. Here, your energy counts. Your support builds careers. Your love changes the game.
          </p>
        </div>
      </div>
    </section>
  );
}
