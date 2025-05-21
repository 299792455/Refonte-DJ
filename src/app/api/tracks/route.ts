import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import mongoose from 'mongoose';

const BASE_AUDIO_URL = 'https://djsergiotelmo.com/musicFile/';
const BASE_IMAGE_URL = 'https://djsergiotelmo.com/coverImages/';

const TrackSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  artist: { type: String, required: true, trim: true },
  album: { type: String, required: true, trim: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true, trim: true },
  musicFile: { type: String, required: true },
  coverImage: { type: String, required: true },
});

const Track = mongoose.models.Track || mongoose.model('Track', TrackSchema);

export async function GET() {
  try {
    await connectToDatabase();

    const rawTracks = await Track.find().lean();

    // Transforme les noms en URLs complètes ici
    const formatted = rawTracks.map(track => ({
      ...track,
      musicFile: `${BASE_AUDIO_URL}${track.musicFile}`,
      coverImage: `${BASE_IMAGE_URL}${track.coverImage}`,
    }));

    return NextResponse.json(formatted, { status: 200 });
  } catch (error: any) {
    console.error('Erreur API /api/tracks :', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
