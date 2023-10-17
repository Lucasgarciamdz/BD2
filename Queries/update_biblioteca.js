const { MongoClient } = require('mongodb');

async function updateBiblioteca() {
  const uri = 'mongodb://localhost:27017';
  const dbName = 'gameStoreFinal21';

  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('biblioteca');

    const juegos = await collection.find({ "juegos.query": true }).toArray();

    for (const doc of juegos) {
      const updatedJuegos = await Promise.all(doc.juegos.map(async (juego) => {
        const juegoInfo = await db.collection('juegos').findOne({ "juego_id": juego.juego_id });
        if (juegoInfo) {
          return {
            ...juego,
            titulo: juegoInfo.titulo,
            imagen_url: juegoInfo.imagen_url
          };
        } else {
          return juego;
        }
      }));

      await collection.updateOne({ "_id": doc._id }, { "$set": { "juegos": updatedJuegos } });
    }

    console.log('Biblioteca updated successfully');
  } catch (error) {
    console.error('Error updating biblioteca:', error);
  } finally {
    await client.close();
  }
}

updateBiblioteca();