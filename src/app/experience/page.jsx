import React from 'react';
import Card from '../components/Card';
import experience from '../data/experience.json';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import Link from 'next/link';

function page() {
  return (
    <main className='w-screen overflow-y-scroll flex items-center justify-center bg-black scroll-smooth'>
      <div className='bg-slate-900/80 w-full h-full z-10 font-sans mid:min-h-screen mid:min-w-screen px-6 py-12 md:px-12 mid:py-20 lg:px-32 text-gray-200 pb-20'>
        <div className='flex flex-col mid:flex-row justify-between mx-auto max-w-5xl'>
          <div></div>
          <div className='flex flex-col items-center mid:items-start gap-6 mid:gap-0 mid:justify-between mid:fixed mid:h-[60%] mid:pt-14 mid:pl-10'>
            <div className='max-w-sm flex flex-col gap-3 text-center mid:text-start'>
              <h1 className='font-bold text-5xl -ml-1'>Experience</h1>
              <h3 className='text-xl'>Frontend developer at EYSA</h3>
              <p className='text-slate-400 font-light max-w-xs'>
                Creating captivating web experiences by synergizing frontend craftsmanship and UX/UI
                design expertise.
              </p>
            </div>
            <div className='flex space-x-6'>
              <Link
                href='https://linkedin.com/in/gonzalosantosorellana'
                rel='noopener noreferrer'
                target='_blank'
              >
                <BsGithub
                  size={30}
                  className='hover:scale-125 transition ease-in-out duration-500'
                />
              </Link>
              <Link
                href='https://github.com/GonzaloSantos1'
                rel='noopener noreferrer'
                target='_blank'
              >
                <BsLinkedin
                  size={30}
                  className='hover:scale-125 transition ease-in-out duration-500'
                />
              </Link>
            </div>
          </div>
          <div className='max-w-sm xl:max-w-lg text-slate-400 flex flex-col mx-auto mid:mx-0'>
            <div className='flex flex-col gap-3 py-16 mid:pb-0 mid:pt-16'>
              <p className='leading-relaxed'>
                Since I was young I&apos;ve always been passionate about creating websites. I
                started when I was 12 playing around with{' '}
                <span className='text-fuchsia-500 font-medium'>Adobe Dreamweaver</span>, going
                slightly through <span className='text-blue-500 font-medium'>Wordpress</span> and
                tinkering with <span className='text-green-500 font-medium'>Shopify</span> themes.
              </p>
              <p className='leading-relaxed'>
                Back in 2021, I embarked on my journey into fullstack development, landing my first
                frontend role. Proficient in{' '}
                <span className='underline underline-offset-4'>MERN</span> stack and{' '}
                <span className='underline underline-offset-4'>NextJS</span>. Recently I have set my
                sights on hybrid and native app development fiddling with{' '}
                <span className='text-sky-500 font-medium'>React Native</span> and{' '}
                <span className='font-medium text-orange-500'>SwiftUI</span>.
              </p>
            </div>
            <div className='mid:pt-32 flex flex-col gap-10'>
              {experience.map(({id, date, role, company, text, text2, technologies, logo}) => (
                <Card
                  key={id}
                  date={date}
                  logo={logo}
                  role={role}
                  company={company}
                  text={text}
                  text2={text2}
                  technologies={technologies}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
