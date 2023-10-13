#!/bin/zsh

db.createCollection("anunciante",{
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required: ["empresa", "imagen_url", "descripcion", "tiempo_de_publicidad", "region", "idioma"],
            properties: {
                empresa: {
                    bsonType: "string",
                    description: "Nombre de la empresa"
                },
                imagen_url: {
                    bsonType: "string",
                    description: "Imagen de la empresa"
                },
                descripcion: {
                    bsonType: "string",
                    description: "Descripción de la empresa"
                },
                tiempo_de_publicidad: {
                    bsonType: "string",
                    description: "Tiempo de publicidad"
                },
                region: {
                    bsonType: "string",
                    description: "Región de la empresa"
                },
                idioma: {
                    bsonType: "string",
                    description: "Idioma de la empresa"
                }
            }
        }
    }
})