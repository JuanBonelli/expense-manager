import type _mongoose from "mongoose";
import { connect } from "mongoose";

declare global {
  var mongoose: {
    promise: ReturnType<typeof connect> | null;
    conn: typeof _mongoose | null;
  };
}

const { MONGODB_URI } = process.env;
if (!MONGODB_URI) throw new Error("MONGODB_URI does not exists in .env");

let cached = global.mongoose;

if (!cached) {
  global.mongoose = { conn: null, promise: null };
  cached = { conn: null, promise: null };
}

const dbConnect = async () => {
  console.log(`>>>> ${MONGODB_URI} <<<<`);
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = connect(MONGODB_URI, {
        bufferCommands: false,
        dbName: 'expense-manager'
    }).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
};

export default dbConnect;
