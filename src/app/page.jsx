import React from 'react'
import { Card, Teaser } from './components'
import experience from './data/experience.json'

function page() {
	return (
		<main className='w-screen flex items-center justify-center'>
			<div className='bg-slate-900/80 w-full h-full z-10 font-sans mid:min-h-screen mid:min-w-screen px-6 py-12 md:px-12 mid:py-20 lg:px-32 text-gray-200 pb-20'>
				<div className='flex flex-col mid:flex-row justify-between mx-auto max-w-5xl'>
					<div></div>
					<Teaser />
					<div className='max-w-sm xl:max-w-lg text-slate-400 flex flex-col mx-auto mid:mx-0'>
						<div className='flex flex-col gap-5 md:gap-3 py-16 mid:pb-0 mid:pt-16'>
							<h1 className='font-semibold text-3xl tracking-wide text-gray-200 text-center md:text-start'>
								Experience
							</h1>
							<p className='leading-relaxed'>
								Since I was young I&apos;ve always been passionate about creating websites. I
								started when I was 12 playing around with{' '}
								<span className='text-fuchsia-500 font-medium'>Adobe Dreamweaver</span>, going
								slightly through <span className='text-blue-500 font-medium'>Wordpress</span> and
								tinkering with <span className='text-green-500 font-medium'>Shopify</span> themes.
							</p>
							<p className='leading-relaxed'>
								Back in 2021, I embarked on my journey into fullstack development, landing my first
								frontend role. Proficient in{' '}
								<span className='underline underline-offset-4'>MERN</span> stack and{' '}
								<span className='underline underline-offset-4'>NextJS</span>. Recently I have set my
								sights on hybrid and native app development fiddling with{' '}
								<span className='text-sky-500 font-medium'>React Native</span> and{' '}
								<span className='font-medium text-orange-500'>SwiftUI</span>.
							</p>
						</div>
						<div className='mid:pt-14 flex flex-col gap-10'>
							{experience.map(({ id, date, role, company, text, text2, technologies, logo }) => (
								<Card
									key={id}
									date={date}
									logo={logo}
									role={role}
									company={company}
									text={text}
									text2={text2}
									technologies={technologies}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default page
