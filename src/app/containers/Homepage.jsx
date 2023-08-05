import React from 'react';
import Picture from '../components/Picture';
import Name from '../components/Name';
import Location from '../components/Location';
import SocialMedia from '../components/SocialMedia';
import Teaser from '../components/Teaser';
import Summary from '../components/Summary';

function Homepage() {
  return (
    <div className='flex flex-col md:flex-row w-full gap-2 z-10'>
      <div className='flex flex-col w-full md:w-1/2 gap-2 order-2 md:order-1'>
        <Teaser />
        <Summary />
      </div>
      <div className='w-full md:w-1/2 flex flex-col gap-2 order-1 md:order-2'>
        <Name />
        <div className='flex gap-2 h-full'>
          <Picture />
          <div className='w-1/2 h-full flex flex-col gap-2'>
            <Location />
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
