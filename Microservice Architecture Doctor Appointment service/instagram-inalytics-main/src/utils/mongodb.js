import { MongoClient } from "mongodb";

const MONGODB_URI =
  "mongodb+srv://rashidkg01:%40Rash0025@cluster0.28ebfiz.mongodb.net/";
const MONGODB_DB = "trading";

let client;
let clientPromise;

if (!MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (!MONGODB_DB) {
  throw new Error("Please add your Mongo DB to .env.local");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(MONGODB_URI);
  clientPromise = client.connect();
}

export default clientPromise;
