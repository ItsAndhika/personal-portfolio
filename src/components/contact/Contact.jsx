import React from 'react'
import FormInput from './parts/FormInput'

const Contact = () => {
  return (
    <div id='contact' className='container max-w-full pt-20 mx-auto flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold mb-5 md:text-3xl lg:text-4xl' data-aos="fade-up" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000'>Contact Me</h1>
      <div id='alert' className='hidden w-1/2 mx-auto mb-5 text-lg text-center bg-blue-600 rounded-lg px-4 py-2 border border-sky-300 md:w-1/3 md:text-xl'>Your message has sent!</div>
      <FormInput />
    </div>  
  )
}

export default Contact
