import { Link } from "react-router-dom";
import { Music2, Twitter, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Platform",
      links: [
        { name: "About", path: "/about" },
        { name: "Features", path: "/features" },
        { name: "Pricing", path: "/pricing" },
        { name: "Blog", path: "/blog" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Connect", path: "/connect" },
        { name: "FAQ", path: "/connect#faq" },
        { name: "Privacy", path: "#" },
        { name: "Terms", path: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Fan Guide", path: "#" },
        { name: "Artist Guide", path: "#" },
        { name: "API Docs", path: "#" },
        { name: "Community", path: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <Music2 className="h-8 w-8 text-primary group-hover:animate-float" />
              <span className="text-2xl font-display tracking-wider text-gradient">
                CelestiFan
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Empowering artists and elevating fans. Join the music revolution
              where every stream, share, and shoutout counts.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-gradient-neon hover:text-white transition-all hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} CelestiFan. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with 💜 for music lovers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
