import React from 'react'

const About = () => {
  return (
    <section id='about' className='container mx-auto py-20 sm:py-28 md:py-36 lg:py-40 2xl:py-48 flex flex-col justify-center items-center' data-aos="fade-up" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
      <h1 className='text-3xl font-bold sm:text-4xl 2xl:text-5xl'>About Me</h1>
      <div className='md:flex md:justify-between md:items-start'>
        <p className='about-me my-5'>Hi, my name is Primananda Andhika, i am from Central Java, Indonesia. Currently i live in Purworejo with my family. I've learned programming since i was at class 8 Junior High School until now i'm 15 years old.</p>
        <p className='about-me my-5'>First programming language that i learned is JavaScript and i like that language so much. I'm also learning foreign languages like English, Spanish, French, Chinese but i'm still not fluent with those languages yet.</p>
      </div>
    </section>
  )
}

export default About
