const MongoClient = require('mongodb').MongoClient;

async function countPlayersByRegion() {
  const url = 'mongodb://localhost:27017';
  const dbName = 'gameStoreFinal21';
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const homeCollection = db.collection('home');

  const pipeline = [
    {
      $group: {
        _id: '$region', 
        totalPlayers: { $sum: 1 } 
      }
    }
  ];

  const result = await home.aggregate(pipeline).toArray();

  console.log(result);
}

countPlayersByRegion();