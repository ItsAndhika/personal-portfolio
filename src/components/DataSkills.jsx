import React from 'react'
import MySQL from '../assets/svg/mysql.svg'
import PostgreSQL from '../assets/svg/postgresql.svg'
import MongoDB from '../assets/svg/mongodb.svg'

const DataSkills = () => {
  return (
    <>
    <div className='skill-card mt-2'>
        <img src={MySQL} alt="" className='w-16'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold'>MySQL</h1>
            <p className='text-base font-medium'>Intermediate</p>
        </div>
    </div>
    <div className='skill-card'>
        <img src={PostgreSQL} alt="" className='w-10'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold'>PostgreSQL</h1>
            <p className='text-base font-medium'>Beginner</p>
        </div>
    </div>
    <div className='skill-card'>
        <img src={MongoDB} alt="" className='w-20'/>
        <div className='text-center font-montserrat'>
            <h1 className='text-lg font-semibold'>MongoDB</h1>
            <p className='text-base font-medium'>Beginner</p>
        </div>
    </div>
    </>
  )
}

export default DataSkills
