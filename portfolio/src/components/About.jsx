import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { Engine } from "tsparticles-engine"; // Correct import path
import avater from "./assets/avater.avif"; 
const HomeSection = () => {
  const particlesInit = useCallback(async (engine) => {
    // No need for loadSlim in newer versions
    await Promise.resolve(engine); // Just to maintain async pattern
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-between px-10 pt-20 relative overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" }
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 100, duration: 0.4 }
            }
          },
          particles: {
            color: { value: "#6366f1" },
            links: {
              color: "#3b82f6",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            collisions: { enable: true },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 2,
              straight: false
            },
            number: {
              density: { enable: true, area: 800 },
              value: 80
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } }
          },
          detectRetina: true
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Rest of your component remains exactly the same */}
      <div className="relative w-full">
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi There,<br/> I'm Sandeep <span className="text-purple-700">Kr. Yadav</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            I am into <span className="text-blue-600">Full Stack Development</span>
          </p>
          <a href="#about" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <span>About Me</span>
            <i className="fas fa-arrow-circle-down ml-2"></i>
          </a>
          
          <div className="mt-8">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-blue-600 text-2xl hover:text-blue-800" target="_blank"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="https://github.com" className="text-gray-800 text-2xl hover:text-black" target="_blank"><i className="fab fa-github"></i></a></li>
              <li><a href="https://twitter.com" className="text-blue-400 text-2xl hover:text-blue-600" target="_blank"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://telegram.com" className="text-blue-500 text-2xl hover:text-blue-700" target="_blank"><i className="fab fa-telegram-plane"></i></a></li>
              <li><a href="https://instagram.com" className="text-pink-600 text-2xl hover:text-pink-800" target="_blank"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://dev.to" className="text-black text-2xl hover:text-gray-800" target="_blank"><i className="fab fa-dev"></i></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative z-10">
        <img src={avater} alt="Hero" className="w-96" />
      </div>
    </section>
  );
};

export default HomeSection;