import React from 'react';

function Teaser() {
  return (
    <div className='rounded-2xl bg-slate-900/70 shadow backdrop-filter backdrop-blur-lg text-white text-start p-4 md:p-6 w-full md:h-[60%] flex items-center'>
      <h1 className='capitalize font-bold text-2xl text-center md:text-start md:text-4xl lg:text-[2.5rem] xl:text-5xl 2xl:text-6xl large:text-7xl extralarge:text-[7rem] leading-tight xl:px-8 2xl:leading-[1.3]'>
        Bringing your ideas to life through{' '}
        <span className='bg-gradient-to-r from-violet-500 via-purple-500 to-rose-500 bg-clip-text text-transparent'>
          Frontend development
        </span>{' '}
      </h1>
    </div>
  );
}

export default Teaser;
