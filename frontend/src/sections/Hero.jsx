import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import profileImg from "../assets/images/mahasindp.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen py-20 overflow-hidden bg-bg"
    >
      {/* Soft Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/20 blur-[100px] rounded-full" />

      <div className="relative grid items-center px-6 mx-auto max-w-7xl lg:grid-cols-2 gap-14">
        {/* LEFT CONTENT */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border mb-6 shadow-soft">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full animate-ping opacity-60"></span>
              <span className="relative inline-flex w-2 h-2 bg-green-500 rounded-full"></span>
            </span>
            <span className="text-xs font-medium tracking-widest uppercase text-textSecondary">
              Open to opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-textPrimary leading-[1.1]">
            Building Digital <br />
            <span className="text-transparent bg-primary-gradient bg-clip-text">
              Experiences
            </span>
          </h1>

          <h2 className="mt-6 text-xl font-semibold md:text-2xl text-textSecondary">
            Mahasin Prodhan — Full-Stack Developer (MERN) & Data Analytics
          </h2>

          <p className="max-w-2xl mx-auto mt-8 text-lg leading-relaxed text-textSecondary lg:mx-0">
            I design and develop scalable full-stack web applications using the
            MERN stack, focusing on clean architecture, performance, and
            data-driven problem solving.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-5 mt-10 lg:justify-start">
            <a
              href="#projects"
              className="flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 group rounded-2xl bg-primary-gradient shadow-soft hover:shadow-xl hover:-translate-y-1"
            >
              View Projects
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/Mahasin_Prodhan_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 font-semibold transition-all duration-300 bg-white border rounded-2xl border-primary text-primary hover:bg-primary hover:text-white"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 mt-12 lg:justify-start">
            {[
              { icon: <FaGithub />, link: "https://github.com/MahasinProdhan" },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/mahasin-prodhan-b19387277/",
              },
              { icon: <FaXTwitter />, link: "https://x.com/MahasinProdhan1" },
              {
                icon: <FaFacebook />,
                link: "https://www.facebook.com/mahasin.prodhan2004",
              },
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
                className="p-3 transition-all duration-300 bg-white border rounded-xl border-border text-textSecondary hover:text-primary hover:border-primary/40"
              >
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center order-1 lg:order-2">
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
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
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
