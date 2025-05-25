import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import profile from './assets/1147.jpg';
import avater from './assets/avater.avif';
import { BsLinkedin } from "react-icons/bs";
const Home = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Load skills data
    const skillsData = [
      {
        "name": "ReactJS",
        "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
      },
      // ... (other skills data from your JSON)
    ];
    setSkills(skillsData);
  }, []);

  return (
    <div className="font-sans bg-gray-50">
     <Helmet>
        <title>Portfolio |Sandeep.Kr.Yadav</title>
        <meta name="description" content="Welcome to Sandeep's Portfolio. Full-Stack Web Developer and Android App Developer" />
        <meta name="keywords" content="Sandeep Yadav, portfolio, Sandeep, full stack dev, personal portfolio lifecodes, portfolio design, portfolio website, personal portfolio" />
        <link rel="icon" href="/favicon.png" type="image/x-png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Helmet>
      {/* rest of your component */}
  

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6 h-16 bg-white shadow-md">
        <a href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600">
          <i className="fab fa-node-js mr-2"></i> Sandeep.Kr.Yadav
        </a>

        <div id="menu" className="text-3xl cursor-pointer text-indigo-900 md:hidden">
          <i className="fas fa-bars"></i>
        </div>

        <nav className="hidden md:block">
          <ul className="flex">
            <li className="ml-6"><a className="text-lg font-semibold text-gray-800 hover:text-blue-600 border-b-2 border-blue-600 py-1" href="#home">Home</a></li>
            <li className="ml-6"><a className="text-lg font-semibold text-gray-800 hover:text-blue-600" href="#about">About</a></li>
            <li className="ml-6"><a className="text-lg font-semibold text-gray-800 hover:text-blue-600" href="#skills">Skills</a></li>
            <li className="ml-6"><a className="text-lg font-semibold text-gray-800 hover:text-blue-600" href="#education">Education</a></li>
            <li className="ml-6"><a className="text-lg font-semibold text-gray-800 hover:text-blue-600" href="#work">Work</a></li>
            <li className="ml-6"><a className="text-lg font-semibold text-gray-800 hover:text-blue-600" href="#experience">Experience</a></li>
            <li className="ml-6"><a className="text-lg font-semibold text-gray-800 hover:text-blue-600" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-between px-10 pt-20">
        <div className="relative w-full">
          {/* Particles would go here */}

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
                <li><a href={<BsLinkedin />} className="text-blue-600 text-2xl hover:text-blue-800" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="https://github.com" className="text-gray-800 text-2xl hover:text-black" target="_blank"><i className="fab fa-github"></i></a></li>
                <li><a href="https://twitter.com" className="text-blue-400 text-2xl hover:text-blue-600" target="_blank"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://telegram.com" className="text-blue-500 text-2xl hover:text-blue-700" target="_blank"><i className="fab fa-telegram-plane"></i></a></li>
                <li><a href="https://instagram.com" className="text-pink-600 text-2xl hover:text-pink-800" target="_blank"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://dev.to" className="text-black text-2xl hover:text-gray-800" target="_blank"><i className="fab fa-dev"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <img src={avater} alt="Hero" className="w-96" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          <i className="fas fa-user-alt mr-3 text-blue-600"></i> About <span className="text-purple-700">Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img src={profile} alt="Profile" className="rounded-lg w-full max-w-md" />
          </div>
          
          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">I'm Sandeep</h3>
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full mb-6">Full Stack Developer</span>
            
            <p className="text-gray-600 mb-6">
              I am a Full-Stack developer based in Pune, India. 
              I am an Information Technology undergraduate from AKTU.
              I am very passionate about improving my coding skills & developing applications & websites.
              I build WebApps and Websites using MERN Stack.
              Working for myself to improve my skills.
              Love to build Full-Stack clones.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p><span className="font-semibold">email : </span>rkysandeepyadav@gmail.com</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p><span className="font-semibold">place : </span> Ghaziabad, U.P, India - 201010 </p>
              </div>
            </div>
            
            <a href="https://drive.google.com" target="_blank" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              <span>Resume</span>
              <i className="fas fa-chevron-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-10 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          <i className="fas fa-laptop-code mr-3 text-blue-600"></i> Skills & <span className="text-purple-700">Abilities</span>
        </h2>

        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <img src={skill.icon} alt={skill.name} className="w-12 h-12 mx-auto mb-2" />
                <span className="text-gray-800">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          <i className="fas fa-graduation-cap mr-3 text-blue-600"></i> My <span className="text-purple-700">Education</span>
        </h2>

        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Education is not the learning of facts, but the training of the mind to think.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img src="/college.jpg" alt="College" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Bachelor of Engineering in Information Technology</h3>
              <p className="text-gray-600 mb-2">IMS Engineering College, Ghaziabad| AKTU</p>
              <h4 className="text-blue-600 font-semibold">2021-2025 | Pursuing</h4>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img src="/school.jpg" alt="School" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2"> Science </h3>
              <p className="text-gray-600 mb-2">Swami Harsewanand Public School | CBSE</p>
              <h4 className="text-blue-600 font-semibold">2020 | Completed</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-10 bg-gradient-to-b from-blue-900 to-blue-800">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          <i className="fas fa-laptop-code mr-3 text-yellow-300"></i> Projects <span className="text-yellow-300">Made</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Project cards would go here */}
        </div>

        <div className="text-center mt-12">
          <a href="/projects" className="inline-flex items-center px-6 py-3 bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition">
            <span>View All</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          <i className="fas fa-briefcase mr-3 text-blue-600"></i> Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Timeline items would go here */}
        </div>

        <div className="text-center mt-12">
          <a href="/experience" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <span>View All</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-10 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          <i className="fas fa-headset mr-3 text-blue-600"></i> Get in <span className="text-purple-700">Touch</span>
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/contact1.png" alt="Contact" className="w-full" />
            </div>
            
            <form className="md:w-1/2 md:pl-12">
              <div className="mb-4">
                <div className="relative mb-4">
                  <input type="text" name="name" placeholder="Name" required 
                    className="w-full px-4 py-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <i className="fas fa-user absolute left-3 top-4 text-gray-400"></i>
                </div>
                
                <div className="relative mb-4">
                  <input type="email" name="email" placeholder="Email" required 
                    className="w-full px-4 py-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <i className="fas fa-envelope absolute left-3 top-4 text-gray-400"></i>
                </div>
                
                <div className="relative mb-4">
                  <input type="text" name="phone" placeholder="Phone" 
                    className="w-full px-4 py-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <i className="fas fa-phone-alt absolute left-3 top-4 text-gray-400"></i>
                </div>
                
                <div className="relative mb-4">
                  <textarea placeholder="Message" name="message" required rows="4"
                    className="w-full px-4 py-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                  <i className="fas fa-comment-dots absolute left-3 top-4 text-gray-400"></i>
                </div>
              </div>
              
              <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Submit <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Sandeep Portfolio</h3>
            <p className="text-gray-600">
              Thank you for visiting my personal portfolio website. Connect with me over socials. <br/> <br/> Keep Rising 🚀. Connect with me over live chat!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">quick links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="flex items-center text-gray-600 hover:text-blue-600"><i className="fas fa-chevron-circle-right mr-2 text-blue-600"></i> home</a></li>
              <li><a href="#about" className="flex items-center text-gray-600 hover:text-blue-600"><i className="fas fa-chevron-circle-right mr-2 text-blue-600"></i> about</a></li>
              <li><a href="#skills" className="flex items-center text-gray-600 hover:text-blue-600"><i className="fas fa-chevron-circle-right mr-2 text-blue-600"></i> skills</a></li>
              <li><a href="#education" className="flex items-center text-gray-600 hover:text-blue-600"><i className="fas fa-chevron-circle-right mr-2 text-blue-600"></i> education</a></li>
              <li><a href="#work" className="flex items-center text-gray-600 hover:text-blue-600"><i className="fas fa-chevron-circle-right mr-2 text-blue-600"></i> work</a></li>
              <li><a href="#experience" className="flex items-center text-gray-600 hover:text-blue-600"><i className="fas fa-chevron-circle-right mr-2 text-blue-600"></i> experience</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">contact info</h3>
            <p className="text-gray-600 mb-2"><i className="fas fa-phone mr-2 text-blue-600"></i>+91 XXX-XXX-XXXX</p>
            <p className="text-gray-600 mb-2"><i className="fas fa-envelope mr-2 text-blue-600"></i>rkysandeepyadav@gmail.com</p>
            <p className="text-gray-600 mb-4"><i className="fas fa-map-marked-alt mr-2 text-blue-600"></i>Pune, India-412206</p>
            
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-blue-600 text-xl hover:text-blue-800"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com" className="text-gray-800 text-xl hover:text-black"><i className="fab fa-github"></i></a>
              <a href="mailto:rkysandeepyadav@gmail.com" className="text-gray-600 text-xl hover:text-blue-600"><i className="fas fa-envelope"></i></a>
              <a href="https://twitter.com" className="text-blue-400 text-xl hover:text-blue-600"><i className="fab fa-twitter"></i></a>
              <a href="https://telegram.com" className="text-blue-500 text-xl hover:text-blue-700"><i className="fab fa-telegram-plane"></i></a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Designed with <i className="fa fa-heart text-red-500 animate-pulse"></i> by <a href="https://linkedin.com" className="text-blue-600 hover:underline">jigar sable</a>
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <a href="#home" id="scroll-top" className="fixed right-8 bottom-8 p-4 bg-yellow-400 text-indigo-900 rounded-full text-2xl hidden">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );
};

export default Home;