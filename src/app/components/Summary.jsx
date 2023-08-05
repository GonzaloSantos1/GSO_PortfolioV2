import React from 'react';
import FlipCard from './FlipCard';

function Summary() {
  return (
    <div className='w-full flex gap-3 md:h-[40%]'>
      <div className='h-full w-full flex flex-col items-center justify-center rounded-2xl bg-orange-500 min-h-[111px] mobile:min-h-[150px]'>
        <p className='font-bold text-6xl md:text-7xl 2xl:text-[6rem] extralarge:text-[10rem]'>2+</p>
        <p className='font-medium text-center text-xs 2xl:text-3xl extralarge:text-5xl px-2 md:text-base leading-normal'>
          Years of experience
        </p>
      </div>
      <div className='h-full w-full flex flex-col items-center justify-center min-h-[111px] mobile:min-h-[150px]'>
        <FlipCard
          frontContent={
            <div className='text-4xl font-extrabold lg:text-5xl 2xl:text-[4rem] extralarge:text-[7rem] bg-gradient-to-r from-teal-500 to-violet-500 bg-clip-text text-transparent md:bg-transparent md:text-white'>
              UX/UI
            </div>
          }
          backContent={<div></div>}
        />
      </div>
      <div className='h-full w-full flex flex-col items-center justify-center rounded-2xl bg-rose-500 min-h-[111px] mobile:min-h-[150px]'>
        <p className='font-bold text-4xl lg:text-5xl 2xl:text-[5rem] extralarge:text-[7rem] text-center'>
          Web
          <br />
          App
        </p>
      </div>
    </div>
  );
}

export default Summary;
