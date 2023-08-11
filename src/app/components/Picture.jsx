import React from 'react'
import Image from 'next/image'

function Picture() {
	return (
		<div className='w-1/2 flex-1 bg-violet-900 rounded-2xl relative shadow'>
			<div className='absolute -top-3 -right-4 md:-top-8 md:right-3 mid:-top-16 lg:-top-20 large:right-16 large:-top-16 extralarge:right-32 extralarge:-top-12 tabletrot:right-20 tabletrot:-top-20 flex items-start gap-2 z-30'>
				<Image
					src='/arrow.svg'
					width={120}
					height={120}
					alt='Arrow pointing to profile pic'
					className='hidden md:block w-14 md:w-20 mid:w-24 lg:w-32 large:w-44'
				/>
				<p className='font-bold text-3xl rotate-[30deg] mt-4 bg-gradient-to-r from-fuchsia-500 to-rose-500 px-2 whitespace-nowrap xl:text-4xl large:text-5xl extralarge:text-6xl shadow-md'>
					that&apos;s me!
				</p>
			</div>
			<div className='w-full h-full relative overflow-hidden rounded-2xl pointer-events-none'>
				{/* <Image
					src='/pic2.png'
					fill
					alt='profile picture'
					className='object-cover w-screen abolute top-32 pointer-events-none'
				/> */}
				<video
					src='/video.mov'
					autoPlay
					loop
					muted
					className='w-screen object-cover absolute mid:-top-14'
				>
					Your browser does not support this gif
				</video>
			</div>
		</div>
	)
}

export default Picture
