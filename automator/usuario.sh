#!/bin/zsh

db.createCollection("usuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["usuario_id", "nombre", "apellido", "username", "fecha_nac", "email", "password", "foto_perfil"],
      properties: {
        usuario_id: {
          bsonType: "number",
          description: "Id del usuario propio",
          uniqueItems: true
        },
        nombre: {
          bsonType: "string",
          description: "Nombre"
        },
        apellido: {
          bsonType: "string",
          description: "Apellido"
        },
        username: {
          bsonType: "string",
          description: "Nombre de usuario"
        },
        fecha_nac: {
          bsonType: "date",
          description: "Fecha de nacimiento"
        },
        email: {
          bsonType: "string",
          description: "Correo electrónico"
        },
        password: {
          bsonType: "string",
          description: "Contraseña"
        },
        foto_perfil: {
          bsonType: "string",
          description: "Foto de perfil"
        },
        juegos_recientes: {
          bsonType: "array",
          description: "Juegos recientes",
          items: {
            bsonType: "object",
            required: ["game_id", "title", "imagen_url", "tiempo_jugado", "ultima_vez_jugado"],
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
              tiempo_jugado: {
                bsonType: "string",
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