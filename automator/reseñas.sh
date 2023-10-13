#!/bin/zsh

db.createCollection("reseñas",{
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required: ["usuario", "juego", "contenido", "calificacion", "fecha"],
            properties: {
                usuario:{
                    bsonType: "object",
                    description: "Usuario",
                    properties: {
                        usuario_id: {
                            bsonType: "objectId",
                            description: "Id del usuario"
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
                            bsonType: "objectId",
                            description: "Id del juego"
                        },
                        titulo_juego: {
                            bsonType: "string",
                            description: "Título del juego"
                        }
                    }
                },
                contenido: {
                    bsonType: "string",
                    description: "Contenido de la reseña"
                },
                calificacion: {
                    bsonType: "double",
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