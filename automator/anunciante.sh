#!/bin/zsh

db.createCollection("anunciantes",{
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required: ["anunciante_id", "empresa", "imagen_url", "descripcion", "tiempo_de_publicidad", "pais", "idioma"],
            properties: {
                anunciante_id: {
                    bsonType: "number",
                    description: "Id del anunciante propio",
                    uniqueItems: true
                },
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
                    bsonType: "date",
                    description: "Hasta cuando se va a mostrar la publicidad"
                },
                pais: {
                    bsonType: "string",
                    description: "País de la empresa"
                },
                idioma: {
                    bsonType: "string",
                    description: "Idioma de la empresa"
                }
            }
        }
    }
})