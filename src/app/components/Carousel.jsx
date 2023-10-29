import Image from 'next/image'
import React from 'react'

const images = [
	'figma.svg',
	'nextjs.svg',
	'react.svg',
	'typescript.svg',
	'svelte.svg',
	'figma.svg',
	'nextjs.svg',
	'react.svg',
	'typescript.svg',
	'svelte.svg',
]

function Carousel() {
	return (
		<div className='overflow-hidden relative max-w-xs h-12 w-full'>
			<div className='absolute flex justify-around left-0 items-center w-[200%] h-full loop'>
				{images.map((image, index) =>
					image !== 'nextjs.svg' ? (
						<Image
							key={index}
							src={`/logos/${image}`}
							width={32}
							height={32}
							alt={image + ' logo'}
						/>
					) : (
						<div
							key={index}
							className='relative'
						>
							<Image
								src={`/logos/${image}`}
								width={36}
								height={36}
								alt={image + ' logo'}
							/>
							<div className='absolute -z-10 bg-white h-8 w-8 rounded-full inset-0 top-0.5 left-0.5'></div>
						</div>
					)
				)}
			</div>
		</div>
	)
}

export default Carousel
