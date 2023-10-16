#!/bin/zsh

db.createCollection("juegos",
{
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required: ["juego_id", "titulo", "descripcion", "desarrolladores", "fecha_lanzamiento", "rating", "precio", "genero", "plataforma", "imagen_url", "video_url", "screenshots", "tags", "logros"],
            properties: {
                juego_id: {
                    bsonType: "number",
                    description: "Id del juego propio",
                    uniqueItems: true
                },
                titulo: {
                    bsonType: "string",
                    description: "Título del juego"
                },
                descripcion: {
                    bsonType: "string",
                    description: "Descripción del juego"
                },
                desarrolladores: {
                    bsonType: "array",
                    description: "Desarrolladores del juego",
                    items: {
                        bsonType: "string",
                        description: "Desarrollador del juego"
                    },
                },
                fecha_lanzamiento: {
                    bsonType: "date",
                    description: "Fecha de lanzamiento del juego"
                },
                rating: {
                    bsonType: "number",
                    description: "Rating del juego"
                },
                precio: {
                    bsonType: "number",
                    description: "Precio del juego"
                },
                genero: {
                    bsonType: "string",
                    description: "Género del juego"
                },
                plataforma: {
                    bsonType: "array",
                    description: "Plataformas del juego",
                    items: {
                        bsonType: "string",
                        description: "Plataforma del juego"
                    }
                },
                juegos_relacionados: {
                    bsonType: "array",
                    description: "Juegos relacionados",
                    items: {
                        bsonType: "object",
                        required: ["game_id", "titulo", "imagen_url"],
                        properties: {
                            game_id: {
                                bsonType: "objectId",
                                description: "Id del juego relacionado"
                            },
                            titulo: {
                                bsonType: "string",
                                description: "Título del juego relacionado"
                            },
                            imagen_url: {
                                bsonType: "string",
                                description: "Imagen del juego relacionado"
                            }
                        }
                    }
                },
                imagen_url: {
                    bsonType: "string",
                    description: "Imagen del juego"
                },
                video_url: {
                    bsonType: "string",
                    description: "Video del juego"
                },
                screenshots: {
                    bsonType: "array",
                    description: "Screenshots del juego",
                    items: {
                        bsonType: "string",
                        description: "Screenshot del juego"
                    }
                },
                tags: {
                    bsonType: "array",
                    description: "Tags del juego",
                    items: {
                        bsonType: "string",
                        description: "Tag del juego"
                    }
                },
                logros: {
                    bsonType: "array",
                    description: "Logros del juego",
                    items: {
                        bsonType: "string",
                        description: "Logro del juego"
                    }
                }
            }
        }
    }
})