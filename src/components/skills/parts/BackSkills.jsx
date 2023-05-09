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
    <div className='skill-card mt-2' data-aos="fade-in" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000'>
        <img src={PHP} alt="" className='w-12 2xl:w-24'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold 2xl:text-4xl'>PHP</h1>
            <p className='text-base font-medium 2xl:text-3xl'>Intermediate</p>
        </div>
    </div>
    <div className='skill-card' data-aos="fade-in" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000'>
        <img src={Node} alt="" className='w-10 2xl:w-20'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold 2xl:text-4xl'>Node.js</h1>
            <p className='text-base font-medium 2xl:text-3xl'>Beginner</p>
        </div>
    </div>
    <div className='skill-card' data-aos="fade-in" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000'>
        <img src={Laravel} alt="" className='w-10 2xl:w-20'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold 2xl:text-4xl'>Laravel</h1>
            <p className='text-base font-medium 2xl:text-3xl'>Beginner</p>
        </div>
    </div>
    <div className='skill-card' data-aos="fade-in" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000'>
        <img src={MySQL} alt="" className='w-16 2xl:w-32'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold 2xl:text-4xl'>MySQL</h1>
            <p className='text-base font-medium 2xl:text-3xl'>Intermediate</p>
        </div>
    </div>
    <div className='skill-card' data-aos="fade-in" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000'>
        <img src={PostgreSQL} alt="" className='w-10 2xl:w-20'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold 2xl:text-4xl'>PostgreSQL</h1>
            <p className='text-base font-medium 2xl:text-3xl'>Beginner</p>
        </div>
    </div>
    <div className='skill-card' data-aos="fade-in" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000'>
        <img src={MongoDB} alt="" className='w-20 2xl:w-36'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold 2xl:text-4xl'>MongoDB</h1>
            <p className='text-base font-medium 2xl:text-3xl'>Beginner</p>
        </div>
    </div>
    </>
  )
}

export default BackSkills
