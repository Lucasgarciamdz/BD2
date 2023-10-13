#!/bin/zsh

db.createCollection("tienda_usuario",{
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required: ["usuario_id", "wishlist", "total"],
            properties: {
                usuario_id: {
                    bsonType: "objectId",
                    description: "Id del usuario"
                },
                wishlist: {
                    bsonType: "array",
                    description: "Lista de deseos",
                    items: {
                        bsonType: "object",
                        required: ["game_id", "title", "imagen_url", "precio"],
                        properties: {
                            game_id: {
                                bsonType: "objectId",
                                description: "Id del juego"
                            },
                            title: {
                                bsonType: "string",
                                description: "Título del juego"
                            },
                            imagen_url: {
                                bsonType: "string",
                                description: "Imagen del juego"
                            },
                            precio: {
                                bsonType: "double",
                                description: "Precio del juego"
                            }
                        }
                    }
                },
                total: {
                    bsonType: "double",
                    description: "Total de la lista de deseos"
                }
            }
        }
    }
})