import  React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav>
               {/* <!-- Navbar --> */}
<header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex items-center justify-between px-10 h-16">
  <a href="/" class="text-xl font-bold text-gray-900 flex items-center gap-2">
    <i class="fab fa-node-js text-2xl text-green-600"></i> Jigar
  </a>
  <div id="menu" class="text-2xl text-purple-900 cursor-pointer md:hidden">
    <i class="fas fa-bars"></i>
  </div>
  <nav class="navbar hidden md:flex gap-6">
    <a href="/#home" class="text-gray-800 font-semibold hover:text-blue-600">Home</a>
    <a href="/#about" class="text-gray-800 font-semibold hover:text-blue-600">About</a>
    <a href="/#skills" class="text-gray-800 font-semibold hover:text-blue-600">Skills</a>
    <a href="/#education" class="text-gray-800 font-semibold hover:text-blue-600">Education</a>
    <a href="/#work" class="text-gray-800 font-semibold hover:text-blue-600">Work</a>
    <a href="/#experience" class="text-blue-700 font-semibold border-b-2 border-blue-700">Experience</a>
    <a href="/#contact" class="text-gray-800 font-semibold hover:text-blue-600">Contact</a>
  </nav>
</header>
     
    </nav>
  );
}

export default Navbar;
