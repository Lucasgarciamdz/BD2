const MongoClient = require('mongodb').MongoClient;

async function insertUsuarioData() {
    const url = 'mongodb://localhost:27017';
    const dbName = 'gameStore';
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection('usuarios');

    for (let i = 0; i < 1000; i++) {
        const userData = {
                "usuario_id": i,
                "nombre": "Lucas" + i,
                "apellido": "Garcia" + i,
                "username": "lucasgarcia" + i,
                "fecha_nac": new Date(),
                "email": "lu.garcia" + i + "@alumno.um.edu.ar",
                "password": "123456" + i,
                "foto_perfil": "https://picsum.photos/id/" + i + "/200/300",
        };

        await collection.insertOne(userData);
    }

    client.close();
}

insertUsuarioData();