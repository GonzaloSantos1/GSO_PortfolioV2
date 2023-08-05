import Homepage from './containers/Homepage';
import BottomSection from './components/BottomSection';
import Technologies from './components/Technologies';

export default function Home() {
  return (
    <main className='flex pb-10 md:pb-4 md:h-screen flex-col items-center p-2 md:p-4 gap-2 bg-black text-white'>
      <Homepage />
      <Technologies />
      <div className='flex flex-col md:flex-row gap-2 w-full h-full'>
        <BottomSection
          title='experience'
          link='/experience'
          text='My journey through software development and my pre-development experience'
        />
        <BottomSection
          title='projects'
          link='/projects'
          text="See the projects I've been working on lately"
        />
        <BottomSection
          title='certificates'
          link='/certificates'
          text='Certificates, courses and studies'
        />
      </div>
    </main>
  );
}
