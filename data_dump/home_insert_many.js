const MongoClient = require('mongodb').MongoClient;

async function insertHomeData() {
  const url = 'mongodb://localhost:27017';
  const dbName = 'gameStoreFinal21';
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection('home');

  for (let i = 1; i < 1000; i++) {
    const listaIdiomas = ["español", "ingles", "italiano", "portugues", "ruso", "frances", "aleman"];
    const listaRegiones = ["suramerica", "centroamerica", "america del norte", "europa oeste", "europa este", "asia este", "asia oeste"];
    const descuentos = [76, 20, 15, 68, 10, 46, 85, 6, 52, 25];

    const listaJuegosDescuentos = await db.collection('juegos')
      .find()
      .limit(10)
      .project({
        juego_id: 1,
        nombre: 1,
        imagen_url: 1,
        precio: 1,
        descuento: 1,
      })
      .toArray();

    for (let i = 0; i < listaJuegosDescuentos.length; i++) {
      listaJuegosDescuentos[i].descuento = descuentos[i];
    }

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

    const anunciantes = {
      "anunciante_id": i,
      "nombre_empresa": "Coca Cola" + i,
      "imagen_url": "href",
      "query": true
    };

    const homeData = {
      "usuario": usuario,
      "idioma": idioma,
      "region": region,
      "juegos_destacados": listaJuegosDestacados,
      "juegos_descuento": listaJuegosDescuentos,
      "anunciantes": anunciantes
    };

    await collection.insertOne(homeData);
  }

  client.close();
}

insertHomeData();
