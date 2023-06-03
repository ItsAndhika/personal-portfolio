import { React, useState } from 'react'
import FrontSkills from './parts/FrontSkills'
import BackSkills from './parts/BackSkills'

const Skills = () => {
  const [frontActive, setFrontActive] = useState(true)
  const [backActive, setBackActive] = useState(false)

  return (
    <section id='skills' className='container mx-auto py-20 sm:py-28 md:py-36 lg:py-40 2xl:py-48 flex flex-col'>
      <h1 className='text-2xl font-bold text-center md:text-3xl lg:text-4xl 2xl:text-3xl'  data-aos="fade-up" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>My Programming Skills</h1>
      <ul className='w-11/12 mx-auto text-center my-10 flex justify-evenly items-center 2xl:py-7' data-aos="fade-up" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
        <li className={`${frontActive ? 'bg-slate-800' : ''} skill-menu`} onClick={() => {
          setFrontActive(active => active = true)
          setBackActive(active => active = false)
        }}>Front End</li>
        <li className={`${backActive ? 'bg-slate-800' : ''} skill-menu`} onClick={() => {
          setFrontActive(active => active = false)
          setBackActive(active => active = true)
        }}>Back End</li>
      </ul>
      <div className='flex flex-col justify-center sm:grid sm:gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {frontActive ? <><FrontSkills /></> : ''}
        {backActive ? <><BackSkills /></> : ''}
      </div>
    </section>
  )
}

export default Skills
