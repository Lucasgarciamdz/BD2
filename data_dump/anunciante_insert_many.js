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
    const dbName = 'gameStore';
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection('anunciantes');

    const random = paisesEIdiomas[Math.floor(Math.random() * paisesEIdiomas.length)];
    const pais = random.pais;
    const idioma = random.idioma;

    for (let i = 0; i < 100; i++) {
        const anuncianteData =     {
            "empresa": "Coca Cola" + i,
            "imagen_url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fayeonline.wordpress.com%2F2020%2F03%2F22%2Fopen-a-coke-open-happiness-coca-cola-ad-campaign-analysis%2F&psig=AOvVaw3IsA4lPoOhx926zLl_S21s&ust=1697487697428000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjnrs7w-IEDFQAAAAAdAAAAABAD",
            "descripcion": "despata una coca cola, destapa felicidad",
            "tiempo_de_publicidad": new Date(),
            "region": pais,
            "idioma": idioma
        };

        await collection.insertOne(anuncianteData);
    }

    client.close();
}

insertAnuncianteData();