const MongoClient = require('mongodb').MongoClient;

const paisesEIdiomas = [
    { pais: 'Argentina', idioma: 'Español' },
    { pais: 'Estados Unidos', idioma: 'Inglés' },
    { pais: 'Francia', idioma: 'Francés' },
    { pais: 'Alemania', idioma: 'Alemán' },
    { pais: 'España', idioma: 'Español' },
    { pais: 'Italia', idioma: 'Italiano' },
    { pais: 'Japón', idioma: 'Japonés' },
    { pais: 'China', idioma: 'Mandarín' },
    { pais: 'Brasil', idioma: 'Portugués' },
    { pais: 'Rusia', idioma: 'Ruso' }
];

async function insertAnuncianteData() {
    const url = 'mongodb://localhost:27017';
    const dbName = 'gameStoreFinal21';
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection('anunciantes');

    for (let i = 0; i < 100; i++) {
        const random = paisesEIdiomas[Math.floor(Math.random() * paisesEIdiomas.length)];
        const pais = random.pais;
        const idioma = random.idioma;

        const anuncianteData = {
            "anunciante_id": i,
            "empresa": "Coca Cola" + i,
            "imagen_url": "href",
            "descripcion": "despata una coca cola, destapa felicidad",
            "tiempo_de_publicidad": new Date(),
            "pais": pais,
            "idioma": idioma
        };

        await collection.insertOne(anuncianteData);
    }

    client.close();
}

insertAnuncianteData();
