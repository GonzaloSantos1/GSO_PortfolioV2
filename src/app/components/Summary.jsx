import React from 'react';

function Summary() {
  const today = new Date();
  const experience = Math.floor(today.getFullYear() - 2022);

  return (
    <div className='w-full flex gap-2 md:h-[40%]'>
      <div className='aspect-square md:aspect-auto h-full w-full flex flex-col items-center justify-center rounded-2xl bg-orange-500 shadow'>
        <p className='font-bold text-6xl md:text-7xl 2xl:text-[6rem] extralarge:text-[10rem]'>
          {experience}+
        </p>
        <p className='font-medium text-center text-xs 2xl:text-3xl extralarge:text-5xl px-2 md:text-base leading-normal'>
          Years of experience
        </p>
      </div>
      <div className='aspect-square md:aspect-auto h-full w-full flex flex-col items-center justify-center rounded-2xl bg-teal-500 shadow'>
        <p className='font-bold text-4xl lg:text-5xl 2xl:text-[5rem] extralarge:text-[7rem] text-center'>
          UX/UI
        </p>
      </div>
      <div className='aspect-square md:aspect-auto h-full w-full flex flex-col items-center justify-center rounded-2xl bg-rose-500 shadow'>
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
