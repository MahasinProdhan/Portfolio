import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import toast from "react-hot-toast";
import { sendContactForm } from "../utils/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      await sendContactForm(formData);

      toast.success("Message sent successfully 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Failed to send message ❌ Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-bg">
      {/* Background blur */}
      <div className="absolute top-32 left-1/4 w-[420px] h-[420px] bg-primary/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-32 right-1/4 w-[360px] h-[360px] bg-secondary/15 blur-[100px] rounded-full" />

      <div className="relative px-6 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-extrabold md:text-5xl text-textPrimary">
            Contact Me
          </h2>
          <p className="mt-4 text-lg text-textSecondary">
            Have a project, opportunity, or question? Let’s connect and discuss.
          </p>
        </div>

        <div className="grid items-start gap-20 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <p className="max-w-xl text-lg leading-relaxed text-textSecondary">
              I’m open to full-stack development opportunities, internships, and
              collaborative projects. Whether you want to build something new or
              discuss an idea, feel free to reach out.
            </p>

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
          <div className="p-8 border rounded-3xl bg-white/95 backdrop-blur border-border shadow-soft lg:-mt-24">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1.5 text-sm font-medium text-textPrimary">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-xl border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <div>
                <label className="block mb-1.5 text-sm font-medium text-textPrimary">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border rounded-xl border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <div>
                <label className="block mb-1.5 text-sm font-medium text-textPrimary">
                  Message
                </label>
                <textarea
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border resize-none rounded-xl border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-2xl bg-primary-gradient text-white font-semibold shadow-soft hover:shadow-xl transition-all duration-300 disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
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
