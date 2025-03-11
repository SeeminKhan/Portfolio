import { RevealOnScroll } from "../RevealOnScroll";
import PasswordImg from "../../assets/password.png";
import codeCriticImg from "../../assets/image.png";
import fashionForgeImg from "../../assets/fashion.png";
import knottrImg from "../../assets/knottr.png";

export const Projects = () => {
  const projects = [
    {
      title: "Password Generator",
      description:"Built a responsive password generator with React, offering length customization, number/character toggles, clipboard copying, and smooth animations using Framer Motion",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      image: PasswordImg,
      link: "https://password-generator-gamma-eight-16.vercel.app/",
    },
    {
      title: "Code Critic",
      description:
        "Built an AI-powered code review tool with syntax highlighting, multi-language support, and AI-driven feedback using the Gemini API.",
      techStack: ["React", "Tailwind CSS", "Express.js", "Node.js", "Gemini AI API"],
      image: codeCriticImg,
      link: "https://code-critic-frontend.onrender.com/",
    },
    {
      title: "Fashion Forge",
      description:
        "Developed an e-commerce site for a designer with an Admin panel, WhatsApp support, appointment booking, and a 'Customize Your Design' tool that generates custom dress previews from text descriptions.",
      techStack: ["React", "Tailwind CSS", "RTK", "Express.js", "MongoDB"],
      image: fashionForgeImg,
      link: "https://fashion-forge.onrender.com/",
    },
    {
      title: "Knottr",
      description:
        "Created a social media platform like Threads using Next.js and TypeScript, featuring user authentication via Clerk, post creation, and real-time updates.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk"],
      image: knottrImg,
      link: "https://knottr.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-pink-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl border border-white/40 hover:-translate-y-1 hover:border-blue-200/50 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-50 object-fit rounded-lg mb-4"
                />
                <h3 className=" text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, key) => (
                    <span
                      key={key}
                      className="border-1 border-white/30 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    className="text-white hover:text-blue-300 transition-colors my-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
