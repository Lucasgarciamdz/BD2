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
              bsonType: "objectId",
              description: "Id del usuario"
            },
            nombre_usuario: {
              bsonType: "string",
              description: "Nombre del usuario"
            },
            mail: {
              bsonType: "string",
              description: "Correo electrónico del usuario"
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
                bsonType: "objectId",
                description: "Id del juego"
              },
              precio: {
                bsonType: "double",
                description: "Precio del juego"
              },
              rating: {
                bsonType: "double",
                description: "Rating del juego"
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
                bsonType: "objectId",
                description: "Id del juego"
              },
              precio: {
                bsonType: "double",
                description: "Precio del juego"
              },
              porcentaje_descuento: {
                bsonType: "double",
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
                bsonType: "objectId",
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