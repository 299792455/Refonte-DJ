'use client';

import { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../../styles/AudioPlayer.css';

type Track = {
  _id: string;
  title: string;
  artist: string;
  album: string;
  year: number;
  genre: string;
  musicFile: string;
  coverImage: string;
};

export default function AudioPlayerComponent() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const BASE_AUDIO_URL = 'https://djsergiotelmo.com/musicFile/';
  const BASE_IMAGE_URL = 'https://djsergiotelmo.com/coverImages/';

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await fetch('/api/tracks');
        const data = await res.json();

        const formattedTracks = data.map((track: Track) => ({
          ...track,
          musicFile: `${BASE_AUDIO_URL}${track.musicFile}`,
          coverImage: `${BASE_IMAGE_URL}${track.coverImage}`,
        }));

        setTracks(formattedTracks);
      } catch (error) {
        console.error('Erreur lors du fetch des musiques:', error);
      }
    };

    fetchTracks();
  }, []);

  const trackToShow = currentTrackId
    ? tracks.find((t) => t._id === currentTrackId)
    : tracks[0];

  return (
    <section id="beats" className="parent-container">
      <div className="beats-title">
        <span className="dj-label">My</span>
        <span className="skill-label">BEATS</span>
      </div>

      {trackToShow && (
        <div className="now-playing-popup">
          <img src={trackToShow.coverImage} alt={trackToShow.title} className="now-playing-image" />
          <div className="now-playing-info">
            <h3>{trackToShow.title}</h3>
            <p>{trackToShow.artist}</p>
            <p>{trackToShow.album}</p>
          </div>
        </div>
      )}

      <div className="content-wrapper">
        <div className="track-list">
          {tracks.map((track) => (
            <div key={track._id} className="audio-track">
              <img src={track.coverImage} alt={track.title} className="track-image" />
              <h3>{track.title}</h3>
              <AudioPlayer
                src={track.musicFile}
                onPlay={() => {
                  setCurrentTrackId(track._id);
                  setMusicPlaying(true);
                }}
                onPause={() => setMusicPlaying(false)}
                showJumpControls={false}
                autoPlayAfterSrcChange={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
