const MongoClient = require('mongodb').MongoClient;

async function getJuegos() {
  const listaJuegos = [];
  const numJuegos = Math.floor(Math.random() * 10);
  for (let i = 0; i < numJuegos; i++) {
    const juego = {
      "game_id": Math.floor(Math.random() * 1000) + 1,
      "title": "query",
      "imagen_url": "query",
      "tiempo_jugado": Math.floor(Math.random() * 1500) + 1,
      "ultima_vez_jugado": new Date()
    };
    listaJuegos.unshift(juego);
  }
  return listaJuegos;
}

async function insertGameData() {
  const url = 'mongodb://localhost:27017';
  const dbName = 'gameStore';
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection('biblioteca');

  for (let i = 0; i < 1000; i++) {
    const bibliotecaData = {
      "usuario": {
        "usuario_id": i,
        "nombre_usuario": "query",
        "foto_perfil": "query"
      },
      "juegos": await getJuegos()
    };
    await collection.insertOne(bibliotecaData);
  }

  client.close();
}

insertGameData();