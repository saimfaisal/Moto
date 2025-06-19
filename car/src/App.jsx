import React,{use, useEffect, useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';

import AOS from "aos"
import "aos/dist/aos.css"
function App() {
  // Dark Mode Feature
  const[theme,setTheme]= React.useState(
  localStorage.getItem("theme") ? 
  localStorage.getItem("theme"):"dark"
);
const elemet = document.documentElement;
useEffect(()=>{
  if(theme === "dark"){
    elemet.classList.add("dark");
    localStorage.setItem("theme","dark");
  }
  else{
    elemet.classList.remove("dark");
    localStorage.setItem("theme","light")
  }
},[theme])

// AOS Initialization
React.useEffect(()=>{
   AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh()
},[])


  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero theme={theme}/>
      <About/>
      <Services/>
    </div>
  )
}

export default App