import { useState } from 'react'
import './script/script'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="App bg-primary font-inter overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
