#!/bin/zsh

db.reseñas.insertOne({
                        "usuario": {
                            "usuario_id": 1,
                            "nombre": "example"},
                        "juego": {
                            "juego_id": 1,
                            "titulo": "example"},
                        "comentario": "Excelente juego FPS, buena historia",
                        "calificacion": 9.4,
                        "fecha": new Date("2020-09-29")
})