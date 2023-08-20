import React from 'react'
import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import projects from '../data/projects.json'
import Project from '../components/Project'

function page() {
  return (
    <main className='w-screen overflow-y-scroll flex items-center justify-center bg-black scroll-smooth'>
      <div className='bg-slate-900/80 w-full h-full z-10 font-sans mid:min-h-screen mid:min-w-screen px-6 py-12 md:px-12 mid:py-20 lg:px-32 text-gray-200 pb-20'>
        <div className='flex flex-col mid:flex-row justify-between mx-auto max-w-5xl'>
          <div></div>
          <div className='flex flex-col items-center mid:items-start gap-6 pb-16 mid:pb-0 mid:gap-0 mid:justify-between mid:fixed mid:h-[60%] mid:pt-14 mid:pl-10'>
            <div className='max-w-sm xl:max-w-lg flex flex-col gap-3 text-center mid:text-start'>
              <h1 className='font-bold text-5xl -ml-1'>Projects</h1>
              <h3 className='text-slate-400 font-light max-w-xs'>
                My journey towards Frontend development materializes here with some of my projects.
                From the most recent to the ones I made when I was just starting.
              </h3>
            </div>
            <div className='flex space-x-6'>
              <Link
                href='https://github.com/GonzaloSantos1'
                rel='noopener noreferrer'
                target='_blank'
              >
                <BsGithub
                  size={30}
                  className='hover:scale-125 transition ease-in-out duration-500'
                />
              </Link>
              <Link
                href='https://linkedin.com/in/gonzalosantosorellana'
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
          <div className='max-w-md text-slate-400 flex flex-col mx-auto mid:mx-0 mid:pb-12'>
            <div className='mid:pt-16 flex flex-col gap-10'>
              {projects.map(
                ({
                  title,
                  description,
                  supportText,
                  technologies,
                  demoLink,
                  githubLink,
                  images,
                }) => (
                  <Project
                    key={title}
                    title={title}
                    description={description}
                    supportText={supportText}
                    demoLink={demoLink}
                    githubLink={githubLink}
                    images={images}
                    technologies={technologies}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
