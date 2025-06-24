'use client';
import '@/styles/Bio.css';
import CarouselBrand from '../CarouselBrand';

export default function Bio() {
  

  return (
    <>
    
    <div className='bio-general'>
      <video
  className="bio-bg-video"
  autoPlay
  muted
  loop
  playsInline
>
  <source src="/Hero-DjTelmo-Mobile.mp4" type="video/mp4" />
</video>

      <div className="bio-wrapper">
        <div className="text-zone">
          <div className="hero-section">
              <div className="hero-line">
                <span>D</span>
                <span>J</span>
              </div>
              <div className="hero-line">
                <span>S</span>
                <span>E</span>
                <span>R</span>
                <span>G</span>
                <span>I</span>
                <span>O</span>
              </div>
              <div className="hero-line">
                <span>T</span>
                <span>E</span>
                <span>L</span>
                <span>M</span>
                <span>O</span>
              </div>
            </div>


          <div className="info-section">
            <p className="paragraph">
                  Cada beat que creo es un paso más cerca de hacerlos sonar a todo el mundo.
                </p>
            
            
          </div>
          <button className="spotify-btn">Escuchar</button>
        </div>

        <div className="image-zone">
          <img
            src="https://i.postimg.cc/fR1D5QCx/verde-Modifi.png"
            alt="DJ Sergio Telmo"
            className="bio-image"
          />
        </div>
      </div>
        
      </div>
     <CarouselBrand /> 
     
    </>
  );
}