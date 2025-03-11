import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center px-6 md:px-12"
    >
      <RevealOnScroll>
        <div className="text-center z-10 max-w-2xl">
          {/* Main Heading */}
          
          <h1 className="text-6xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-pink-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm Seemin Khan
          </h1>

          {/* Subtext */}
          <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
          A passionate full-stack developer focused on creating scalable, intuitive, and high-performance web experiences.
          </p>

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-800 to-pink-700 text-white py-3 px-6 md:px-8 rounded font-medium transition duration-300 
                hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-white bg-gradient-to-r from-blue-600 to-pink-400 bg-clip-text text-transparent py-3 px-6 md:px-8 rounded font-medium transition duration-300
              hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
