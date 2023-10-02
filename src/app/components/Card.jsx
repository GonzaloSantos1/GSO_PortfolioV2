import Image from 'next/image'
import Link from 'next/link'

import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

function Card({ date, role, company, text, text2, technologies, link, logo }) {
	return (
		<div className='flex gap-3 mid:gap-2 items-start'>
			<div className='flex flex-col justify-start items-end gap-2'>
				{date && (
					<p
						className={`uppercase text-sm font-medium min-w-[90px] text-end pr-1 text-slate-500 ${
							date === 'current' && 'text-teal-500 animate-[pulse_4s_ease-in-out_infinite]'
						}`}
					>
						{date}
					</p>
				)}
				{logo && (
					<Image
						src={logo.src}
						width={30}
						height={30}
						alt={logo.name}
						className='mr-1.5 rounded opacity-90'
					/>
				)}
			</div>
			<div className='max-w-md'>
				<div className='flex flex-col gap-3'>
					<div className='flex flex-col'>
						{role && <h3 className='text-slate-200 -mt-0.5 font-semibold'>{role}</h3>}
						{company && <p>{company}</p>}
					</div>
					{text && <p className='font-light leading-normal text-sm'>{text}</p>}
					{text2 && <p className='font-light leading-normal text-sm'>{text2}</p>}
					{link && (
						<Link
							href={link}
							rel='noopener noreferrer'
							target='_blank'
						>
							<div className='border rounded-full px-3 py-1 w-fit text-sm flex items-center gap-2 hover:border-teal-500 hover:text-teal-500 ease-in-out transition duration-300 border-slate-400 text-slate-400'>
								<p>Show credential</p>
								<FaArrowUpRightFromSquare size={10} />
							</div>
						</Link>
					)}
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
		</div>
	)
}

export default Card
