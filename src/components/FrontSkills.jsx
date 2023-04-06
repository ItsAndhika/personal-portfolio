import React from 'react'
import HTML from '../assets/svg/html.svg'
import CSS from '../assets/svg/css.svg'
import Javascript from '../assets/svg/javascript.svg'
import Bootstrap from '../assets/svg/bootstrap.svg'
import Tailwind from '../assets/svg/tailwind.svg'
import Reactjs from '../assets/svg/react.svg'

const FrontSkills = () => {
  return (
    <>
    <div className='skill-card mt-2'>
        <img src={HTML} alt="" className='w-14'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold'>HTML</h1>
            <p className='text-base font-medium'>Advance</p>
        </div>
    </div>
    <div className='skill-card'>
        <img src={CSS} alt="" className='w-14'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold'>CSS</h1>
            <p className='text-base font-medium'>Advance</p>
        </div>
    </div>
    <div className='skill-card'>
        <img src={Javascript} alt="" className='w-10'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold'>JavaScript</h1>
            <p className='text-base font-medium'>Intermediate</p>
        </div>
    </div>
    <div className='skill-card'>
        <img src={Bootstrap} alt="" className='w-10'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold'>Bootstrap</h1>
            <p className='text-base font-medium'>Intermediate</p>
        </div>
    </div>
    <div className='skill-card'>
        <img src={Tailwind} alt="" className='w-10'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold'>Tailwind</h1>
            <p className='text-base font-medium'>Intermediate</p>
        </div>
    </div>
    <div className='skill-card'>
        <img src={Reactjs} alt="" className='w-8 sm:w-10'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold'>React.js</h1>
            <p className='text-base font-medium'>Pre-Intermediate</p>
        </div>
    </div>
    </>
  )
}

export default FrontSkills
