require("dotenv").config();

const { MongoClient } = require("mongodb");

async function test() {
  const uri = process.env.MONGO_URI || "mongodb://localhost:27017";
  const dbName = process.env.DB_NAME || "educational_platform";

  console.log("Intentando conectar a:", uri);

  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 5000
  });

  try {
    await client.connect();

    const result = await client.db(dbName).command({ ping: 1 });

    console.log("✅ MongoDB conectado correctamente");
    console.log(result);

  } catch (err) {
    console.log("❌ Error conectando a MongoDB");
    console.log(err.message);
  } finally {
    await client.close();
  }
}

test();
