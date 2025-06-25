// /lib/mongodb.ts
import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  if (process.env.NODE_ENV !== 'production') {
    throw new Error('⚠️ Define MONGODB_URI dans .env.local');
  }
}
const uri = process.env.MONGODB_URI;

// @ts-ignore
let cached = global.mongoose || { conn: null, promise: null };

// @ts-ignore
global.mongoose = cached;

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri!).then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
