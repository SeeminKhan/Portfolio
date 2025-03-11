import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-screen-lg mx-auto px-4">
          {/* About Me Section */}
          <div className="text-5xl font-bold mb-5 bg-gradient-to-r from-blue-600 to-pink-400 bg-clip-text text-transparent text-center">
            About Me
          </div>

          <div className="rounded-xl p-8 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-xl">
            I build scalable, user-friendly web apps — clean code, modern design, and smooth performance.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Education Section */}
              <div className="p-6 rounded-xl border-white/30 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-bold">Bachelors in Computer Engneering (2022 - 2026)</h4>
                    <p className="text-gray-400">Rizvi College of Engineering, Mumbai</p>
                  </div>

                  <div>
                    <h4 className="font-bold">Higher Secondary Certificate (2020-2022)</h4>
                    <p className="text-gray-400">Shri T. P. Bhatia College of Science, Mumbai</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Secondary School Certificate (2019-2020)</h4>
                    <p className="text-gray-400">St. Paul’s High School, Mumbai</p>
                  </div>
                </div>
              </div>

              {/* Work Experience Section */}
              <div className="p-6 rounded-xl border-white/30 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">💼 Internship</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">Full Stack Developer at Meta Craftlab  (June-July'2024)</h4>
                    <p className="text-gray-400">Completed a three-week self-paced program on GitHub, Svelte, and SvelteKit, building projects like a notes app and Instagram clone. Worked with a team on a Svelte project under expert mentorship for an additional three weeks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
