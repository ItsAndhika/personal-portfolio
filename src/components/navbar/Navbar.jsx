import { React, useState } from 'react'
import Navigations from './parts/Navigations'
import HamburgerMenu from './parts/HamburgerMenu'
import MobileNavigations from './parts/MobileNavigations'

const Navbar = () => {
    const [active, setActive] = useState(false)

  return (
    <nav className='container max-w-full fixed backdrop-blur-md bg-transparent h-[80px] flex justify-between items-center z-50 text-white p-5 md:h-[100px] 2xl:h-[120px] 2xl:p-10'>
      <h1><a href="#home" className='text-xl font-semibold md:text-2xl 2xl:text-3xl'>Primananda</a></h1>
      <Navigations />
      <HamburgerMenu active={active} setActive={setActive}/>
      <MobileNavigations active={active} setActive={setActive}/>
    </nav>
  )
}

export default Navbar
