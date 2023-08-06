import React from 'react';
import Card from '../components/Card';
import experience from '../data/experience.json';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import Link from 'next/link';

function page() {
  return (
    <main className='w-screen overflow-y-scroll flex items-center justify-center bg-black'>
      <div className='bg-slate-900/80 w-full h-full z-10 flex justify-between mx-auto font-sans min-h-screen min-w-screen px-6 py-12 md:px-12 md:py-20 lg:px-24 text-gray-200'>
        <div></div>
        <div className='flex flex-col justify-between fixed h-[60%]'>
          <div className='max-w-sm flex flex-col gap-3'>
            <h1 className='font-bold text-5xl -ml-1'>Gonzalo Santos</h1>
            <h3 className='text-xl'>Frontend developer at EYSA</h3>
            <p className='text-slate-400 font-light'>
              I build accessible, inclusive products and digital experiences for the web.
            </p>
          </div>
          <div className='flex space-x-6'>
            <Link
              href='https://linkedin.com/in/gonzalosantosorellana'
              rel='noopener noreferrer'
              target='_blank'
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href='https://github.com/GonzaloSantos1'
              rel='noopener noreferrer'
              target='_blank'
            >
              <BsLinkedin size={30} />
            </Link>
          </div>
        </div>
        <div className='max-w-lg text-slate-400 flex flex-col'>
          <div className='flex flex-col gap-3'>
            <p className='leading-relaxed'>
              I&apos;m an enthusiastic frontend developer who enjoys coding cool things. I love the
              process of learning and exploring new stuff and pushing the boundaries of what can be
              done.
            </p>
            <p className='leading-relaxed'>
              Since I was young I&apos;ve always been passionate about creating websites. I started
              when I was 12 playing around with{' '}
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
          <div className='pt-32 flex flex-col gap-6'>
            {experience.map(({id, date, role, company, text, technologies}) => (
              <Card
                key={id}
                date={date}
                role={role}
                company={company}
                text={text}
                technologies={technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
