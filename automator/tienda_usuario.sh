#!/bin/zsh

db.createCollection("tienda_usuario", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["usuario", "wishlist", "total"],
            properties: {
                usuario: {
                    bsonType: "object",
                    description: "Usuario",
                    properties: {
                        usuario_id: {
                            bsonType: "number",
                            description: "Id del usuario"
                        },
                        nombre_usuario: {
                            bsonType: "string",
                            description: "Nombre del usuario"
                        },
                        mail: {
                            bsonType: "string",
                            description: "Mail del usuario"
                        }
                    }
                },
                wishlist: {
                    bsonType: "array",
                    description: "Lista de deseos",
                    items: {
                        bsonType: "object",
                        required: ["juego_id", "titulo", "imagen_url", "precio"],
                        properties: {
                            juego_id: {
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