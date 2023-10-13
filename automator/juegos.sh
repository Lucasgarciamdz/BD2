#!/bin/zsh

db.createCollection("juegos",
{
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required: ["game_id", "titulo", "descripcion", "desrrollador", "fecha_lanzamiento", "rating", "precio", "genero", "plataforma","juegos_relacionados", "imagen_url", "video_url", "screenshots", "tags"],
            properties: {
                game_id: {
                    bsonType: "objectId",
                    description: "Id del juego"
                },
                titulo: {
                    bsonType: "string",
                    description: "Título del juego"
                },
                descripcion: {
                    bsonType: "string",
                    description: "Descripción del juego"
                },
                desrrollador: {
                    bsonType: "string",
                    description: "Desarrollador del juego"
                },
                fecha_lanzamiento: {
                    bsonType: "date",
                    description: "Fecha de lanzamiento del juego"
                },
                rating: {
                    bsonType: "double",
                    description: "Rating del juego"
                },
                precio: {
                    bsonType: "double",
                    description: "Precio del juego"
                },
                genero: {
                    bsonType: "string",
                    description: "Género del juego"
                },
                plataforma: {
                    bsonType: "string",
                    description: "Plataforma del juego"
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
                }
            }
        }
    }
})