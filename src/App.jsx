import { useState } from 'react'
import './script/script'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'

function App() {
  return (
    <div className="App dark:bg-primary dark:text-white font-inter overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  )
}

export default App
