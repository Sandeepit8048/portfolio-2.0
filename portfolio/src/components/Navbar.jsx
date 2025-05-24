import  {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
   const [activeSection, setActiveSection] = useState("About");
  
    const navItems = ["About", "Education", "Skills", "Experience", "Contact"];
  
    const handleNavClick = (section) => {
      setActiveSection(section);
      const element = document.getElementById(section.toLowerCase());
      element?.scrollIntoView({ behavior: "smooth" });
    };
  return (
    <nav>
       <header className="bg-white shadow-md sticky top-0 z-10">
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
      </header> 
     
    </nav>
  );
}

export default Navbar;
