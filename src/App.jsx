import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [pageHeight, setPageHeight] = useState(window.innerHeight); // Default height
  const containerRef = useRef(null);

  // Update height dynamically based on content
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setPageHeight(containerRef.current.scrollHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const stars = Array.from({ length: 300 }); // Increased number of stars

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        ref={containerRef}
        className={`relative transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100 overflow-hidden`}
      >
        {/* Starry Background */}
        <div
          className="absolute top-0 left-0 w-full pointer-events-none"
          style={{ height: `${pageHeight}px` }}
        >
          {stars.map((_, i) => {
            const size = Math.random() * 3 + 1; // Star size between 1px and 4px
            const duration = Math.random() * 8 + 2; // Duration between 2s and 10s
            const delay = Math.random() * 4; // Delay between 0s and 4s
            const xStart = Math.random() * 100;
            const yStart = Math.random() * 100;
            const twinkleDuration = Math.random() * 1 + 0.5;

            return (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${(yStart / 100) * pageHeight}px`,
                  left: `${xStart}vw`,
                  opacity: Math.random() * 0.8 + 0.2,
                  boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, 0.8)`, // Glow effect
                }}
                animate={{
                  y: ["0vh", "5vh", "0vh"], // Vertical drift
                  x: ["0vw", `${Math.random() * 2 - 1}vw`, "0vw"], // Horizontal drift
                  opacity: [0.2, 0.8, 0.2], // Twinkling effect
                  scale: [1, 1.5, 1], // Shimmer effect
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay,
                  opacity: {
                    duration: twinkleDuration,
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                  scale: {
                    duration: twinkleDuration,
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                }}
              />
            );
          })}
        </div>

        {/* Main Content */}
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
