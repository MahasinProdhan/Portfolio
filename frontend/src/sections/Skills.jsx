import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 bg-bg overflow-hidden">
      {/* Background glows — same system as Hero & About */}
      <div className="absolute top-20 left-1/4 w-[420px] h-[420px] bg-primary/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-1/4 w-[360px] h-[360px] bg-secondary/15 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-textPrimary">
            Skills
          </h2>
          <p className="mt-5 text-lg text-textSecondary">
            Technologies, tools, and fundamentals I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend */}
          <SkillCard
            title="Frontend"
            skills={[
              "React",
              "JavaScript (ES6+)",
              "HTML5",
              "CSS3",
              "Tailwind CSS",
            ]}
          />

          {/* Backend */}
          <SkillCard
            title="Backend"
            skills={[
              "Node.js",
              "Express.js",
              "REST APIs",
              "Authentication & Authorization",
            ]}
          />

          {/* Database */}
          <SkillCard
            title="Database"
            skills={["MongoDB", "SQL", "Schema Design", "CRUD Operations"]}
          />

          {/* Data Analytics */}
          <SkillCard
            title="Data Analytics"
            skills={["Python", "Pandas", "NumPy", "SQL", "Power BI", "Excel"]}
          />

          {/* CS Fundamentals */}
          <SkillCard
            title="CS Fundamentals"
            skills={[
              "Data Structures",
              "Algorithms",
              "OOP Concepts",
              "DBMS",
              "Operating Systems",
              "Computer Networks",
            ]}
          />

          {/* Tools & Platforms */}
          <SkillCard
            title="Tools & Platforms"
            skills={["Git", "GitHub", "Figma", "Postman", "Render", "Vercel"]}
          />
        </div>
      </div>
    </section>
  );
};

/* 🔹 Reusable Skill Card */
const SkillCard = ({ title, skills }) => {
  return (
    <div
      className="relative p-7 rounded-2xl
                 bg-white/90 backdrop-blur-xl
                 border border-border
                 shadow-soft
                 transition-all duration-300
                 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Soft hover glow (balanced, not sharp) */}
      <div className="absolute inset-0 rounded-2xl bg-primary/10 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />

      <h3 className="text-lg font-semibold text-textPrimary mb-5">{title}</h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-4 py-1.5 text-sm font-medium
                       rounded-full
                       bg-primary/10 text-primary
                       border border-primary/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
