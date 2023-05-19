import React from 'react'
import PHP from '../../../assets/svg/php.svg'
import Node from '../../../assets/svg/node.svg'
import Laravel from '../../../assets/svg/laravel.svg'
import MySQL from '../../../assets/svg/mysql.svg'
import PostgreSQL from '../../../assets/svg/postgresql.svg'
import MongoDB from '../../../assets/svg/mongodb.svg'

const BackSkills = () => {
  return (
    <>
    <div className='skill-card mt-2' data-aos="fade-up" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
        <img src={PHP} alt="" className='w-12 2xl:w-20'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold 2xl:text-2xl'>PHP</h1>
            <p className='text-base font-medium 2xl:text-xl'>Intermediate</p>
        </div>
    </div>
    <div className='skill-card' data-aos="fade-up" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
        <img src={Node} alt="" className='w-10 2xl:w-16'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold 2xl:text-2xl'>Node.js</h1>
            <p className='text-base font-medium 2xl:text-xl'>Beginner</p>
        </div>
    </div>
    <div className='skill-card' data-aos="fade-up" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
        <img src={Laravel} alt="" className='w-10 2xl:w-16'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold 2xl:text-2xl'>Laravel</h1>
            <p className='text-base font-medium 2xl:text-xl'>Beginner</p>
        </div>
    </div>
    <div className='skill-card' data-aos="fade-up" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
        <img src={MySQL} alt="" className='w-16 2xl:w-28'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold 2xl:text-2xl'>MySQL</h1>
            <p className='text-base font-medium 2xl:text-xl'>Intermediate</p>
        </div>
    </div>
    <div className='skill-card' data-aos="fade-up" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
        <img src={PostgreSQL} alt="" className='w-10 2xl:w-16'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold 2xl:text-2xl'>PostgreSQL</h1>
            <p className='text-base font-medium 2xl:text-xl'>Beginner</p>
        </div>
    </div>
    <div className='skill-card' data-aos="fade-up" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
        <img src={MongoDB} alt="" className='w-20 2xl:w-32'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold 2xl:text-2xl'>MongoDB</h1>
            <p className='text-base font-medium 2xl:text-xl'>Beginner</p>
        </div>
    </div>
    </>
  )
}

export default BackSkills
