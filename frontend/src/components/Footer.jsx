import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Top separator line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Background */}
      <div className="relative bg-gradient-to-b from-bg to-primary/5">
        {/* Softer, smaller glows */}
        <div className="absolute left-1/3 bottom-0 w-[260px] h-[260px] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute right-1/4 top-0 w-[220px] h-[220px] bg-secondary/20 blur-[100px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-textPrimary">
                Mahasin Prodhan
              </h3>
              <p className="mt-1 text-sm text-textSecondary">
                Full-Stack Developer (MERN) & Data Analytics
              </p>
            </div>

            {/* Socials */}
            <div className="flex justify-center gap-4">
              {[
                { icon: <FaGithub />, link: "https://github.com/yourusername" },
                {
                  icon: <FaLinkedin />,
                  link: "https://linkedin.com/in/yourusername",
                },
                { icon: <FaXTwitter />, link: "https://x.com/MahasinProdhan1" },
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/mahasin_prodhan",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg
                             bg-white/80 backdrop-blur
                             border border-border
                             text-textSecondary
                             hover:text-primary hover:border-primary/40
                             transition-all duration-300"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right text-xs text-textSecondary">
              © {new Date().getFullYear()} Mahasin Prodhan
              <div className="mt-1 opacity-70">Designed & Built with care</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
