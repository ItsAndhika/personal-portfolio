import React from 'react'
import HTML from '../../../assets/svg/html.svg'
import CSS from '../../../assets/svg/css.svg'
import Javascript from '../../../assets/svg/javascript.svg'
import Bootstrap from '../../../assets/svg/bootstrap.svg'
import Tailwind from '../../../assets/svg/tailwind.svg'
import Reactjs from '../../../assets/svg/react.svg'

const FrontSkills = () => {
  return (
    <>
    <div className='skill-card mt-2' data-aos="fade-in" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000'>
        <img src={HTML} alt="" className='w-14 2xl:w-24'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold 2xl:text-4xl'>HTML</h1>
            <p className='text-base font-medium 2xl:text-3xl'>Advance</p>
        </div>
    </div>
    <div className='skill-card'  data-aos="fade-in" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000'>
        <img src={CSS} alt="" className='w-14 2xl:w-24'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold 2xl:text-4xl'>CSS</h1>
            <p className='text-base font-medium 2xl:text-3xl'>Advance</p>
        </div>
    </div>
    <div className='skill-card'  data-aos="fade-in" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000'>
        <img src={Javascript} alt="" className='w-10 2xl:w-20'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold 2xl:text-4xl'>JavaScript</h1>
            <p className='text-base font-medium 2xl:text-3xl'>Intermediate</p>
        </div>
    </div>
    <div className='skill-card'  data-aos="fade-in" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000'>
        <img src={Bootstrap} alt="" className='w-10 2xl:w-20'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold 2xl:text-4xl'>Bootstrap</h1>
            <p className='text-base font-medium 2xl:text-3xl'>Intermediate</p>
        </div>
    </div>
    <div className='skill-card'  data-aos="fade-in" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000'>
        <img src={Tailwind} alt="" className='w-10 2xl:w-20'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold 2xl:text-4xl'>Tailwind</h1>
            <p className='text-base font-medium 2xl:text-3xl'>Intermediate</p>
        </div>
    </div>
    <div className='skill-card'  data-aos="fade-in" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000'>
        <img src={Reactjs} alt="" className='w-8 sm:w-10 2xl:w-20'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold 2xl:text-4xl'>React.js</h1>
            <p className='text-base font-medium 2xl:text-3xl'>Beginner</p>
        </div>
    </div>
    </>
  )
}

export default FrontSkills
