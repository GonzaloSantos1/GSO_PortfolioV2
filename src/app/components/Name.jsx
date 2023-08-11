import React from 'react'

function Name() {
	return (
		<div className='bg-slate-900/70 shadow  backdrop-filter backdrop-blur-lg w-full rounded-2xl p-4 flex justify-center md:justify-end'>
			<div className='flex flex-col items-center md:items-end justify-center gap-2'>
				<h2 className='font-bold text-white pr-1 text-4xl md:text-3xl xl:text-5xl'>
					Gonzalo Santos
				</h2>
				<div className='rounded-full bg-emerald-200/20 text-emerald-500 py-1 px-2 text-[10px] w-fit flex gap-2 justify-center items-center'>
					<span className='relative flex h-2 w-2'>
						<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75'></span>
						<span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
					</span>
					<p className='font-bold font-sans z-50'>OPEN TO JOB OPPORTUNITIES</p>
				</div>
			</div>
		</div>
	)
}

export default Name
