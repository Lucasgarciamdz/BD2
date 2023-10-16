const MongoClient = require('mongodb').MongoClient;

function getJuegos(userId) {
  const listaJuegos = [];
  const numJuegos = Math.floor(Math.random() * 10);
  for (let i = 0; i < numJuegos; i++) {
    const juego = {
      "juego_id": i + Math.floor(Math.random() * 1000),
      "title": "query",
      "imagen_url": "query",
      "tiempo_jugado": Math.floor(Math.random() * 1000),
      "ultima_vez_jugado": new Date()
    };
    listaJuegos.unshift(juego);
  }
  
  const usuario = {
    "usuario_id": userId,
    "nombre_usuario": "query",
    "foto_perfil": "query"
  };

  return { usuario, juegos: listaJuegos };
}


async function insertGameData() {
  const url = 'mongodb://localhost:27017';
  const dbName = 'gameStoreFinal21';
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection('biblioteca');

  for (let i = 1; i < 1000; i++) {
    const { usuario, juegos } = getJuegos(i);
    const bibliotecaData = {
      "usuario": usuario,
      "juegos": juegos
    };

    await collection.insertOne(bibliotecaData);
  }

  client.close();
}

insertGameData();