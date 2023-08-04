import Image from 'next/image';
import React from 'react';

function Technologies() {
  return (
    <div className='bg-zinc-800 px-8 py-4 w-full rounded-2xl flex justify-between gap-3 md:gap-0 md:justify-around flex-wrap'>
      <Image
        src='/logos/figma.svg'
        width={50}
        height={50}
        alt='Figma icon'
        className='transition duration-300 ease-in-out hover:scale-150'
      />
      <Image
        src='/logos/jest.svg'
        width={50}
        height={50}
        alt='Jest icon'
        className='transition duration-300 ease-in-out hover:scale-150'
      />
      <Image
        src='/logos/javascript.svg'
        width={50}
        height={50}
        alt='Javascript icon'
        className='transition duration-300 ease-in-out hover:scale-150'
      />
      <Image
        src='/logos/typescript.svg'
        width={50}
        height={50}
        alt='Typescript icon'
        className='transition duration-300 ease-in-out hover:scale-150'
      />
      <div className='relative transition duration-300 ease-in-out hover:scale-150'>
        <Image
          src='/logos/nextjs.svg'
          width={50}
          height={50}
          alt='Nextjs icon'
          className='z-50 relative'
        />
        <div className='bg-white h-10 w-9 absolute rounded-full top-2 right-1'></div>
      </div>
      <Image
        src='/logos/react.svg'
        width={50}
        height={50}
        alt='Reactjs icon'
        className='transition duration-300 ease-in-out hover:scale-150'
      />
      <Image
        src='/logos/swift.svg'
        width={50}
        height={50}
        alt='Swift icon'
        className='transition duration-300 ease-in-out hover:scale-150'
      />
      <Image
        src='/logos/mongodb.svg'
        width={50}
        height={50}
        alt='Mongodb icon'
        className='transition duration-300 ease-in-out hover:scale-150'
      />
      <Image
        src='/logos/nodejs.svg'
        width={50}
        height={50}
        alt='Nodejs icon'
        className='transition duration-300 ease-in-out hover:scale-150'
      />
      <Image
        src='/logos/tailwindcss.svg'
        width={50}
        height={50}
        alt='Tailwindcss icon'
        className='transition duration-300 ease-in-out hover:scale-150'
      />
    </div>
  );
}

export default Technologies;
