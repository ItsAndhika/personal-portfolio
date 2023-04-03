import { React, useState } from 'react'

const Navbar = () => {
    const [active, setActive] = useState(false)

  return (
    <nav className='w-full fixed backdrop-blur-lg bg-transparent h-[13vh] flex justify-between items-center text-white p-5'>
      <h1><a href="#home" className='text-xl font-semibold'>Primananda</a></h1>
      <ul className='hidden sm:w-80 sm:flex sm:justify-around sm:items-center sm:ml-5'>
        <li><a href="#home" className='nav-menu'>Home</a></li>
        <li><a href="#about" className='nav-menu'>About</a></li>
        <li><a href="#skills" className='nav-menu'>Skills</a></li>
        <li><a href="#contact" className='nav-menu'>Contact</a></li>
      </ul>
      <div id='menu' onClick={() => setActive(active => !active)}>
        <span className={`${active ? 'firstSpan' : ''}`}></span>
        <span className={`${active ? 'secondSpan' : ''}`}></span>
        <span className={`${active ? 'thirdSpan' : ''}`}></span>
      </div>
    </nav>
  )
}

export default Navbar
