import { Navbar, Hero, About, Skills, Contact, Footer } from './components'
import './script/script'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
