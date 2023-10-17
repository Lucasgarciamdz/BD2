const MongoClient = require('mongodb').MongoClient;

async function insertHomeData() {
  const url = 'mongodb://localhost:27017';
  const dbName = 'gameStoreFinal21';
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection('home');

  for (let i = 1; i < 1000; i++) {
    const listaAnunciantes = [];
    const listaJuegosDescuentos = [];
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

    for (let j = 0; j < 10; j++) {
      listaJuegosDescuentos.push({
        "juego_id": j,
        "nombre": "query",
        "imagen_url": "query",
        "precio": "query",
        "descuento": (Math.floor(Math.random() * 1001) * 0.1).toFixed(1),
        "query": true
      });
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

    const updatedAnunciantes = await Promise.all(listaAnunciantes.map(async (anunciante) => {
      if (anunciante.query) {
        const anuncianteInfo = await db.collection('anunciantes').findOne({ "anunciante_id": anunciante.anunciante_id });
        if (anuncianteInfo) {
          return {
            ...anunciante,
            "nombre": anuncianteInfo.nombre,
            "imagen_url": anuncianteInfo.imagen_url
          };
        }
      }
      return anunciante;
    }));
    
    const updatedJuegosDescuentos = await Promise.all(listaJuegosDescuentos.map(async (juegoDescuento) => {
      if (juegoDescuento.query) {
        const juegoDescuentoInfo = await db.collection('juegos').findOne({ "juego_id": juegoDescuento.juego_id });
        if (juegoDescuentoInfo) {
          return {
            ...juegoDescuento,
            "nombre": juegoDescuentoInfo.nombre,
            "imagen_url": juegoDescuentoInfo.imagen_url,
            "precio": juegoDescuentoInfo.precio
          };
        }
      }
      return juegoDescuento;
    }));
    
    if (usuario.query) {
      const usuarioInfo = await db.collection('usuarios').findOne({ "usuario_id": usuario.usuario_id });
      if (usuarioInfo) {
        usuario.nombre_usuario = usuarioInfo.nombre_usuario;
        usuario.foto_perfil = usuarioInfo.foto_perfil;
      }
    }

    const homeData = {
      "usuario": usuario,
      "idioma": idioma,
      "region": region,
      "anunciantes": updatedAnunciantes,
      "juegos_destacados": listaJuegosDestacados,
      "juegos_descuento": updatedJuegosDescuentos
    };

    await collection.insertOne(homeData);
  }

  client.close();
}

insertHomeData();