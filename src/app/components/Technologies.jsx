import Image from 'next/image';
import React from 'react';

function Technologies() {
  return (
    <div className='bg-zinc-800 px-4 md:px-6 py-6 w-full rounded-2xl flex flex-col md:flex-row gap-6 md:gap-0 justify-center 2xl:px-20 large:px-32'>
      <div className='flex justify-around w-full md:w-1/2'>
        <Image
          src='/logos/figma.svg'
          width={50}
          height={50}
          alt='Figma icon'
          className='transition duration-300 ease-in-out hover:scale-150 2xl:w-[70px] large:w-[100px]'
        />
        <Image
          src='/logos/jest.svg'
          width={50}
          height={50}
          alt='Jest icon'
          className='transition duration-300 ease-in-out hover:scale-150 2xl:w-[70px] large:w-[100px]'
        />
        <Image
          src='/logos/javascript.svg'
          width={50}
          height={50}
          alt='Javascript icon'
          className='transition duration-300 ease-in-out hover:scale-150 2xl:w-[70px] large:w-[100px]'
        />
        <Image
          src='/logos/typescript.svg'
          width={50}
          height={50}
          alt='Typescript icon'
          className='transition duration-300 ease-in-out hover:scale-150 2xl:w-[70px] large:w-[100px]'
        />
        <div className='relative transition duration-300 ease-in-out hover:scale-150 2xl:w-[70px] large:w-[100px]'>
          <Image
            src='/logos/nextjs.svg'
            width={50}
            height={50}
            alt='Nextjs icon'
            className='z-50 relative 2xl:w-[70px] large:w-[100px]'
          />
          <div className='bg-white h-10 w-9 2xl:h-12 2xl:w-12 large:h-20 large:w-16 absolute rounded-full top-2 right-1 2xl:top-5 2xl:right-2.5 large:top-4'></div>
        </div>
      </div>
      <div className='flex justify-around w-full md:w-1/2'>
        <Image
          src='/logos/react.svg'
          width={50}
          height={50}
          alt='Reactjs icon'
          className='transition duration-300 ease-in-out hover:scale-150 2xl:w-[70px] large:w-[100px]'
        />
        <Image
          src='/logos/swift.svg'
          width={50}
          height={50}
          alt='Swift icon'
          className='transition duration-300 ease-in-out hover:scale-150 2xl:w-[70px] large:w-[100px]'
        />
        <Image
          src='/logos/mongodb.svg'
          width={50}
          height={50}
          alt='Mongodb icon'
          className='transition duration-300 ease-in-out hover:scale-150 2xl:w-[70px] large:w-[100px]'
        />
        <Image
          src='/logos/nodejs.svg'
          width={50}
          height={50}
          alt='Nodejs icon'
          className='transition duration-300 ease-in-out hover:scale-150 2xl:w-[70px] large:w-[100px]'
        />
        <Image
          src='/logos/tailwindcss.svg'
          width={50}
          height={50}
          alt='Tailwindcss icon'
          className='transition duration-300 ease-in-out hover:scale-150 2xl:w-[70px] large:w-[100px]'
        />
      </div>
    </div>
  );
}

export default Technologies;
