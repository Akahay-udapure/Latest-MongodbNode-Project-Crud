const { MongoClient } = require('mongodb');

const username = encodeURIComponent("akshaysmartitfutures");
const password = encodeURIComponent("akshay@0734");
const mongoUrl = `mongodb+srv://${username}:${password}@cluster0.uqkg6im.mongodb.net/`;

let client;
let db;

const connection = async () => {
  try {
    client = new MongoClient(mongoUrl);
    await client.connect();
    db = client.db("MyDB"); // Set the default database here
    console.log("Connected to MongoDB");
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = { connection };
