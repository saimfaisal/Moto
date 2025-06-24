import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import DetailingServices from './components/DetailingServices/DetailingServices';
import Component from "./components/Carwash/Carwash.jsx";
import Contact from "./components/Contact/Contact.jsx"


import AOS from "aos";
import "aos/dist/aos.css";
// 

function App() {
  // Dark Mode Feature
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? 
    localStorage.getItem("theme") : "dark"
  );
  
  const element = document.documentElement; // Fixed variable name

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, element]); // Added element to dependencies

  // AOS Initialization
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Services />
     <DetailingServices/>
     < Component/>
     <Contact/>
    </div>
  );
}

export default App;