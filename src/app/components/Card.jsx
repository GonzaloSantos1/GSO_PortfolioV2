import React from 'react';

function Card({date, role, company, text, technologies}) {
  return (
    <div className='flex gap-1 items-start'>
      <p className='uppercase text-sm text-slate-500 font-medium min-w-[120px]'>{date}</p>
      <div className='max-w-md'>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col'>
            <h3 className='text-slate-200 -mt-0.5 font-semibold'>{role}</h3>
            <p>{company}</p>
          </div>
          <p className='font-light leading-normal text-sm'>{text}</p>
          <div className='flex gap-2 flex-wrap'>
            {technologies.map((tech) => (
              <div
                key={tech}
                className='rounded-full bg-fuchsia-500/20 text-fuchsia-500 px-3 py-1 text-xs font-medium'
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
