import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FlipCard from './FlipCard';

function HeroSection() {
  return (
    <div className='flex flex-col md:flex-row w-full gap-3'>
      <div className='flex flex-col w-full md:w-1/2 gap-3 order-2 md:order-1'>
        <div className='rounded-2xl bg-zinc-800 text-white text-start p-4 md:p-6 lg:p-8 w-full md:h-[60%] flex items-center'>
          <h1 className='capitalize font-bold text-2xl text-center md:text-start md:text-4xl lg:text-5xl leading-tight'>
            Bringing your ideas to life through frontend development
          </h1>
        </div>
        {/**Section left bottom*/}
        <div className='w-full flex gap-3 md:h-[40%]'>
          <div className='h-full w-full flex flex-col items-center justify-center rounded-2xl bg-orange-500 min-h-[111px]'>
            <p className='font-bold text-6xl md:text-7xl'>2+</p>
            <p className='font-medium text-center text-xs px-2 md:px-0 md:text-base leading-tight'>
              Years of experience
            </p>
          </div>
          <div className='h-full w-full flex flex-col items-center justify-center min-h-[111px]'>
            <FlipCard
              frontContent={<div className='text-3xl md:text-4xl lg:text-5xl font-bold'>UX/UI</div>}
              backContent={<div></div>}
            />
          </div>
          <div className='h-full w-full flex flex-col items-center justify-center rounded-2xl bg-rose-500 min-h-[111px]'>
            <p className='font-bold text-4xl lg:text-5xl text-center'>
              Web
              <br />
              App
            </p>
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/2 flex flex-col gap-3 order-1 md:order-2'>
        <div className='bg-zinc-800 w-full rounded-2xl p-4 flex justify-center md:justify-end relative'>
          <div className='absolute top-28 left-14 md:top-10 md:left-4 flex items-start gap-2 z-30'>
            <Image
              src='/arrow.svg'
              width={120}
              height={120}
              alt='Arrow pointing to profile pic'
              className='hidden md:block w-14 mid:w-20 lg:w-32'
            />
            <p className='font-bold text-2xl md:text-lg rotate-[30deg] mt-4 bg-gradient-to-r from-fuchsia-500 to-rose-500 px-2'>
              that&apos;s me!
            </p>
          </div>
          <div className='flex flex-col items-center md:items-end justify-center gap-2'>
            <h2 className='font-semibold text-white pr-1 text-3xl'>Gonzalo Santos</h2>
            <div className='rounded-full bg-emerald-300 text-green-700 py-1 px-2 text-[10px] w-fit flex gap-2 justify-center items-center'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-700 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-green-700'></span>
              </span>
              <p className='font-bold'>OPEN TO JOB OPPORTUNITIES</p>
            </div>
          </div>
        </div>
        <div className='flex gap-3 h-full'>
          <div className='w-1/2 h-full bg-blue-500 rounded-2xl relative overflow-hidden'>
            <img src='/portfolio_pic.png' alt='profile pic' className='absolute w-screen top-20' />
          </div>
          <div className='w-1/2 h-full flex flex-col gap-3'>
            <div className='bg-zinc-800 w-full rounded-2xl p-4 flex flex-col justify-between items-center flex-1'>
              <div className='flex justify-between items-center w-full'>
                <p className='text-zinc-400 text-sm'>Based in</p>
                <p className='text-white font-semibold pr-1 text-base md:text-xl'>Spain</p>
              </div>
              <Image
                src='/spain.png'
                width={150}
                height={150}
                alt='Spain illustration'
                className='py-2'
              />
            </div>
            <div className='flex justify-between w-full gap-3'>
              <div className='relative w-1/2'>
                <Link
                  href='https://linkedin.com/in/gonzalosantosorellana'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <Image
                    src='/linkedin_1.png'
                    alt='Linkedin'
                    sizes='100vw'
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    width={500}
                    height={300}
                    className='rounded-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out'
                  />
                </Link>
              </div>
              <div className='relative w-1/2'>
                <Link
                  href='https://github.com/GonzaloSantos1'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <Image
                    src='/github_1.png'
                    alt='GitHub'
                    sizes='100vw'
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    width={500}
                    height={300}
                    className='rounded-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
