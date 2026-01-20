import React from "react";

const About = () => {
  return (
    <section id="about" className="relative py-32 bg-bg overflow-hidden">
      {/* Background Glows — same rhythm as Hero */}
      <div className="absolute top-10 left-1/3 w-[420px] h-[420px] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[360px] h-[360px] bg-secondary/20 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header — hierarchy matches Hero */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
            About Me
          </h2>
          <p className="mt-5 text-lg text-textSecondary">
            What I build, explore, and continuously improve
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT — Text (light, breathable, not boxed) */}
          <div className="text-textSecondary text-lg leading-relaxed space-y-7">
            <p>
              I’m{" "}
              <span className="text-textPrimary font-semibold">
                Mahasin Prodhan
              </span>
              , a final-year B.Tech Computer Science student with hands-on
              experience in full-stack development using the MERN stack.
            </p>

            <p>
              I enjoy building scalable, role-based web applications with clean
              architecture, efficient backend logic, and intuitive user
              interfaces. My projects involve authentication systems, REST APIs,
              dashboards, and database-driven workflows.
            </p>

            <p>
              Alongside development, I’m exploring data analytics to work with
              structured data and derive insights that support better technical
              and product decisions.
            </p>
          </div>

          {/* RIGHT — Glass Cards (same surface language as Hero) */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Full-Stack Development",
                desc: "MERN stack, REST APIs, authentication, dashboards",
              },
              {
                title: "Backend & Databases",
                desc: "Node.js, Express, MongoDB, SQL",
              },
              {
                title: "Data Analytics",
                desc: "Python, Pandas, NumPy (foundational)",
              },
              {
                title: "Tools & Deployment",
                desc: "Git, GitHub, Vercel",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl
                           bg-white/90 backdrop-blur-xl
                           border border-border
                           shadow-soft
                           transition-all duration-300
                           hover:shadow-xl hover:-translate-y-1"
              >
                <h3 className="font-semibold text-textPrimary mb-2">
                  {item.title}
                </h3>
                <p className="text-textSecondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
