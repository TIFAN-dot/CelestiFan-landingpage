export default function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(to left, #111145, #1A147F)",
      color: "#fff",
      padding: "40px 60px",
      borderRadius: "0px 0px 0 0"
    }}>
      <div style={{ marginBottom: "40px" }}>
        <img src="/Celestifan logo.PNG" alt="CelestiFan" width="100" />
        <p style={{ marginTop: "10px" }}>Built for Artists.<br />Powered by Fans.</p>
      </div>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(245, 245, 245, 0.2)",
        borderRadius: "18px",
        padding: "12px 24px"
      }}>
        <p>© 2025 CelestiFan</p>
        <div style={{ display: "flex", gap: "15px" }}>
          {/* Instagram SVG */}
          <a href="#" style={iconStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22" height="22" fill="none" stroke="white" strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          {/* X / Twitter SVG */}
          <a href="#" style={iconStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22" height="22" fill="white" viewBox="0 0 24 24"
            >
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.59 8.59 0 0 1-2.72 1.05A4.24 4.24 0 0 0 16.1 4c-2.34 0-4.23 1.9-4.23 4.24 0 .33.04.65.11.96-3.52-.18-6.64-1.86-8.73-4.42a4.22 4.22 0 0 0-.57 2.13 4.24 4.24 0 0 0 1.88 3.53 4.18 4.18 0 0 1-1.92-.53v.05c0 2 1.42 3.67 3.3 4.05a4.2 4.2 0 0 1-1.91.07c.54 1.7 2.1 2.95 3.96 2.99A8.5 8.5 0 0 1 2 19.55 12 12 0 0 0 8.29 21c7.55 0 11.68-6.25 11.68-11.68 0-.18 0-.35-.01-.53A8.3 8.3 0 0 0 22.46 6z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

const iconStyle = {
  background: "rgba(217, 217, 217, 0.2)",
  borderRadius: "50%",
  width: "46px",
  height: "46px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.3s ease"
};
