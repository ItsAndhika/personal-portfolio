import React from 'react'
import Programmer from '../../assets/img/programmer.png'
import Facebook from './parts/Facebook'
import Discord from './parts/Discord'
import Github from './parts/Github'
import Bio from './parts/Bio'

const Hero = () => {
  return (
    <div id='home' className='container max-w-full h-screen pt-14 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center'>
		<div id='circle' className='absolute bg-sky-600 w-40 h-40 top-[50%] left-[20%] rounded-full blur-[100px] 2xl:w-96 2xl:h-96 2xl:top-[40%] 2xl:blur-[200px]'></div>
        <img src={Programmer} alt="Programmer" loading='lazy' width='240' className='mx-auto lg:w-1/3 lg:mr-28 lg:place-content-end'  data-aos="fade-up" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000'/>
		<div id='content' className='text-center lg:mx-auto' data-aos="fade-up" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000'>
			<Facebook />
			<Discord />
			<Github />
			<Bio />
		</div>
    </div>
  )
}

export default Hero
