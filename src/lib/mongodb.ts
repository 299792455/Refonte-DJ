// /lib/mongodb.ts
import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('⚠️ Define MONGODB_URI dans .env.local');
}

const uri = process.env.MONGODB_URI;
let cached = global.mongoose as { conn: typeof mongoose | null, promise: Promise<typeof mongoose> | null };

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(uri!).then(m => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
