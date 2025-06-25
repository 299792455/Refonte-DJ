import Hero from '@/components/HeroTest';
//import AudioPlayerComponent from '@/components/AudioPlayer';  
import FancyAudioPlayer from '@/components/FancyAudioPlayer';
//import Agenda from '@/components/Agenda';
import EventCards from '@/components/EventCards';
//import EventCarousel from '../components/EventCarousel';
import ContactForm from '@/components/Contact';
//import EventPosterGrid from '@/components/EventPosterGrid';
//import EventCarousel from '@/components/EventCarousel';
import Bio from '@/components/Bio';
//import BrandCarousel from '@/components/BrandCarousel';
import MediaGallery from '@/components/MediaGallery'; 
import CarouselBrand from '@/components/CarouselBrand';

export default function Home() {
  return (
      <main>
           <div id="bio">
    <Bio />
  </div>

  <div id="beats">
    <FancyAudioPlayer />
  </div>

  <div id="eventos">
    <EventCards />
  </div>

  <div id="galeria">
    <MediaGallery />
  </div>

  <div className="carousel-bottom">
    <CarouselBrand />
  </div>

  <div id="contact">
    <ContactForm />
  </div>
      </main>
  );
}
