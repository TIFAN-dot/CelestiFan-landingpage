import { useState } from "react";
import styles from "./Waitlist.module.css";

export default function Waitlist() {
  const [status, setStatus] = useState(""); // to show success message

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // ✅ Your Google Form URL (make sure it ends with /formResponse)
    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSdkEfDZhzBJKPi75NE0H40gAM6zCv8HAiR8Vvy0o0AVRYcg2g/formResponse";

    // ✅ The entry IDs you found for Name and Email
    const formData = new FormData();
    formData.append("entry.393353337", form.name.value);   // Name field
    formData.append("entry.1786889880", form.email.value); // Email field

    fetch(googleFormURL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        setStatus("✅ You’ve joined the CelestiFan Waitlist! 🎶");
        form.reset();
        setTimeout(() => setStatus(""), 5000); // fade out message after 5s
      })
      .catch((err) => {
        console.error("❌ Submission error:", err);
        setStatus("Something went wrong. Please try again!");
      });
  };

  return (
    <section className={styles.waitlistSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          The next wave of music power is in your hands
        </h2>
        <p className={styles.subtitle}>
          We’re building CelestiFan with artists, fans, and innovators who
          believe in something bigger.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Join 53,000+ CelestiFans
          </button>
        </form>

        {status && <p className={styles.successMessage}>{status}</p>}
      </div>
    </section>
  );
}
