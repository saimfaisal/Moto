"use client"

import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Services from "./components/Services/Services"
import DetailingServices from "./components/DetailingServices/DetailingServices"
import Carwash from "./components/Carwash/Carwash.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Login from "./components/Auth/Login"
import Signup from "./components/Auth/Signup"
import Pricing from "./components/Pricing/Pricing.jsx"
import PaymentMethod from "./components/PaymentMethod/PaymentMethod.jsx"

import AOS from "aos"
import "aos/dist/aos.css"
import { useNavigate } from "react-router-dom"

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark")
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
  )

  const element = document.documentElement
  const navigate = useNavigate()

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      element.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [theme])

  useEffect(() => {
    AOS.init({ offset: 100, duration: 800, easing: "ease-in-sine", delay: 100 })
    AOS.refresh()
  }, [])

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

  const openLogin = () => navigate("/login")
  const openSignup = () => navigate("/signup")

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

      {/* ✅ All Routes */}
      <Routes>
        <Route path="/" element={<Hero theme={theme} />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/detailing" element={<DetailingServices />} />
        <Route path="/carwash" element={<Carwash />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<PaymentMethod />} />

        {/* ✅ Auth Pages as Separate Routes */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
      </Routes>
    </div>
  )
}

export default App
