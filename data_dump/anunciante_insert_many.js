const MongoClient = require('mongodb').MongoClient;

const paisesEIdiomas = [
    { pais: 'Argentina', idioma: 'Español', region: 'suramerica' },
    { pais: 'Estados Unidos', idioma: 'Inglés', region: 'america del norte' },
    { pais: 'Francia', idioma: 'Francés', region: 'europa oestel' },
    { pais: 'Alemania', idioma: 'Alemán', region: 'europa oestel' },
    { pais: 'España', idioma: 'Español', region: 'europa oeste' },
    { pais: 'Italia', idioma: 'Italiano', region: 'europa oeste' },
    { pais: 'Japón', idioma: 'Japonés', region: 'asia este' },
    { pais: 'China', idioma: 'Mandarín', region: 'asia este' },
    { pais: 'Brasil', idioma: 'Portugués', region: 'suramerica' },
    { pais: 'Rusia', idioma: 'Ruso', region: 'europa este' }
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
        const region = random.region;

        const anuncianteData = {
            "anunciante_id": i,
            "empresa": "Coca Cola" + i,
            "imagen_url": "href",
            "descripcion": "despata una coca cola, destapa felicidad",
            "tiempo_de_publicidad": new Date(),
            "pais": pais,
            "idioma": idioma,
            "region": region
        };

        await collection.insertOne(anuncianteData);
    }

    client.close();
}

insertAnuncianteData();
