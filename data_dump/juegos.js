const MongoClient = require('mongodb').MongoClient;

async function insertGameData() {
  const url = 'mongodb://localhost:27017';
  const dbName = 'mydb';
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection('games');

  for (let i = 0; i < 1000; i++) {
    const gameData = [
        "juego_id" + i,
      `Game ${i + 1}`,
      `Description for Game ${i + 1}`,
      `Publisher ${i + 1}`,
      new Date(),
      Math.floor(Math.random() * 5) + 1,
      Math.floor(Math.random() * 100) + 1,
      `Genre ${i + 1}`,
      `Platform ${i + 1}`,
      Math.floor(Math.random() * 10) + 1,
      `https://example.com/game-${i + 1}.jpg`,
      `https://example.com/game-${i + 1}.mp4`,
      [`https://example.com/screenshot1-${i + 1}.jpg`, `https://example.com/screenshot2-${i + 1}.jpg`],
      `Mode ${i + 1}`,
      `Type ${i + 1}`
    ];

    await collection.insertOne({ gameData });
  }

  client.close();
}