const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

async function insertPerfilData() {
    const url = 'mongodb://localhost:27017';
    const dbName = 'gameStoreFinal21';
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const perfilCollection = db.collection('perfil');
    const usuarioCollection = db.collection('usuarios');
    const juegosCollection = db.collection('juegos');

    for (let i = 1; i <= 1000; i++) {
        const usuarioData = await usuarioCollection.findOne({ usuario_id: i });

        if (!usuarioData) {
            continue; // Evita perfiles sin usuarios asociados
        }

        const perfilData = {
            "usuario": {
                "usuario_id": usuarioData._id,
                "nombre_usuario": usuarioData.username,
                "foto_perfil": usuarioData.foto_perfil
            },
            "nivel": "Novato", // Nivel aleatorio
            "juegos_recientes": [],
            "insignias": [],
            "estado_en_linea": Math.random() < 0.5, // Aleatorio entre true y false
            "juegos_asignados": [] // Se llenará más adelante
        };

        // Obtiene los juegos asignados al usuario
        const juegosAsignados = await juegosCollection.find({ propietario: usuarioData._id }).limit(10).toArray();
        perfilData.juegos_asignados = juegosAsignados.map(juego => juego._id);

        // Agrega juegos recientes del perfil (aleatoriamente de los asignados)
        const numJuegosRecientes = Math.floor(Math.random() * Math.min(10, juegosAsignados.length));
        for (let j = 0; j < numJuegosRecientes; j++) {
            const juegoReciente = juegosAsignados[j];
            perfilData.juegos_recientes.push({
                id_juego: juegoReciente._id,
                titulo: juegoReciente.titulo,
                imagen_url: juegoReciente.imagen_url
            });
        }

        // Agrega insignias aleatorias
        const numInsignias = Math.floor(Math.random() * 4); // Hasta 4 insignias
        for (let j = 0; j < numInsignias; j++) {
            perfilData.insignias.push(`Insignia ${Math.floor(Math.random() * 10)}`);
        }

        await perfilCollection.insertOne(perfilData);
    }

    client.close();
}

insertPerfilData();
