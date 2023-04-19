import { NowRequest, NowResponse } from "@vercel/node";

import { MongoClient, Db, connect } from "mongodb";

import url from "url";

let cacheDb: Db = null;

async function connectToDatabase(uri: string) {
  if (cacheDb) return cacheDb;

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbName = url.parse(uri).pathname.substr(1);

  const db = client.db(dbName);

  cacheDb = db;

  return db;
}

export default async (req: NowRequest, res: NowResponse) => {
  const { email } = req.body;

  const db = await connectToDatabase(process.env.MONGO_DB_URI);

  const collection = db.collection("subscribers");

  collection.insertOne({
    email,
    subscribeAt: new Date(),
  });

  return res.status(201).json({ ok: true });
};
