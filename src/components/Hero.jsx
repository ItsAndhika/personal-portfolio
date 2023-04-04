import React from 'react'
import Programmer from '../assets/img/programmer.png'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    <div id='home' className='container max-w-full min-w-[360px] h-screen pt-14 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center'>
		<div id='circle' className='absolute bg-sky-600 w-40 h-40 top-80 left-64 rounded-full blur-[100px]'></div>
        <img src={Programmer} alt="Programmer" loading='lazy' className='w-72 mx-auto lg:w-1/2 lg:mr-28 lg:place-content-end'/>
		<div id='content' className='text-center lg:mx-auto'>
				<a href="https://m.facebook.com/profile.php?id=100056986006962">
					<svg
						fill="#000000"
						className="mx-2 inline w-8 mt-3 fill-black dark:fill-white lg:w-9"
						viewBox="-5.5 0 32 32"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
						<g
							id="SVGRepo_tracerCarrier"
							strokeLinecap="round"
							strokeLinejoin="round"
						></g>
						<g id="SVGRepo_iconCarrier">
							<title>facebook</title>
							<path
								d="M1.188 5.594h18.438c0.625 0 1.188 0.563 1.188 1.188v18.438c0 0.625-0.563 1.188-1.188 1.188h-18.438c-0.625 0-1.188-0.563-1.188-1.188v-18.438c0-0.625 0.563-1.188 1.188-1.188zM14.781 17.281h2.875l0.125-2.75h-3v-2.031c0-0.781 0.156-1.219 1.156-1.219h1.75l0.063-2.563s-0.781-0.125-1.906-0.125c-2.75 0-3.969 1.719-3.969 3.563v2.375h-2.031v2.75h2.031v7.625h2.906v-7.625z"
							></path>
						</g>
					</svg>
				</a>
				<a href="https://discord.com/users/832254421835448370">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="mx-2 inline w-6 mt-3 fill-black dark:fill-white lg:w-9"
						fill="none"
						viewBox="0 0 640 512"
					>
						<path
							d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
						/>
					</svg>
				</a>
				<a
					href="https://github.com/ItsAndhika"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						className="mx-2 inline w-6 mt-3 fill-black dark:fill-white lg:w-8"
						viewBox="0 0 496 512"
					>
						<path
							d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
						/>
					</svg>
				</a>
			<div className='text-center lg:mr-3 lg:text-left lg:w-2/3 lg:ml-40'>
				<h1 className='bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent text-3xl font-bold sm:text-5xl'>Primananda Andhika</h1>
				<div className='text-2xl flex justify-center items-center my-2 lg:text-3xl lg:justify-start'>
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
					className="text-white mb-5 mx-auto w-2/3 font-semibold text-center font-montserrat text-lg lg:text-xl lg:text-left lg:w-full"
				>
					A Junior
					<span
						className="bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500 bg-clip-text text-transparent mx-1.5 -z-20"
						>Web Developer</span
					>
					who Wants to be a Better Person Everyday by Learn Anything that I
					Like to do
				</p>
				<a href='#about' className='px-5 py-3 bg-blue-600 text-base rounded-full mb-5 hover:bg-blue-500 sm:text-lg lg:text-xl'>About Me &#8595;</a>
			</div>
		</div>
    </div>
  )
}

export default Hero
