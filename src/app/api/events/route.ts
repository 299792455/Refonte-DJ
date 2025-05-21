// /app/api/events/route.ts
import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  name: String,
  place: String,
  date: Date,
});

const Event = mongoose.models.Event || mongoose.model('Event', EventSchema);
export async function GET() {
  try {
    await connectToDatabase();
    const events = await Event.find().sort({ date: 1 }).lean();
    return NextResponse.json(events);
  } catch (err) {
    console.error('❌ API /events error:', err);
    return NextResponse.json([], { status: 200 });
  }
}