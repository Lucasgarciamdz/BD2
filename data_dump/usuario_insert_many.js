const MongoClient = require('mongodb').MongoClient;

async function insertUsuarioData() {
    const url = 'mongodb://localhost:27017';
    const dbName = 'gameStoreFinal21';
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection('usuarios');

    const listaRegiones = ["suramerica", "centroamerica", "america del norte", "europa oeste", "europa este", "asia este", "asia oeste"];

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
            "region": listaRegiones[Math.floor(Math.random() * listaRegiones.length)] // Asigna una región aleatoria
        };

        await collection.insertOne(userData);
    }

    client.close();
}

insertUsuarioData();
