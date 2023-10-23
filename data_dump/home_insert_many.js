const MongoClient = require('mongodb').MongoClient;

async function insertHomeData() {
  const url = 'mongodb://localhost:27017';
  const dbName = 'gameStoreFinal21';
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection('home');

  for (let i = 1; i < 1000; i++) {
    const listaAnunciantes = [];
    const listaIdiomas = ["español", "ingles", "italiano", "portugues", "ruso", "frances", "aleman"];
    const listaRegiones = ["suramerica", "centroamerica", "america del norte", "europa oeste", "europa este", "asia este", "asia oeste"];
    const numAnunciantes = Math.floor(Math.random() * 10);

    for (let j = 0; j < numAnunciantes; j++) {
      listaAnunciantes.push({
        "anunciante_id": j,
        "nombre": "query",
        "imagen_url": "query",
        "query": true
      });
    }

    const listaJuegosDescuentos = await db.collection('juegos')
    .find({ descuento: { $gt: 0 } }) // Filtra juegos con descuento
    .limit(10) // Limita a los primeros 10 resultados
    .project({
      juego_id: 1,
      nombre: 1,
      imagen_url: 1,
      precio: 1,
      descuento: 1,
    })
    .toArray();
  

    const listaJuegosDestacados = await db.collection('juegos')
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
    const region = listaRegiones[Math.floor(Math.random() * listaRegiones.length)];
  
    const usuario = {
      "usuario_id": i,
      "nombre_usuario": "query",
      "foto_perfil": "query",
      "query": true
    };

    const homeData = {
      "usuario": usuario,
      "idioma": idioma,
      "region": region,
      "anunciantes": listaAnunciantes, //queri q trae anunciantes para cada home
      "juegos_destacados": listaJuegosDestacados, //comun para todo user
      "juegos_descuento": listaJuegosDescuentos //comun para todo user
    };

    await collection.insertOne(homeData);
  }

  client.close();
}

insertHomeData();