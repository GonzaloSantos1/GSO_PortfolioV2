import React from 'react';

function Name() {
  return (
    <div className='bg-zinc-900/70  backdrop-filter backdrop-blur-lg w-full rounded-2xl p-4 flex justify-center md:justify-end'>
      <div className='flex flex-col items-center md:items-end justify-center gap-2'>
        <h2 className='font-semibold text-white pr-1 text-4xl md:text-3xl xl:text-5xl'>
          Gonzalo Santos
        </h2>
        <div className='rounded-full bg-emerald-300 text-green-700 py-1 px-2 text-[10px] w-fit flex gap-2 justify-center items-center'>
          <span className='relative flex h-2 w-2'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-700 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-2 w-2 bg-green-700'></span>
          </span>
          <p className='font-bold'>OPEN TO JOB OPPORTUNITIES</p>
        </div>
      </div>
    </div>
  );
}

export default Name;
