#!/bin/zsh

db.createCollection("home_page", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["usuario", "juegos_destacados", "juegos_descuento", "idioma", "region", "anunciantes"],
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
            foto_perfil: {
              bsonType: "string",
              description: "Foto de perfil del usuario"
            }
          }
        },
        juegos_destacados: {
          bsonType: "array",
          description: "Juegos destacados",
          items: {
            bsonType: "object",
            required: ["game_id", "precio", "rating"],
            properties: {
              game_id: {
                bsonType: "number",
                description: "Id del juego"
              },
              nombre: {
                bsonType: "string",
                description: "Nombre del juego"
              },
              imagen_url: {
                bsonType: "string",
                description: "Imagen del juego"
              },
              precio: {
                bsonType: "number",
                description: "Precio del juego"
              },
              calificacion: {
                bsonType: "number",
                description: "Calificacion del juego"
              }
            }
          }
        },
        juegos_descuento: {
          bsonType: "array",
          description: "Juegos con descuento",
          items: {
            bsonType: "object",
            required: ["game_id", "precio", "porcentaje_descuento"],
            properties: {
              game_id: {
                bsonType: "number",
                description: "Id del juego"
              },
              titulo: {
                bsonType: "string",
                description: "Nombre del juego"
              },
              imagen_url: {
                bsonType: "string",
                description: "Imagen del juego"
              },
              precio: {
                bsonType: "number",
                description: "Precio del juego"
              },
              porcentaje_descuento: {
                bsonType: "number",
                description: "Porcentaje de descuento del juego"
              }
            }
          }
        },
        idioma: {
          bsonType: "string",
          description: "Idioma del usuario"
        },
        region: {
          bsonType: "string",
          description: "Región del usuario"
        },
        anunciantes: {
          bsonType: "array",
          description: "Anunciantes",
          items: {
            bsonType: "object",
            required: ["anunciante_id", "nombre", "imagen_url"],
            properties: {
              anunciante_id: {
                bsonType: "number",
                description: "Id del anunciante"
              },
              nombre: {
                bsonType: "string",
                description: "Nombre del anunciante"
              },
              imagen_url: {
                bsonType: "string",
                description: "Imagen del anunciante"
              }
            }
          }
        }
      }
    }
  }
})