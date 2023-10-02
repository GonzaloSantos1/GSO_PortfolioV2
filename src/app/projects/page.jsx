import React from 'react'
import projects from '../data/projects.json'
import { Project, Teaser } from '../components'

function page() {
	return (
		<main className='w-screen overflow-y-scroll flex items-center justify-center bg-black scroll-smooth'>
			<div className='bg-slate-900/80 w-full h-full z-10 font-sans mid:min-h-screen mid:min-w-screen px-6 py-12 md:px-12 mid:py-20 lg:px-32 text-gray-200 pb-20'>
				<div className='flex flex-col mid:flex-row justify-between mx-auto max-w-5xl'>
					<div></div>
					<Teaser />
					<div className='max-w-md xl:max-w-lg text-slate-400 flex flex-col mx-auto mid:mx-0 mid:pb-12'>
						<div className='flex flex-col gap-5 md:gap-3 py-14 mid:pb-0 mid:pt-16 text-center md:text-start'>
							<h1 className='font-semibold text-3xl tracking-wide text-gray-200'>Projects</h1>
							<p className='leading-relaxed'>
								My journey towards Frontend development materializes here with some of my projects.
								From the most recent to the ones I made when I was just starting.
							</p>
						</div>
						<div className='mid:pt-16 flex flex-col gap-10'>
							{projects.map(
								({
									title,
									description,
									supportText,
									technologies,
									demoLink,
									githubLink,
									images,
								}) => (
									<Project
										key={title}
										title={title}
										description={description}
										supportText={supportText}
										demoLink={demoLink}
										githubLink={githubLink}
										images={images}
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
