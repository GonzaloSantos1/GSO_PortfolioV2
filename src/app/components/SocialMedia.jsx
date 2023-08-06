import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function SocialMedia() {
  return (
    <div className='flex justify-between w-full gap-2'>
      <div className='relative w-1/2 shadow'>
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
      <div className='relative w-1/2 shadow'>
        <Link href='https://github.com/GonzaloSantos1' rel='noopener noreferrer' target='_blank'>
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
  );
}

export default SocialMedia;
