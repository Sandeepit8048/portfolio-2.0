// import { useState } from "react";
import React from "react";
import { FaDownload } from "react-icons/fa6";
import profile from "./assets/1147.jpg";
import resume from "./assets/Resumeit8048.pdf";

export default function App() {
  // const [activeSection, setActiveSection] = useState("About");

  // const navItems = ["About", "Education", "Skills", "Experience", "Contact"];

  // const handleNavClick = (section) => {
  //   setActiveSection(section);
  //   const element = document.getElementById(section.toLowerCase());
  //   element?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* <header className="bg-white shadow-md sticky top-0 z-10">
        <nav className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-blue-600">Protfolio</h1>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleNavClick(item)}
                  className={`hover:text-blue-600 transition-colors duration-200 ${
                    activeSection === item ? "text-blue-600 font-semibold" : "text-gray-700"
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header> */}

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-20">
        {/* About Section */}
        <section id="about" className="flex flex-col md:flex-row items-center gap-10">
          <img src={profile} alt="Profile" className="w-48 h-48 rounded-full object-cover" />
          <div>
            <h2 className="text-3xl font-bold mb-2">Sandeep Kumar Yadav</h2>
            <h3 className="text-lg text-gray-600 mb-4">Web Developer</h3>
            <p className="text-gray-700 mb-4">
              A passionate frontend developer skilled in React.js and modern web technologies.
            </p>
            <a
              href={resume}
              download
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
            >
              <FaDownload className="mr-2" /> Download Resume
            </a>
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Education</h2>
          <ul className="space-y-2">
            <li>
              <strong>B.Tech in Information Technology </strong> – AKTU University (2021–2025)
            </li>
          </ul>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Skills</h2>
          <ul className="flex flex-wrap gap-4">
            {["React.js", "JavaScript", "Tailwind CSS", "HTML", "CSS"].map((skill) => (
              <li key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Experience</h2>
          <ul className="space-y-2">
            <li>
              <strong>Frontend Developer Intern</strong> – ABC Tech (Jan 2024 – Apr 2024)
              <p>Built responsive UI components using React.js and improved performance by 20%.</p>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact</h2>
          <p>Email: your.email@example.com</p>
          <p>Phone: +91-12345-67890</p>
        </section>
      </main>

      <footer className="bg-white py-6 mt-10 border-t text-center text-gray-600">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
