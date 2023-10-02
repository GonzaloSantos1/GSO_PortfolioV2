import Link from 'next/link'
import { Navbar } from '.'

import { BsGithub, BsLinkedin } from 'react-icons/bs'

function Teaser() {
	return (
		<div className='flex flex-col items-center mid:items-start gap-12 mid:gap-0 mid:justify-between mid:fixed mid:h-[70%] mid:pt-14 mid:pl-10'>
			<div className='max-w-sm flex flex-col gap-3 text-center mid:text-start'>
				<h1 className='font-bold text-6xl -ml-1'>Gonzalo Santos</h1>
				<h3 className='text-xl text-fuchsia-500'>
					Frontend developer at <strong>EYSA</strong>
				</h3>
				<p className='text-slate-400 font-light md:max-w-xs'>
					Creating captivating web experiences by synergizing frontend craftsmanship and UX/UI
					design expertise.
				</p>
			</div>
			<Navbar />
			<div className='flex space-x-6'>
				<Link
					href='https://linkedin.com/in/gonzalosantosorellana'
					rel='noopener noreferrer'
					target='_blank'
				>
					<BsGithub
						size={30}
						className='hover:scale-125 transition ease-in-out duration-500'
					/>
				</Link>
				<Link
					href='https://github.com/GonzaloSantos1'
					rel='noopener noreferrer'
					target='_blank'
				>
					<BsLinkedin
						size={30}
						className='hover:scale-125 transition ease-in-out duration-500'
					/>
				</Link>
			</div>
		</div>
	)
}

export default Teaser
