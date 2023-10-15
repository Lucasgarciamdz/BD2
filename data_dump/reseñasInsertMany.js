const MongoClient = require('mongodb').MongoClient;

//Genera calificaciones Random del 1 al 10, con 1 decimal
async function getRandomCalificacion() {
    const randomCalificacion = (Math.random() * 9) + 1;
    return parseFloat(randomCalificacion.toFixed(1));
}

async function insertGameData() {
    const url = 'mongodb://localhost:27017';
    const dbName = 'gameStore';
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection('reseñas');

    for (let i = 0; i < 1000; i++) {
        const calificacion = await getRandomCalificacion();
        const usuario = traerUsuario();
        const reseñasData = {
            "usuario": {"user_id": usuario.id, "nombre": usuario.nombre},
            "juego": random.Math(1, 1000),
            "comentario": "comentario" + i,
            "calificacion": calificacion,
        };

        await collection.insertOne(reseñasData);
    }

    client.close();
}

insertGameData();
