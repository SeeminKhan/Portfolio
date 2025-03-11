import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formsubmit.co/eba3807eaba8649945917e52a65245ee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.ok && alert("Message Sent!"))
      .catch(() => alert("Oops! Something went wrong. Please try again."));

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6 border-white/30">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-pink-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              className="w-full bg-white/5 border border-white/30 rounded px-4 py-3 text-white focus:outline-none focus:border-white focus:bg-blue-500/5"
              placeholder="Name..."
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              className="w-full bg-white/5 border border-white/30 rounded px-4 py-3 text-white focus:outline-none focus:border-white focus:bg-blue-500/5"
              placeholder="example@gmail.com"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              className="w-full bg-white/5 border border-white/30 rounded px-4 py-3 text-white focus:outline-none focus:border-white focus:bg-blue-500/5"
              placeholder="Your Message..."
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-800 to-pink-700 text-white py-3 px-6 rounded font-medium hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://github.com/SeeminKhan/" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl text-gray-300 hover:text-white transition" />
            </a>
            <a href="https://www.linkedin.com/in/seemin-khan-a991bb2b1/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-blue-400 hover:text-white transition" />
            </a>
            <a href="mailto:seeminkhan2708@gmail.com">
              <FaEnvelope className="text-3xl text-red-400 hover:text-white transition" />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};