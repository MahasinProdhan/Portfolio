import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import profileImg from "../assets/images/mahasindp.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg py-20"
    >
      {/* Soft Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/20 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border mb-6 shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-textSecondary uppercase tracking-widest">
              Open to opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-textPrimary leading-[1.1]">
            Building Digital <br />
            <span className="bg-primary-gradient bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>

          <h2 className="mt-6 text-xl md:text-2xl font-semibold text-textSecondary">
            Mahasin Prodhan — Full-Stack Developer (MERN) & Data Analytics
          </h2>

          <p className="mt-8 text-lg text-textSecondary max-w-2xl leading-relaxed mx-auto lg:mx-0">
            I design and develop scalable full-stack web applications using the
            MERN stack, focusing on clean architecture, performance, and
            data-driven problem solving.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-5">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-4 rounded-2xl
                         text-white font-semibold bg-primary-gradient
                         shadow-soft hover:shadow-xl
                         transition-all duration-300 hover:-translate-y-1"
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/Mahasin_Prodhan_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl border border-primary
                         text-primary font-semibold bg-white
                         hover:bg-primary hover:text-white
                         transition-all duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-6">
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
                className="p-3 rounded-xl bg-white border border-border text-textSecondary
                           hover:text-primary hover:border-primary/40
                           transition-all duration-300"
              >
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative group">
            {/* Glow Frame */}
            <div className="absolute -inset-4 bg-primary-gradient rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-35 transition-opacity duration-500" />

            <div className="relative p-3 bg-white backdrop-blur-xl border border-border rounded-[2.5rem] shadow-xl">
              <img
                src={profileImg}
                alt="Mahasin Prodhan"
                className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-[2rem]
                           grayscale hover:grayscale-0 transition-all duration-700"
              />

              {/* 🔥 Eye-catching MERN Badge (Option 1) */}
              <div
                className="absolute -bottom-5 -left-5 md:-left-10
                           flex items-center gap-2
                           px-5 py-2.5
                           rounded-full
                           bg-primary-gradient
                           text-white text-xs font-bold tracking-wide
                           shadow-lg
                           ring-1 ring-primary/40"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                MERN • Project-Driven
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
