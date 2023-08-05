'use client';
import React from 'react';
import {IoHome} from 'react-icons/io5';
import {BsFillRocketFill} from 'react-icons/bs';
import {AiFillExperiment} from 'react-icons/ai';
import {PiCertificateFill} from 'react-icons/pi';
import {Tooltip} from 'react-tooltip';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className='flex justify-center items-center'>
      <ul className='fixed bottom-2 flex space-x-6 bg-zinc-700/80 backdrop-blur-[2px] rounded-2xl py-2 px-3 2xl:px-4 2xl:py-3'>
        <Link href='/'>
          <li
            data-tooltip-id='my-tooltip'
            data-tooltip-content='Home'
            data-tooltip-place='top'
            className='border rounded-2xl p-2 xl:p-3 hover:scale-110 transition ease-in-out duration-200 cursor-pointer hover:bg-zinc-800 hover:text-rose-500 text-gray-300 hover:border-rose-500'
          >
            <IoHome size={'1.25em'} className='2xl:text-xl extralarge:text-4xl' />
          </li>
        </Link>
        <Link href='/projects'>
          <li
            data-tooltip-id='my-tooltip'
            data-tooltip-content='Projects'
            data-tooltip-place='top'
            className='border rounded-2xl p-2 xl:p-3 hover:scale-110 transition ease-in-out duration-200 cursor-pointer hover:bg-zinc-800 hover:text-teal-500 text-gray-300 hover:border-teal-500'
          >
            <BsFillRocketFill size={'1.25em'} className='2xl:text-xl extralarge:text-4xl' />
          </li>
        </Link>
        <Link href='/experience'>
          <li
            data-tooltip-id='my-tooltip'
            data-tooltip-content='Experience'
            data-tooltip-place='top'
            className='border rounded-2xl p-2 xl:p-3 hover:scale-110 transition ease-in-out duration-200 cursor-pointer hover:bg-zinc-800 hover:text-fuchsia-500 text-gray-300 hover:border-fuchsia-500'
          >
            <AiFillExperiment size={'1.25em'} className='2xl:text-xl extralarge:text-4xl' />
          </li>
        </Link>
        <Link href='/certificates'>
          <li
            data-tooltip-id='my-tooltip'
            data-tooltip-content='Certificates'
            data-tooltip-place='top'
            className='border rounded-2xl p-2 xl:p-3 hover:scale-110 transition ease-in-out duration-200 cursor-pointer hover:bg-zinc-800 hover:text-orange-500 text-gray-300 hover:border-orange-500'
          >
            <PiCertificateFill size={'1.25em'} className='2xl:text-xl extralarge:text-4xl' />
          </li>
        </Link>
      </ul>
      <Tooltip id='my-tooltip' />
    </nav>
  );
}

export default Navbar;
