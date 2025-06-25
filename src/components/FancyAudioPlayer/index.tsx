'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '../../styles/FancyAudioPlayer.css';
import type { Swiper as SwiperType } from 'swiper';

export type Track = {
  _id: string;
  title: string;
  artist: string;
  album: string;
  year: number;
  genre: string;
  musicFile: string;
  coverImage: string;
};

export default function FancyAudioPlayer() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(2);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLInputElement>(null);
 const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const fetchTracks = async () => {
      const res = await fetch('/api/tracks');
      const data = await res.json();
      setTracks(data);
    };
    fetchTracks();
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = tracks[currentTrackIndex]?.musicFile;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentTrackIndex]);

  const playPause = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const nextTrack = () => {
    const next = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(next);
    swiperRef.current?.slideTo(next);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    const prev = currentTrackIndex - 1 < 0 ? tracks.length - 1 : currentTrackIndex - 1;
    setCurrentTrackIndex(prev);
    swiperRef.current?.slideTo(prev);
    setIsPlaying(true);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Number(e.target.value);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current || !progressRef.current) return;
    progressRef.current.value = String(audioRef.current.currentTime);
  };

  const handleMetadataLoaded = () => {
    if (!audioRef.current || !progressRef.current) return;
    progressRef.current.max = String(audioRef.current.duration);
  };

  return (
    <div className="audio-ui-container">
      <div className="hero-block">
  <div className="hero-line"><span>M</span><span>Y</span></div>
  <div className="hero-line"><span>B</span><span>E</span><span>A</span><span>T</span><span>S</span></div>
</div>

    
      <div className="album-cover">
        <Swiper
          modules={[EffectCoverflow]}
          effect="coverflow"
          centeredSlides
          initialSlide={currentTrackIndex}
          slidesPerView="auto"
          grabCursor
          spaceBetween={40}
          coverflowEffect={{ rotate: 25, stretch: 0, depth: 50, modifier: 1, slideShadows: false }}
          onSlideChange={({ activeIndex }) => setCurrentTrackIndex(activeIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {tracks.map((track) => (
            <SwiperSlide key={track._id} className="swiper-slide">
              <img src={track.coverImage} alt={track.title} />
              {/* <div className="overlay">
  <a href="#" target="_blank">
    <ion-icon name="logo-youtube"></ion-icon>
  </a>
</div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {tracks.length > 0 && (
        <div className="music-player">
          <h1>{tracks[currentTrackIndex].title}</h1>
          <p>{tracks[currentTrackIndex].artist}</p>

          <audio
            id="song"
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleMetadataLoaded}
          />

          <input
            type="range"
            defaultValue={0}
            id="progress"
            ref={progressRef}
            onInput={handleProgressChange}
          />

          <div className="controls">
            <button className="backward" onClick={prevTrack}>
              <i className="fa-solid fa-backward"></i>
            </button>
            <button className="play-pause-btn" onClick={playPause}>
              <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`} id="controlIcon"></i>
            </button>
            <button className="forward" onClick={nextTrack}>
              <i className="fa-solid fa-forward"></i>
            </button>
            
          </div>
        </div>
      )}
    </div>
  );
}