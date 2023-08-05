import React from 'react';
import Image from 'next/image';

function Location() {
  return (
    <div className='bg-zinc-800 w-full rounded-2xl p-2 md:p-4 flex flex-col justify-between items-center overflow-hidden'>
      <div className='flex justify-between items-center w-full px-2'>
        <p className='text-zinc-400 text-sm'>Based in</p>
        <p className='text-white font-semibold pr-1 text-lg md:text-xl'>Spain</p>
      </div>
      <Image
        src='/spain.png'
        width={150}
        height={150}
        alt='Spain illustration'
        className='w-[65%] xl:w-[50%] tabletrot:w-[45%] 2xl:w-[60%] extralarge:w-[75%] h-auto'
      />
    </div>
  );
}

export default Location;
