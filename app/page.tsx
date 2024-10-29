
import Principal from '@/components/principal/Principal';
import Proyects from '@/components/proyects/Proyects';
import Skills from '@/components/skills/Skills';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
    <div className='w-full flex flex-col items-center scroll-smooth'>
      <section id='principal' className='h-[82vh] w-full'>
        <Principal />
      </section>
      <section id='skills' className='pageContainer'>  
        <Skills /> 
      </section>
      <section id="proyects" className='w-full'>
        <Proyects />
      </section>
   </div>
  );
}
