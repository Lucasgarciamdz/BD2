const MongoClient = require('mongodb').MongoClient;

async function getData(userId) {
  const url = 'mongodb://localhost:27017';
  const dbName = 'gameStoreFinal21';
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection('juegos');
  const listaAnunciantes = [];
  const listaJuegosDescuentos = [];
  const listaIdiomas = ["español", "ingles", "italiano", "portugues", "ruso", "frances", "aleman"];
  const listaRegiones = ["suramerica", "centroamerica", "america del norte", "europa oeste", "europa este", "asia este", "asia oeste"];
  const numAnunciantes = Math.floor(Math.random() * 10);

  for (let i = 0; i < numAnunciantes; i++) {
    const anunciante = {
        "anunciante_id": i,
        "nombre": "query",
        "imagen_url": "query",
        "query": true
      };
      listaAnunciantes.unshift(anunciante);
  }

  for (let i = 0; i < 10; i++) {
      const juegoDescuento = {
        "juego_id": i,
        "nombre": "query",
        "imagen_url": "query",
        "precio": "query",
        "descuento": (Math.floor(Math.random() * 1001) * 0.1).toFixed(1),
        "query": true
      };
      listaJuegosDescuentos.unshift(juegoDescuento);
  }

  const listaJuegosDestacados = await collection
    .find({})
    .sort({ calificacion: -1 }) 
    .limit(10)
    .project({
        game_id: 1,
        nombre: 1,
        imagen_url: 1,
        precio: 1,
        calificacion: 1,
    })
    .toArray();

  const idioma = listaIdiomas[Math.floor(Math.random() * listaIdiomas.length)];

  const region = listaRegiones[Math.floor(Math.random() * listaIdiomas.length)];
  
  const usuario = {
    "usuario_id": userId,
    "nombre_usuario": "query",
    "foto_perfil": "query",
    "query": true
  };

  client.close();

  return { usuario, idioma, region, listaAnunciantes, listaJuegosDestacados, listaJuegosDescuentos};
}

async function insertHomeData() {
  const url = 'mongodb://localhost:27017';
  const dbName = 'gameStoreFinal21';
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection('home');

  for (let i = 1; i < 1000; i++) {
    const { usuario, idioma, region, listaAnunciantes, listaJuegosDestacados, listaJuegosDescuentos} = getData(i);
    const homeData = {
      "usuario": usuario,
      "idioma": idioma,
      "region": region,
      "anunciantes": listaAnunciantes,
      "juegos_destacados": listaJuegosDestacados,
      "juegos_descuento": listaJuegosDescuentos
    };

    await collection.insertHomeData(homeData);
  }

  client.close();
}

insertHomeData();