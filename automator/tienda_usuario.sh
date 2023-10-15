#!/bin/zsh

db.createCollection("tienda_usuario",{
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required: ["usuario_id", "wishlist", "total"],
            properties: {
                usuario_id: {
                    bsonType: "number",
                    description: "Id del usuario"
                },
                wishlist: {
                    bsonType: "array",
                    description: "Lista de deseos",
                    items: {
                        bsonType: "object",
                        required: ["juego_id", "titulo", "imagen_url", "precio"],
                        properties: {
                            game_id: {
                                bsonType: "number",
                                description: "Id del juego"
                            },
                            titulo: {
                                bsonType: "string",
                                description: "Título del juego"
                            },
                            imagen_url: {
                                bsonType: "string",
                                description: "Imagen del juego"
                            },
                            precio: {
                                bsonType: "number",
                                description: "Precio del juego"
                            }
                        }
                    }
                },
                total: {
                    bsonType: "number",
                    description: "Total de la lista de deseos"
                }
            }
        }
    }
})