import { RevealOnScroll } from "../RevealOnScroll";
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiFlask, SiDjango, SiCplusplus } from "react-icons/si";

export const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "TypeScript", icon: <FaJs className="text-blue-600" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Flask", icon: <SiFlask className="text-white" /> },
        { name: "Django", icon: <SiDjango className="text-green-700" /> },
      ],
    },
    {
      category: "Databases & Version Control",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <FaGitAlt className="text-gray-300" /> },
      ],
    },
    {
      category: "Languages",
      items: [
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "Python", icon: <FaPython className="text-blue-500" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
        { name: "C", icon: <span className="text-gray-200 text-4xl font-bold">C</span> },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-10 bg-gradient-to-r from-blue-600 to-pink-400 bg-clip-text text-transparent">
            My Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="border border-white/30 rounded-xl p-6 hover:-translate-y-2 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {skill.items.map((item, key) => (
                    <div
                      key={key}
                      className="flex flex-col items-center space-y-2 px-4 py-2 rounded-lg hover:bg-gray-800 transition-all"
                    >
                      <div className="text-4xl">{item.icon}</div>
                      <span className="text-white text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
