import React from 'react'
import Programmer from '../../assets/img/programmer.png'
import Facebook from './parts/Facebook'
import Discord from './parts/Discord'
import Github from './parts/Github'
import Bio from './parts/Bio'

const Hero = () => {
  return (
    <div id='home' className='container max-w-full h-screen pt-14 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center'>
		<div id='circle' className='absolute bg-sky-600 w-40 h-40 top-96 left-40 rounded-full blur-[100px] sm:left-60 md:left-80 lg:top-80'></div>
        <img src={Programmer} alt="Programmer" loading='lazy' className='w-60 mx-auto lg:w-1/3 lg:mr-28 lg:place-content-end'/>
		<div id='content' className='text-center lg:mx-auto'>
			<Facebook />
			<Discord />
			<Github />
			<Bio />
		</div>
    </div>
  )
}

export default Hero