import { React, useState } from 'react'

const Navbar = () => {
    const [active, setActive] = useState(false)

  return (
    <nav className='w-full fixed backdrop-blur-md bg-transparent h-[80px] flex justify-between items-center z-50 text-white p-5 md:h-[100px]'>
      <h1><a href="#home" className='text-xl font-semibold md:text-2xl'>Primananda</a></h1>
      <ul className='hidden sm:w-[50vw] sm:flex sm:justify-around sm:items-center sm:ml-5 lg:w-[40vw]'>
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
      <div className={`${active ? 'fixed h-screen top-0 right-0 bottom-0 -z-50 w-full flex justify-end bg-transparent backdrop-blur-md transition-all ease-in-out duration-500' : 'fixed -right-[500px]'}`}>
        <ul className='w-[60%] h-screen bg-primary flex flex-col justify-evenly items-center shadow-xl'>
          <li><a href="#home" className='transition-all duration-300 hover:text-sky-600' onClick={() => setActive(active => !active)}>Home</a></li>
          <li><a href="#about" className='transition-all duration-300 hover:text-sky-600' onClick={() => setActive(active => !active)}>About</a></li>
          <li><a href="#skills" className='transition-all duration-300 hover:text-sky-600' onClick={() => setActive(active => !active)}>Skills</a></li>
          <li><a href="#contact" className='transition-all duration-300 hover:text-sky-600' onClick={() => setActive(active => !active)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
