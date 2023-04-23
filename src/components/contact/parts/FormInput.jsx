import React from 'react'

const FormInput = () => {
  return (
    <form action="" name='contact-form' className='flex flex-col items-center w-3/4 text-center sm:w-1/2 lg:w-11/12'>
        <label htmlFor="name" className="font-semibold mx-auto sm:text-xl lg:text-2xl lg:mt-5 lg:block 2xl:text-3xl"  data-aos="fade-in" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000'>Name</label>
        <input type="text" name="name" id="name" placeholder="Your name..." required className="form-input"  data-aos="fade-in" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000'/>
        <label htmlFor="email" className="font-semibold mx-auto sm:text-xl lg:text-2xl lg:mt-5 lg:block 2xl:text-3xl"  data-aos="fade-in" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000'>Email</label>
        <input type="email" name="email" id="email" placeholder="Your email..." required className="form-input" data-aos="fade-in" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000'/>
        <label htmlFor="message" className="font-semibold mx-auto sm:text-xl lg:text-2xl lg:mt-5 lg:block 2xl:text-3xl" data-aos="fade-in" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000'>Message</label>
        <textarea type="message" name="message" id="message" placeholder="Your message..." required className="form-input lg:h-36" data-aos="fade-in" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000'/>
        <button type="submit" id='send' data-aos="fade-in" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='2000' className='w-5/12 mx-auto text-center text-lg font-medium bg-blue-600 rounded-full px-5 py-3 mt-5 lg:w-40 hover:bg-blue-500 active:bg-blue-700' onClick={() => {
          const scriptURL = 'https://script.google.com/macros/s/AKfycbxk5wFU7JdMUY-BoHAQeMZQ9gp3dl0U2-gMl0cdm1AYlC-Pf642oRXti-hwKmThRDs/exec'
          const form = document.forms['contact-form']
          const sendButton = document.getElementById('send')
          const alert = document.getElementById('alert')

          form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => {
                  alert.classList.toggle('hidden')
                  form.reset()
                  console.log('Success!', response)
              })
              .catch(error => console.error('Error!', error.message))
          })
        }}>Send</button>
      </form>
  )
}

export default FormInput
