import { Navbar, Hero, About, Skills, Contact, Footer } from './components'
import './script/script'

function App() {
  return (
    <div className="dark:bg-primary dark:text-white font-inter overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
