import React from 'react'
import FormInput from './parts/FormInput'

const Contact = () => {
  return (
    <section id='contact' className='container py-20 sm:py-28 md:py-36 lg:py-40 2xl:py-48 mx-auto flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold mb-5 md:text-3xl lg:text-4xl 2xl:text-4xl' data-aos="fade-up" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>Contact Me</h1>
      <div id='alert' className='hidden w-1/2 mx-auto mb-5 text-lg text-center bg-blue-600 rounded-lg px-4 py-2 border border-sky-300 md:w-1/3 md:text-xl 2xl:text-2xl 2xl:px-6 2xl:py-4'>Your message has sent!</div>
      <FormInput />
    </section>  
  )
}

export default Contact
