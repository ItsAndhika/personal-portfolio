import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='container max-w-full pt-20 mx-auto flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold mb-5 md:text-3xl lg:text-4xl'>Contact Me</h1>
      <div id='alert' className='hidden w-1/2 mx-auto mb-5 text-lg text-center bg-blue-600 rounded-lg px-4 py-2 border border-sky-300 md:w-1/3 md:text-xl'>Your message has sent!</div>
      <form action="" name='contact-form' className='flex flex-col items-center w-3/4 text-center sm:w-1/2 lg:w-11/12'>
        <label htmlFor="name" className="font-semibold mx-auto sm:text-xl lg:text-2xl lg:mt-5 lg:block 2xl:text-3xl">Name</label>
        <input type="text" name="name" id="name" placeholder="Your name..." required className="form-input"/>
        <label htmlFor="email" className="font-semibold mx-auto sm:text-xl lg:text-2xl lg:mt-5 lg:block 2xl:text-3xl">Email</label>
        <input type="email" name="email" id="email" placeholder="Your email..." required className="form-input"/>
        <label htmlFor="message" className="font-semibold mx-auto sm:text-xl lg:text-2xl lg:mt-5 lg:block 2xl:text-3xl">Message</label>
        <textarea type="message" name="message" id="message" placeholder="Your message..." required className="form-input lg:h-36"/>
        <button type="submit" id='send' className='w-5/12 mx-auto text-center text-lg font-medium bg-blue-600 rounded-full px-5 py-3 mt-5 lg:w-40 hover:bg-blue-500 active:bg-blue-700' onClick={() => {
          const alert = document.getElementById('alert')
          fetch('https://script.google.com/macros/s/AKfycbxk5wFU7JdMUY-BoHAQeMZQ9gp3dl0U2-gMl0cdm1AYlC-Pf642oRXti-hwKmThRDs/exec', { method: 'POST', body: new FormData(form)})
            .then(response => {
                alert.classList.toggle('hidden')
                form.reset()
                console.log('Success!', response)
            })
            .catch(error => console.error('Error!', error.message))
        }}>Send</button>
      </form>
    </div>  
  )
}

export default Contact
