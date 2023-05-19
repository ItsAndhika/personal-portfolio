import React from 'react'

const About = () => {
  return (
    <div id='about' className='container pt-20 max-w-full flex flex-col justify-center items-center sm:p-0' data-aos="fade-up" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
      <h1 className='text-3xl font-bold sm:text-4xl 2xl:text-5xl'>About Me</h1>
      <div className='md:flex md:w-11/12 md:justify-between md:items-center'>
        <p className='about-me my-5'>Hi, my name is Primananda Andhika, i am from Central Java, Indonesia. Currently i live in Purworejo with my family. I've learned programming since i was at class 8 Junior High School until now i'm 15 years old.</p>
        <p className='about-me md:mt-10 lg:mt-0 '>First programming language that i learned is JavaScript and i like that language so much. I'm also learning foreign languages like English, Spanish, French, Chinese but i'm still not fluent with those languages yet.</p>
      </div>
    </div>
  )
}

export default About
