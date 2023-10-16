const MongoClient = require('mongodb').MongoClient;

async function insertGameData() {
    const url = 'mongodb://localhost:27017';
    const dbName = 'gameStoreFinal21';
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection('juegos');

    for (let i = 0; i < 10000; i++) {
        const juegosData = {
                    "juego_id": i,
                    "titulo": "juego" + i,
                    "descripcion": "descripcion juego" + i,
                    "desarrolladores": ["desarrollador" + i, "desarrollador" + i + 1, "desarrollador" + i + 2],
                    "fecha_lanzamiento": new Date(),
                    "rating": i % 2,
                    "precio": i,
                    "genero": "genero" + i,
                    "plataforma": ["plataforma"+ i, "plataforma"+ i + 1],
                    "imagen_url": "https://picsum.photos/id/" + i + "/200/300",
                    "video_url": "https://picsum.photos/id/" + i + 1 + "/200/300",
                    "screenshots": ["https://picsum.photos/id/" + i + 2 + "/200/300", "https://picsum.photos/id/" + i + 3+ "/200/300", "https://picsum.photos/id/" + i + + 4 +"/200/300"],
                    "tags": ["tag" + i, "tag" + i + 1, "tag" + i + 2],
                    "logros": ["logro" + i, "logro" + i + 1]
        };

        await collection.insertOne(juegosData);
    }

    client.close();
}

insertGameData();