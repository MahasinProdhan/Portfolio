const Education = () => {
  return (
    <section id="education" className="relative py-28 bg-bg overflow-hidden">
      {/* Soft background glows */}
      <div className="absolute top-16 left-1/4 w-[360px] h-[360px] bg-primary/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-16 right-1/4 w-[300px] h-[300px] bg-secondary/15 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-textPrimary">
            Education
          </h2>
          <p className="mt-5 text-lg text-textSecondary">
            Academic background and qualifications
          </p>
        </div>

        <div className="space-y-10">
          {/* B.Tech — Full Width */}
          <div className="p-7 rounded-2xl bg-white/90 backdrop-blur-xl border border-border shadow-soft">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              {/* Left */}
              <div>
                <p className="text-lg font-semibold text-textPrimary">
                  Meghnad Saha Institute of Technology
                </p>
                <p className="text-textSecondary">
                  B.Tech in Computer Science & Business Systems | CGPA – 6.9
                </p>
              </div>

              {/* Right */}
              <div className="text-sm text-textSecondary md:text-right">
                <p>Oct 2022 – June 2026</p>
                <p>Kolkata, India</p>
              </div>
            </div>
          </div>

          {/* Lower Education */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Higher Secondary */}
            <div className="p-7 rounded-2xl bg-white/90 backdrop-blur-xl border border-border shadow-soft">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-textPrimary">
                    Dhatigram High School
                  </p>
                  <p className="text-textSecondary">
                    Higher Secondary (WBCHSE) | Percentage – 90
                  </p>
                </div>

                <div className="text-sm text-textSecondary sm:text-right">
                  <p>2021 – 2022</p>
                  <p>Purba Bardhaman, India</p>
                </div>
              </div>
            </div>

            {/* Secondary */}
            <div className="p-7 rounded-2xl bg-white/90 backdrop-blur-xl border border-border shadow-soft">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-textPrimary">
                    Dhatigram High School
                  </p>
                  <p className="text-textSecondary">
                    Secondary (WBBSE) | Percentage – 72
                  </p>
                </div>

                <div className="text-sm text-textSecondary sm:text-right">
                  <p>2019 – 2020</p>
                  <p>Purba Bardhaman, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
