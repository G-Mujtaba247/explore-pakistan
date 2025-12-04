import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Contact from "@/pages/Contact"
import Tours from './pages/Tours'
import Booktour from './pages/BookTour'
import Terms from './pages/safety/Terms'
import Policies from './pages/safety/Policies'
import FAQ from './components/FAQ'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/booktour" element={<Booktour />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
