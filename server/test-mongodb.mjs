import "dotenv/config";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("MONGODB_URI is missing from your .env file.");
  process.exit(1);
}

const client = new MongoClient(uri, {
  serverSelectionTimeoutMS: 10000,
  connectTimeoutMS: 10000,
});

try {
  console.log("Attempting a direct MongoDB connection...");

  await client.connect();

  console.log("MongoDB connected successfully!");

  const result = await client.db("admin").command({ ping: 1 });

  console.log("Ping result:", result);
} catch (error) {
  console.error("Connection failed.");
  console.error("Error name:", error.name);
  console.error("Error message:", error.message);

  if (error.cause) {
    console.error("Underlying cause:", error.cause.message);
  }

  process.exitCode = 1;
} finally {
  await client.close().catch(() => {});
}
