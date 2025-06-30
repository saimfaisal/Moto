"use client"

import { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Services from "./components/Services/Services"
import DetailingServices from "./components/DetailingServices/DetailingServices"
import Component from "./components/Carwash/Carwash.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Login from "./components/Auth/Login"
import Signup from "./components/Auth/Signup"

import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  // Dark Mode Feature
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark")

  // Authentication State
  const [user, setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null)

  // Modal States
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  const element = document.documentElement

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      element.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [theme, element])

  // AOS Initialization
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
    AOS.refresh()
  }, [])

  // Authentication Functions
  const handleLogin = (userData) => {
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  const handleSignup = (userData) => {
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const openLogin = () => {
    setShowLogin(true)
    setShowSignup(false)
  }

  const openSignup = () => {
    setShowSignup(true)
    setShowLogin(false)
  }

  const closeModals = () => {
    setShowLogin(false)
    setShowSignup(false)
  }

  const switchToSignup = () => {
    setShowLogin(false)
    setShowSignup(true)
  }

  const switchToLogin = () => {
    setShowSignup(false)
    setShowLogin(true)
  }
  return (
    <div>
      <Navbar
        theme={theme}
        setTheme={setTheme}
        user={user}
        onLoginClick={openLogin}
        onSignupClick={openSignup}
        onLogout={handleLogout}
      />
      <Hero theme={theme} />
      <About />
      <Services />
      <DetailingServices />
      <Component />
      <Contact />
      {/* Authentication Modals */}
      <Login isOpen={showLogin} onClose={closeModals} onLogin={handleLogin} onSwitchToSignup={switchToSignup} />
      <Signup isOpen={showSignup} onClose={closeModals} onSignup={handleSignup} onSwitchToLogin={switchToLogin} />
    </div>
  )
}

export default App
