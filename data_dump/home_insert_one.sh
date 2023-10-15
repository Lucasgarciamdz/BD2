db.home.insertOne(
    {
        "usuario": {
            "usuario_id": 1,
            "nombre_usuario": "usuario1",
            "foto_perfil": "imagen"
        },
        "juegos_destacados": [
            {
                "game_id": 1,
                "precio": 1000,
                "rating": 4.5
            },
            {
                "game_id": 2,
                "precio": 2000,
                "rating": 4.0
            },
            {
                "game_id": 3,
                "precio": 3000,
                "rating": 3.5
            }
        ],
        "juegos_descuento": [
            {
                "game_id": 4,
                "precio": 1000,
                "porcentaje_descuento": 10
            },
            {
                "game_id": 5,
                "precio": 2000,
                "porcentaje_descuento": 20
            },
            {
                "game_id": 6,
                "precio": 3000,
                "porcentaje_descuento": 30
            }
        ],
        "idioma": "es",
        "region": "AR",
        "anunciantes": [
            {
                "anunciante_id": 1,
                "nombre_anunciante": "anunciante1",
                "imagen_url": "https://i.imgur.com/1.jpg"
            },
            {
                "anunciante_id": 2,
                "nombre_anunciante": "anunciante2",
                "imagen_url": "https://i.imgur.com/2.jpg"
            },
            {
                "anunciante_id": 3,
                "nombre_anunciante": "anunciante3",
                "imagen_url": "https://i.imgur.com/3.jpg"
            }
        ]
    }
)