'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { IoHome } from 'react-icons/io5'
import { BsFillRocketFill } from 'react-icons/bs'
import { AiFillExperiment } from 'react-icons/ai'
import { PiCertificateFill } from 'react-icons/pi'
import { Tooltip } from 'react-tooltip'
import Link from 'next/link'

function Navbar() {
	const pathname = usePathname()

	return (
		<nav className='flex justify-center items-center]'>
			<ul className='fixed bottom-2 flex space-x-6 bg-slate-700/30 backdrop-blur-[2px] rounded-full py-3 px-2 2xl:px-4 2xl:py-3 z-50'>
				<Link href='/'>
					<li
						data-tooltip-id='my-tooltip'
						data-tooltip-content={`${pathname === '/' ? "You're here!" : 'Home'}`}
						data-tooltip-place='top'
						className={`border-2 rounded-full p-2 xl:p-3 transition ease-in-out duration-200 cursor-pointer bg-slate-900  backdrop-filter backdrop-blur-lg ${
							pathname === '/'
								? 'text-rose-500 border-rose-500'
								: 'hover:text-rose-500 text-gray-300 hover:border-rose-500 hover:scale-110'
						}`}
					>
						<IoHome
							size={24}
						/>
					</li>
				</Link>
				<Link href='/experience'>
					<li
						data-tooltip-id='my-tooltip'
						data-tooltip-content={`${pathname === '/experience' ? "You're here!" : 'Experience'}`}
						data-tooltip-place='top'
						className={`border-2 rounded-full p-2 xl:p-3 transition ease-in-out duration-200 cursor-pointer bg-slate-900  backdrop-filter backdrop-blur-lg ${
							pathname === '/experience'
								? 'text-fuchsia-500 border-fuchsia-500'
								: 'hover:text-fuchsia-500 text-gray-300 hover:border-fuchsia-500 hover:scale-110'
						}`}
					>
						<AiFillExperiment
							size={24}
						/>
					</li>
				</Link>
				<Link href='/projects'>
					<li
						data-tooltip-id='my-tooltip'
						data-tooltip-content={`${pathname === '/projects' ? "You're here!" : 'Projects'}`}
						data-tooltip-place='top'
						className={`border-2 rounded-full p-2 xl:p-3 transition ease-in-out duration-200 cursor-pointer bg-slate-900  backdrop-filter backdrop-blur-lg ${
							pathname === '/projects'
								? 'text-teal-500 border-teal-500'
								: 'hover:text-teal-500 text-gray-300 hover:border-teal-500 hover:scale-110'
						}`}
					>
						<BsFillRocketFill
							size={24}
					</li>
				</Link>
				<Link href='/education'>
					<li
						data-tooltip-id='my-tooltip'
						data-tooltip-content={`${pathname === '/education' ? "You're here!" : 'Education'}`}
						data-tooltip-place='top'
						className={`border-2 rounded-full p-2 xl:p-3 transition ease-in-out duration-200 cursor-pointer bg-slate-900  backdrop-filter backdrop-blur-lg ${
							pathname === '/education'
								? 'text-orange-500 border-orange-500'
								: 'hover:text-orange-500 text-gray-300 hover:border-orange-500 hover:scale-110'
						}`}
					>
						<PiCertificateFill
							size={24}
						/>
					</li>
				</Link>
			</ul>
			<Tooltip
				id='my-tooltip'
				style={{ backgroundColor: 'rgb(30,41,59', fontFamily: 'sans-serif' }}
				className='hidden md:block z-50 bg-slate-800'
			/>
		</nav>
	)
}

export default Navbar
