import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Top shadow separator (key fix) */}
      <div className="absolute top-0 left-0 z-10 w-full h-8 pointer-events-none bg-gradient-to-b from-black/10 to-transparent" />

      {/* Footer background */}
      <div className="relative bg-gradient-to-b from-bg/90 via-bg/80 to-bg">
        {/* Glows pushed DOWN so they don’t blend upward */}
        <div className="absolute left-1/4 bottom-[-120px] w-[220px] h-[220px] bg-primary/10 blur-[160px] rounded-full" />
        <div className="absolute right-1/4 bottom-[-120px] w-[200px] h-[200px] bg-secondary/10 blur-[160px] rounded-full" />

        <div className="relative px-6 py-12 mx-auto max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-3">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-textPrimary">
                Mahasin Prodhan
              </h3>
              <p className="mt-1 text-sm text-textSecondary">
                Full-Stack Developer (MERN) & Data Analytics
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4">
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/MahasinProdhan",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/mahasin-prodhan-b19387277/",
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
                             bg-white/70 backdrop-blur
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
            <div className="text-xs text-center md:text-right text-textSecondary">
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
