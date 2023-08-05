import React from 'react';

function BackgroundGradient() {
  return (
    <div className='h-full -z-10 transform-gpu overflow-hidden blur-xl background-container'>
      <svg
        className='relative -z-10 max-w-none left-[80%] transform -translate-x-1/2 h-screen background-svg'
        viewBox='0 0 1155 678'
      >
        <defs>
          <linearGradient
            id='45de2b6b-92d5-4d68-a6a0-9b9b2abad533'
            x1='155.49'
            x2='-38.208'
            y1='.177'
            y2='474.645'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#9e69ff' />
            <stop offset='1' stopColor='#FF4ECD' />
          </linearGradient>
        </defs>

        <circle
          cx='500'
          cy='500'
          r='100'
          fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
          fillOpacity='0.65'
        />
        <circle
          cx='200'
          cy='600'
          r='62'
          fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
          fillOpacity='1'
        />
        <circle
          cx='150'
          cy='150'
          r='80'
          fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
          fillOpacity='0.6'
        />
        <circle
          cx='750'
          cy='200'
          r='123'
          fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
          fillOpacity='0.5'
        />
        <circle
          cx='800'
          cy='600'
          r='60'
          fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
          fillOpacity='0.7'
        />
        <circle
          cx='900'
          cy='300'
          r='92'
          fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
          fillOpacity='0.6'
        />
        <circle
          r='70'
          cx='400'
          cy='300'
          fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
          fillOpacity='0.8'
        />
      </svg>
    </div>
  );
}

export default BackgroundGradient;
