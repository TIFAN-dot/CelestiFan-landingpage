import styles from "./WhyUs.module.css";

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>

        {/* Card 1 */}
        <div className={styles.card}>
          <div className={styles.text}>
            <h3>Create Campaigns</h3>
            <p>
              Artists set the stage, fans bring the fire. Launch challenges that
              turn streams, shares, and merch love into momentum.
            </p>
          </div>
          <div className={styles.phoneMockup}>
            <img src="/mockups/campaign.png.png" alt="Create Campaigns" />
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <div className={styles.text}>
            <h3>Submit Proof</h3>
            <p>
              Receipts or it didn’t happen 😎 Fans drop screenshots to show
              support, every action fuels their rank.
            </p>
          </div>
          <div className={styles.phoneMockup}>
            <img src="/mockups/proof.png.png" alt="Submit Proof" />
          </div>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <div className={styles.text}>
            <h3>Fan Recognition</h3>
            <p>
              Spotlight your biggest supporters with leaderboards that celebrate
              streams, shares, and loyalty.
            </p>
          </div>
          <div className={styles.phoneMockup}>
            <img src="/mockups/fan.png.png" alt="Fan Recognition" />
          </div>
        </div>

        {/* Card 4 */}
        <div className={styles.card}>
          <div className={styles.text}>
            <h3>Direct Artist–Fan Contact</h3>
            <p>
              Go beyond numbers. Artists can truly see and engage with the fans
              who fuel their journey.
            </p>
          </div>
          <div className={styles.phoneMockup}>
            <img src="/mockups/contact.png.png" alt="Direct Artist-Fan Contact" />
          </div>
        </div>

      </div>
    </section>
  );
}
