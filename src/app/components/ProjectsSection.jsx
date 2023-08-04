import Image from 'next/image';
import React from 'react';

function ProjectsSection() {
  return (
    <div className='bg-zinc-800 px-6 py-4 rounded-2xl w-3/5'>
      <div className='flex gap-3 items-center'>
        <Image src={'/projects.svg'} width={30} height={30} alt='projects icon' />
        <h2 className='font-semibold text-xl text-white'>Projects</h2>
      </div>
    </div>
  );
}

export default ProjectsSection;
