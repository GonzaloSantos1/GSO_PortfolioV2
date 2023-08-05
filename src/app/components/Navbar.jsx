'use client';
import React from 'react';
import {usePathname} from 'next/navigation';
import {IoHome} from 'react-icons/io5';
import {BsFillRocketFill} from 'react-icons/bs';
import {AiFillExperiment} from 'react-icons/ai';
import {PiCertificateFill} from 'react-icons/pi';
import {Tooltip} from 'react-tooltip';
import Link from 'next/link';

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className='flex justify-center items-center'>
      <ul className='fixed bottom-2 flex space-x-6 bg-zinc-700/30 backdrop-blur-[2px] rounded-full py-2 px-3 2xl:px-4 2xl:py-3'>
        <Link href='/'>
          <li
            data-tooltip-id='my-tooltip'
            data-tooltip-content={`${pathname === '/' ? "You're here!" : 'Home'}`}
            data-tooltip-place='top'
            className={`border-2 rounded-full p-2 xl:p-3 transition ease-in-out duration-200 cursor-pointer bg-zinc-900  backdrop-filter backdrop-blur-lg ${
              pathname === '/'
                ? 'text-rose-500 border-rose-500'
                : 'hover:text-rose-500 text-gray-300 hover:border-rose-500 hover:scale-110'
            }`}
          >
            <IoHome size={'1.5em'} className='2xl:text-xl extralarge:text-4xl' />
          </li>
        </Link>
        <Link href='/projects'>
          <li
            data-tooltip-id='my-tooltip'
            data-tooltip-content={`${pathname === '/projects' ? "You're here!" : 'Projects'}`}
            data-tooltip-place='top'
            className={`border-2 rounded-full p-2 xl:p-3 transition ease-in-out duration-200 cursor-pointer bg-zinc-900  backdrop-filter backdrop-blur-lg ${
              pathname === '/projects'
                ? 'text-teal-500 border-teal-500'
                : 'hover:text-teal-500 text-gray-300 hover:border-teal-500 hover:scale-110'
            }`}
          >
            <BsFillRocketFill size={'1.5em'} className='2xl:text-xl extralarge:text-4xl' />
          </li>
        </Link>
        <Link href='/experience'>
          <li
            data-tooltip-id='my-tooltip'
            data-tooltip-content={`${pathname === '/experience' ? "You're here!" : 'Experience'}`}
            data-tooltip-place='top'
            className={`border-2 rounded-full p-2 xl:p-3 transition ease-in-out duration-200 cursor-pointer bg-zinc-900  backdrop-filter backdrop-blur-lg ${
              pathname === '/experience'
                ? 'text-fuchsia-500 border-fuchsia-500'
                : 'hover:text-fuchsia-500 text-gray-300 hover:border-fuchsia-500 hover:scale-110'
            }`}
          >
            <AiFillExperiment size={'1.5em'} className='2xl:text-xl extralarge:text-4xl' />
          </li>
        </Link>
        <Link href='/certificates'>
          <li
            data-tooltip-id='my-tooltip'
            data-tooltip-content={`${
              pathname === '/certificates' ? "You're here!" : 'Certificates'
            }`}
            data-tooltip-place='top'
            className={`border-2 rounded-full p-2 xl:p-3 transition ease-in-out duration-200 cursor-pointer bg-zinc-900  backdrop-filter backdrop-blur-lg ${
              pathname === '/certificates'
                ? 'text-orange-500 border-orange-500'
                : 'hover:text-orange-500 text-gray-300 hover:border-orange-500 hover:scale-110'
            }`}
          >
            <PiCertificateFill size={'1.5em'} className='2xl:text-xl extralarge:text-4xl' />
          </li>
        </Link>
      </ul>
      <Tooltip id='my-tooltip' className='hidden md:block' />
    </nav>
  );
}

export default Navbar;
