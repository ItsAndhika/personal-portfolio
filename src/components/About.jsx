import React from 'react'

const About = () => {
  return (
    <div id='about' className='container pt-24 max-w-full flex flex-col justify-center items-center sm:pt-0'>
      <h1 className='text-3xl font-bold sm:text-4xl'>About Me</h1>
      <div className='md:flex md:w-11/12 md:justify-between md:items-center'>
        <p className='about-me my-5'>Hi, my name is Primananda Andhika, i am from Central Java, Indonesia. Currently i live in Purworejo with my family. I've learned programming since i was at class 8 Junior High School.</p>
        <p className='about-me md:mt-10 lg:mt-0 '>First programming language that i learned is JavaScript and i like that language so much. I'm also learning foreign languages like English, Spanish, French, Chinese but i'm still not fluent with those languages yet.</p>
      </div>
    </div>
  )
}

export default About
