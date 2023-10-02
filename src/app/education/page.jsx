import React from 'react'
import data from '../data/education.json'
import { Card, Teaser } from '../components'

function page() {
	const education = [...data].reverse()

	return (
		<main className='w-screen flex items-center justify-center bg-black'>
			<div className='bg-slate-900/80 w-full h-full z-10 font-sans mid:min-h-screen mid:min-w-screen px-6 py-12 md:px-12 mid:py-20 lg:px-32 text-gray-200 pb-20'>
				<div className='flex flex-col mid:flex-row justify-between mx-auto max-w-5xl'>
					<div></div>
					<Teaser />
					<div className='max-w-sm xl:max-w-lg text-slate-400 flex flex-col mx-auto mid:mx-0'>
						<div className='flex flex-col gap-3 py-12 mid:pb-0 mid:pt-16 text-center md:text-start'>
							<h1 className='font-semibold text-3xl tracking-wide text-gray-200'>Education</h1>
							<p className='leading-relaxed'>Courses, certificates and studies</p>
							<p className='leading-relaxed'>
								My steps towards frontend and fullstack development through self-guided learning
							</p>
						</div>
						<div className='mid:pt-12 flex flex-col gap-10'>
							{education.map(
								({ id, date, title, company, text, text2, link, technologies, logo }) => (
									<Card
										key={id}
										date={date}
										logo={logo}
										role={title}
										company={company}
										text={text}
										text2={text2}
										link={link}
										technologies={technologies}
									/>
								)
							)}
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default page
