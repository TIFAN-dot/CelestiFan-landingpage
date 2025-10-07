import Image from "next/image";

export default function Header() {
  const scrollToWaitlist = () => {
    const section = document.getElementById("Waitlist");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "3.5rem",
        margin: "2rem auto",
        maxWidth: "1200px",
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
      }}
    >
      {/* ✅ Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/Celestifan logo.PNG"
          alt="CelestiFan logo"
          width={130}
          height={50}
          priority
        />
      </div>

      {/* ✅ Smooth Scroll Button */}
      <button
        onClick={scrollToWaitlist}
        style={{
          background: "#1A147F",
          color: "#fff",
          border: "none",
          borderRadius: "999px",
          padding: "0.75rem 2rem",
          fontWeight: "bold",
          fontSize: "1rem",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(26,20,127,0.08)",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1.0)")}
      >
        Join the Waitlist
      </button>
    </header>
  );
}
