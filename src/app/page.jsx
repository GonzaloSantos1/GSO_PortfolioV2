import About from './components/About';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import Technologies from './components/Technologies';

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center p-4 gap-3'>
      <HeroSection />
      <Technologies />
      <div className='flex gap-3 w-full h-full'>
        <ProjectsSection />
        <About />
      </div>
    </main>
  );
}
