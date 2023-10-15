db.biblioteca.insertOne(
    usuario: {
        usuario_id: 1,
        nombre_usuario: "usuario1",
        foto_perfil: "https://i.imgur.com/1.jpg"
    },
    "juegos": [{
        "game_id": 1,
        "title": "Juego 1",
        "imagen_url": "https://i.imgur.com/1.jpg",
        "tiempo_jugado": 100,
        "ultima_vez_jugado": new Date("2021-01-01T00:00:00Z")
    },
    {
        "game_id": 2,
        "title": "Juego 2",
        "imagen_url": "https://i.imgur.com/2.jpg",
        "tiempo_jugado": 200,
        "ultima_vez_jugado": new Date("2021-01-02T00:00:00Z")
    },
    {
        "game_id": 3,
        "title": "Juego 3",
        "imagen_url": "https://i.imgur.com/3.jpg",
        "tiempo_jugado": 300,
        "ultima_vez_jugado": new Date("2021-01-03T00:00:00Z")
    }]
)