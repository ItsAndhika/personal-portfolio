import React from 'react'
import Programmer from '/assets/img/programmer.webp'
import Facebook from './parts/Facebook'
import Discord from './parts/Discord'
import Github from './parts/Github'
import Bio from './parts/Bio'

const Hero = () => {
  return (
    <section id='home' className='container mx-auto py-20 sm:py-28 md:py-36 lg:py-40 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center 2xl:py-48'>
		<div id='circle' className='absolute bg-sky-600 w-40 h-40 top-[50%] left-[20%] rounded-full blur-[100px] sm:top-[30%] 2xl:w-80 2xl:h-80 2xl:top-[40%] 2xl:blur-[180px]'></div>
        <img src={Programmer} alt="Programmer" width='240' className='mx-auto lg:w-1/3 lg:mr-28 lg:place-content-end'  data-aos="fade-up" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'/>
		<div id='content' className='text-center lg:mx-auto' data-aos="fade-up" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
			<Facebook />
			<Discord />
			<Github />
			<Bio />
		</div>
    </section>
  )
}

export default Hero
