#!/bin/zsh

db.juegos.insertOne({
                    "juego_id": 1,
                    "titulo": "Call of Duty",
                    "descripcion": "Juegos de accion en primera persona",
                    "desarrolladores": ["Activision", "Treyarch"],
                    "fecha_lanzamiento": new Date("2012-04-12"),
                    "rating": 16,
                    "precio": 2000,
                    "genero": "FPS",
                    "plataforma": ["Windows"],
                    "imagen_url": "https://picsum.photos/id/298/200/300",
                    "video_url": "https://picsum.photos/id/300/200/300",
                    "screenshots": ["https://picsum.photos/id/281/200/300", "https://picsum.photos/id/282/200/300", "https://picsum.photos/id/283/200/300"],
                    "tags": ["Shooter", "Primera persona", "Accion"],
                    "logros": ["Multikill", "Nuclear"],
                    "valoracion": 8.7
                    })