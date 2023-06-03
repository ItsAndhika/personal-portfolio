import React from 'react'

const Navigations = () => {
  return (
    <ul className='hidden justify-around items-center sm:flex'>
        <li><a href="#home" className='nav-menu'>Home</a></li>
        <li><a href="#about" className='nav-menu'>About</a></li>
        <li><a href="#skills" className='nav-menu'>Skills</a></li>
        <li><a href="#contact" className='nav-menu'>Contact</a></li>
    </ul>
  )
}

export default Navigations
