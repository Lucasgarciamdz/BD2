#!/bin/zsh

db.createCollection("biblioteca", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        usuario: {
          bsonType: "object",
          description: "Usuario",
          properties: {
              usuario_id: {
              bsonType: "number",
              description: "Id del usuario",
              uniqueItems: true
            },
            query: {
              bsonType: "bool",
              description: "Si necesita actualizar el usuario o no"
            },
            nombre_usuario: {
              bsonType: "string",
              description: "Nombre del usuario"
            },
            foto_perfil: {
              bsonType: "string",
              description: "Foto de perfil del usuario"
            }
          }
        },
        juegos: {
          bsonType: "array",
          description: "Todos los juegos del usuario",
          items: {
            bsonType: "object",
            required: ["juego_id", "titulo", "imagen_url", "tiempo_jugado", "ultima_vez_jugado"],
            properties: {
              juego_id: {
                bsonType: "number",
                description: "Id del juego"
              },
              query: {
                bsonType: "bool",
                description: "Si necesita actualizar el juego o no"
              },
              titulo: {
                bsonType: "string",
                description: "Título del juego"
              },
              imagen_url: {
                bsonType: "string",
                description: "Imagen del juego"
              },
              tiempo_jugado: {
                bsonType: "number",
                description: "Tiempo jugado del juego"
              },
              ultima_vez_jugado: {
                bsonType: "date",
                description: "Última vez jugado"
              }
            }
          }
        }
      }
    }
  }
})