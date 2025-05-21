import Hero from '@/components/HeroTest';
//import AudioPlayerComponent from '@/components/AudioPlayer';  
import FancyAudioPlayer from '@/components/FancyAudioPlayer';
//import Agenda from '@/components/Agenda';
//import EventCards from '@/components/EventCards';
//import EventPosterCarousel from '@/components/EventPosterCarousel';
//import ContactForm from '@/components/Contact';
import EventPosterGrid from '@/components/EventPosterGrid';
//import EventCarousel from '@/components/EventCarousel';
import Bio from '@/components/Bio';

export default function Home() {
  return (
    <main>
      <Hero />
      <FancyAudioPlayer />
      <EventPosterGrid />
      <Bio />
     
    </main>
  );
}
