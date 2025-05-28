import Hero from '@/components/HeroTest';
//import AudioPlayerComponent from '@/components/AudioPlayer';  
import FancyAudioPlayer from '@/components/FancyAudioPlayer';
//import Agenda from '@/components/Agenda';
import EventCards from '@/components/EventCards';
//import EventCarousel from '../components/EventCarousel';
//import ContactForm from '@/components/Contact';
//import EventPosterGrid from '@/components/EventPosterGrid';
//import EventCarousel from '@/components/EventCarousel';
import Bio from '@/components/Bio';
//import BrandCarousel from '@/components/BrandCarousel';
//import BrandCarousel from '@/components/BrandCarousel';
import MediaGallery from '@/components/MediaGallery'; 


export default function Home() {
  return (
    <main>
        <Bio />
        
        <FancyAudioPlayer />
        <EventCards /> 
        <MediaGallery  />  
    </main>
  );
}
