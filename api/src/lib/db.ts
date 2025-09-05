import { MongoClient } from "mongodb";
import { ENV } from "./env";
let client: MongoClient;
export async function getDb() {
  if (!client) { client = new MongoClient(ENV.MONGO_URI); await client.connect(); }
  return client.db(ENV.DB_NAME);
}