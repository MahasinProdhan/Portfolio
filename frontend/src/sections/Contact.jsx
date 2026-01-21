import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-bg">
      {/* Background glow */}
      <div className="absolute top-32 left-1/4 w-[420px] h-[420px] bg-primary/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-32 right-1/4 w-[360px] h-[360px] bg-secondary/15 blur-[100px] rounded-full" />

      <div className="relative px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-extrabold md:text-5xl text-textPrimary">
            Contact Me
          </h2>
          <p className="mt-4 text-lg text-textSecondary">
            Have a project, opportunity, or question? Let’s connect and discuss.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid items-start gap-20 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <p className="max-w-xl text-lg leading-relaxed text-textSecondary">
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
                  link: "https://github.com/MahasinProdhan",
                },
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
                  className="p-4 transition-all border rounded-xl bg-white/90 backdrop-blur border-border text-textSecondary hover:text-primary hover:border-primary/40"
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          {/* RIGHT SIDE — FORM */}
          <div className="p-8 border rounded-3xl bg-white/95 backdrop-blur border-border shadow-soft lg:-mt-24">
            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-textPrimary mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-xl border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
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
                  className="w-full px-4 py-3 border rounded-xl border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
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
                  className="w-full px-4 py-3 border resize-none rounded-xl border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
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

              <p className="pt-1 text-sm text-center text-textSecondary">
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
