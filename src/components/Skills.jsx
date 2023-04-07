import { React, useState } from 'react'
import FrontSkills from './FrontSkills'
import BackSkills from './BackSkills'

const Skills = () => {
  const [frontActive, setFrontActive] = useState(true)
  const [backActive, setBackActive] = useState(false)

  return (
    <div id='skills' className='container pt-20 max-w-full mb-80 flex flex-col'>
      <h1 className='text-2xl font-bold text-center md:text-3xl lg:text-4xl'>My Programming Skills</h1>
      <ul className='w-11/12 mx-auto text-center my-10 flex justify-evenly items-center'>
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
    </div>
  )
}

export default Skills
