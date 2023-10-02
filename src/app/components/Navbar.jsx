'use client'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

function Navbar() {
	const pathname = usePathname()

	return (
		<nav className='flex justify-center md:justify-start w-full text-gray-200'>
			<ul className='flex flex-col gap-3 text-xl items-center md:items-start'>
				<Link href='/'>
					<li
						className={`${pathname === '/' ? 'text-teal-500' : 'transition hover:text-teal-500'}`}
					>
						<span className='hidden md:inline-flex text-gray-600 pr-2'>⸺</span> Experience
					</li>
				</Link>
				<Link href='/projects'>
					<li
						className={`${
							pathname === '/projects' ? 'text-fuchsia-500' : 'transition hover:text-fuchsia-500'
						}`}
					>
						<span className='hidden md:inline-flex text-gray-600 pr-2'>⸺</span> Projects
					</li>
				</Link>
				<Link href='/education'>
					<li
						className={`${
							pathname === '/education' ? 'text-orange-500' : 'transition hover:text-orange-500'
						}`}
					>
						<span className='hidden md:inline-flex text-gray-600 pr-2'>⸺</span> Education
					</li>
				</Link>
			</ul>
		</nav>
	)
}

export default Navbar
