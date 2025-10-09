import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const scrollToWaitlist = () => {
    const section = document.getElementById("waitlist"); // lowercase id for safety
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image
          src="/Celestifan logo.PNG"
          alt="CelestiFan logo"
          width={130}
          height={50}
          priority
        />
      </div>

      {/* Button */}
      <button className={styles.joinButton} onClick={scrollToWaitlist}>
        Join the Waitlist
      </button>
    </header>
  );
}
