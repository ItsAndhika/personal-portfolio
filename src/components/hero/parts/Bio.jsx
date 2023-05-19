import React from 'react'
import Typewriter from 'typewriter-effect'

const Bio = () => {
  return (
    <div className='text-center lg:mr-3 lg:text-left lg:w-2/3 lg:ml-40'>
		<h1 className='bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent text-2xl font-bold sm:text-5xl 2xl:text-6xl'>Primananda Andhika</h1>
		<div className='text-xl flex justify-center items-center my-2 lg:text-2xl lg:justify-start 2xl:text-3xl 2xl:my-3'>
		<p className='text-sky-500 font-semibold mr-1.5'>I'm a </p>
		<Typewriter 
			options={{
				strings: ['Web Developer', 'Trilingual', 'Student'],
				autoStart: true,
				loop: true,
				wrapperClassName: "bg-gradient-to-l from-blue-600 via-sky-600 to-teal-600 bg-clip-text text-transparent font-semibold",
				cursorClassName: "text-white"
			}}
		/>
		</div>
		<p
			className="text-white mb-5 mx-auto w-2/3 text-center font-montserrat text-lg lg:text-xl lg:text-left lg:w-full 2xl:text-2xl 2xl:mb-7"
		>
			A Junior
			<span
				className="bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500 bg-clip-text text-transparent mx-1.5 -z-20"
				>Web Developer</span
			>
			who Wants to be a Better Person Everyday by Learn Anything that I
			Like to do.
		</p>
		<a href='#about' className='px-5 py-3 border border-sky-600 text-sky-600 text-base hover:text-white sm:text-lg lg:text-xl 2xl:text-2xl 2xl:px-7 2xl:py-5'>About Me</a>
	</div>
  )
}

export default Bio
