import React from 'react';
import Image from 'next/image';
import {BsFillRocketFill} from 'react-icons/bs';
import {AiFillExperiment} from 'react-icons/ai';
import {PiCertificateFill} from 'react-icons/pi';
import {FaArrowUpRightFromSquare} from 'react-icons/fa6';
import Link from 'next/link';

function BottomSection({title, text, link}) {
  return (
    <div className='bg-zinc-900/70 backdrop-filter backdrop-blur-lg px-4 py-3 2xl:p-6 rounded-2xl w-full md:w-1/3 hover:bg-zinc-800 transition duration-500 ease-in-out min-h-[120px] md:min-h-full group'>
      <Link href={link}>
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
              {title === 'certificates' && (
                <PiCertificateFill size={'2em'} className='text-orange-500 2xl:text-3xl' />
              )}
              <h2 className='font-semibold text-2xl xl:text-3xl 2xl:text-4xl extralarge:text-6xl text-gray-50 tracking-wide capitalize'>
                {title}
              </h2>
            </div>
            <FaArrowUpRightFromSquare
              size={20}
              className={`text-gray-400 group-hover:scale-110 transition ease-in-out duration-300 ${
                title === 'projects' && 'group-hover:text-rose-500'
              } ${title === 'experience' && 'group-hover:text-fuchsia-500'} ${
                title === 'certificates' && 'group-hover:text-orange-500'
              }`}
            />
          </div>
          <p className='italic text-zinc-400 font-medium text-sm xl:text-base 2xl:text-2xl extralarge:text-4xl leading-snug 2xl:leading-normal px-2'>
            {text}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default BottomSection;
