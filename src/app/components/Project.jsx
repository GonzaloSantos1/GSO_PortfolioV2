import Image from 'next/image'
import Link from 'next/link'

import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { BsGithub } from 'react-icons/bs'

function Project({ title, description, supportText, technologies, demoLink, githubLink, images }) {
	return (
		<div className='border-y border-fuchsia-500/40 p-5 bg-slate-900/40 z-20'>
			<div className='flex flex-col gap-4'>
				{title && <h3 className='text-slate-200 -mt-0.5 font-semibold'>{title}</h3>}
				{description && <p className='font-light leading-normal text-sm'>{description}</p>}
				{supportText && <p className='font-light leading-normal text-sm'>{supportText}</p>}
				{images.length > 0 && (
					<div className='hidden mid:flex justify-around'>
						{images.map(image =>
							images.length > 2 ? (
								<Image
									key={image}
									src={image}
									width={150}
									height={150}
									style={{ height: 'auto' }}
									loading='lazy'
									alt={image}
								/>
							) : (
								<Image
									key={image}
									src={image}
									width={200}
									height={200}
									style={{ height: 'auto' }}
									loading='lazy'
									alt={image}
								/>
							)
						)}
					</div>
				)}
				<div className='flex gap-3 w-full items-center'>
					{demoLink && (
						<Link
							href={demoLink}
							rel='noopener noreferrer'
							target='_blank'
						>
							<div className='border rounded-full px-3 py-1 w-fit text-sm flex items-center gap-2 hover:border-teal-500 hover:text-teal-500 ease-in-out transition duration-300 border-slate-400 text-slate-400'>
								<p>Demo</p>
								<FaArrowUpRightFromSquare size={10} />
							</div>
						</Link>
					)}
					{githubLink.length > 1 ? (
						githubLink.map(link => (
							<div
								key={link.text}
								className='group'
							>
								<Link
									href={link.url}
									rel='noopener noreferrer'
									target='_blank'
									className='flex flex-col items-center gap-1'
								>
									<BsGithub
										size={24}
										className='group-hover:text-teal-500 transition ease-in-out duration-500'
									/>
									<p className='text-slate-400 text-xs group-hover:text-teal-500 transition ease-in-out duration-500'>
										{link.text}
									</p>
								</Link>
							</div>
						))
					) : (
						<Link
							href={githubLink[0]}
							rel='noopener noreferrer'
							target='_blank'
						>
							<BsGithub
								size={24}
								className='hover:text-teal-500 transition ease-in-out duration-500'
							/>
						</Link>
					)}
				</div>
				{technologies && (
					<div className='flex gap-2 flex-wrap py-0.5'>
						{technologies.map(tech => (
							<div
								key={tech}
								className='rounded-full bg-fuchsia-500/20 text-fuchsia-500 px-3 py-1 text-xs font-medium'
							>
								{tech}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default Project
