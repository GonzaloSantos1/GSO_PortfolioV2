import React from 'react';
import {BsFillRocketFill} from 'react-icons/bs';
import {AiFillExperiment} from 'react-icons/ai';
import {PiCertificateFill} from 'react-icons/pi';
import {FaArrowUpRightFromSquare} from 'react-icons/fa6';
import Link from 'next/link';

function BottomSection({title, text, link}) {
  return (
    <Link href={link} className='w-full md:w-1/3'>
      <div className='bg-slate-900/70 shadow backdrop-filter backdrop-blur-lg px-4 py-3 2xl:p-6 rounded-2xl w-full hover:bg-slate-900 transition duration-500 ease-in-out min-h-[120px] md:min-h-full group'>
        <div className='flex flex-col space-y-3'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2 2xl:gap-6 items-center'>
              {title === 'projects' && (
                <BsFillRocketFill
                  size={'2em'}
                  className='text-rose-500 rotate-[30deg] 2xl:text-3xl'
                />
              )}
              {title === 'experience' && (
                <AiFillExperiment size={'2em'} className='text-fuchsia-500 2xl:text-3xl' />
              )}
              {title === 'education' && (
                <PiCertificateFill size={'2em'} className='text-orange-500 2xl:text-3xl' />
              )}
              <div className='relative'>
                <h2 className='font-bold text-2xl xl:text-3xl 2xl:text-4xl extralarge:text-6xl text-gray-50 tracking-wide capitalize z-20 relative'>
                  {title}
                </h2>
                <div
                  className={`absolute h-2 w-[110%] ${
                    title === 'experience' && 'bg-fuchsia-500/60 group-hover:bg-fuchsia-500/80'
                  } ${title === 'education' && 'bg-orange-500/60 group-hover:bg-orange-500/80'} ${
                    title === 'projects' && 'bg-rose-500/60 group-hover:bg-rose-500/80'
                  } top-[13px] xl:top-[15px] -left-1 group-hover:scale-y-[3.8] xl:group-hover:scale-y-[4.3] transition-transform ease-in-out duration-500`}
                ></div>
              </div>
            </div>
            <FaArrowUpRightFromSquare
              size={18}
              className={`text-gray-400 group-hover:scale-110 transition ease-in-out duration-300 ${
                title === 'projects' && 'group-hover:text-rose-500'
              } ${title === 'experience' && 'group-hover:text-fuchsia-500'} ${
                title === 'education' && 'group-hover:text-orange-500'
              }`}
            />
          </div>
          <p className='italic text-slate-400 text-sm xl:text-base 2xl:text-2xl extralarge:text-4xl leading-snug 2xl:leading-normal px-2 font-sans'>
            {text}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BottomSection;
