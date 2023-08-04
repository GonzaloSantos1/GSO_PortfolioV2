'use client';
import {useState, useEffect} from 'react';

const FlipCard = ({frontContent, backContent}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prevIsFlipped) => !prevIsFlipped);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
      <div className='flip-card-inner flex justify-center items-center'>
        <div className='flip-card-front rounded-2xl bg-teal-500 text-5xl w-full h-full'>
          {frontContent}
        </div>
        <div className='flip-card-back rounded-2xl w-28 h-28 md:w-32 md:h-32 lg:w-full lg:h-full'>
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
