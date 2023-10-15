#!/bin/zsh

db.createCollection("reseñas",{
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required: ["usuario", "juego", "comentario", "calificacion", "fecha"],
            properties: {
                usuario:{
                    bsonType: "object",
                    description: "Usuario",
                    properties: {
                        usuario_id: {
                            bsonType: "number",
                            description: "Id del usuario propio"
                        },
                        nombre_usuario: {
                            bsonType: "string",
                            description: "Nombre del usuario"
                        }
                    }
                },
                juego:{
                    bsonType: "object",
                    description: "Juego",
                    properties: {
                        juego_id: {
                            bsonType: "number",
                            description: "Id del juego"
                        },
                        titulo_juego: {
                            bsonType: "string",
                            description: "Título del juego"
                        }
                    }
                },
                comentario: {
                    bsonType: "string",
                    description: "Comentario de la reseña"
                },
                calificacion: {
                    bsonType: "number",
                    description: "Calificación de la reseña"
                },
                fecha: {
                    bsonType: "date",
                    description: "Fecha de la reseña"
                }
            }
        }
    }
})