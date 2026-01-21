import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 bg-bg overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-32 left-1/4 w-[420px] h-[420px] bg-primary/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-32 right-1/4 w-[360px] h-[360px] bg-secondary/15 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-textPrimary">
            Contact Me
          </h2>
          <p className="mt-4 text-lg text-textSecondary">
            Have a project, opportunity, or question? Let’s connect and discuss.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <p className="text-textSecondary text-lg leading-relaxed max-w-xl">
              I’m open to full-stack development opportunities, internships, and
              collaborative projects. Whether you want to build something new or
              discuss an idea, feel free to reach out.
            </p>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-sm text-textSecondary">Email</p>
                <p className="font-semibold text-textPrimary">
                  mahasinprodhan2@gmail.com
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/mahasinprodhan",
                },
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
                  className="p-4 rounded-xl bg-white/90 backdrop-blur
                             border border-border text-textSecondary
                             hover:text-primary hover:border-primary/40
                             transition-all"
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          {/* RIGHT SIDE — FORM */}
          <div className="p-8 rounded-3xl bg-white/95 backdrop-blur border border-border shadow-soft lg:-mt-24">
            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-textPrimary mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-border
                   focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-textPrimary mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl border border-border
                   focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-textPrimary mb-1.5">
                  Message
                </label>
                <textarea
                  rows="3"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-xl border border-border
                   focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-primary-gradient
                 text-white font-semibold shadow-soft
                 hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </button>

              <p className="text-center text-sm text-textSecondary pt-1">
                I usually reply within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
