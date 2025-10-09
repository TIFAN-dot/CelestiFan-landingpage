import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <div className={styles.heroTitleRow}>
          <h1 className={styles.heroTitle}>
            Empowering Artists. <br /> Elevating Fans.
          </h1>
        </div>
        <div className={styles.heroSubtitleRow}>
          <p className={styles.heroSubtitle}>
            Experience a new way for artists and their most devoted fans to connect and grow together
          </p>
        </div>
      </div>
      <div className={styles.heroButtonRow}>
        <button className={styles.heroButton}>
          JOIN OUR COMMUNITY
        </button>
      </div>
    </section>
  );
}