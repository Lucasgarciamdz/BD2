db.perfil.insertOne({
    "usuario": {
        "usuario_id": 1,
        "nombre_usuario": "usuario1",
        "foto_perfil": "https://i.imgur.com/1.jpg"
    },
    "nivel": "Novato",
    "juegos_recientes": [
        {
            "game_id": 1,
            "titulo": "Juego 1",
            "imagen_url": "https://i.imgur.com/1.jpg"
        },
        {
            "game_id": 2,
            "titulo": "Juego 2",
            "imagen_url": "https://i.imgur.com/2.jpg"
        },
        {
            "game_id": 3,
            "titulo": "Juego 3",
            "imagen_url": "https://i.imgur.com/3.jpg"
        }
    ],
    "insignias": [
        "Insignia 1",
        "Insignia 2",
        "Insignia 3"
    ],
    "estado_en_linea": true
})