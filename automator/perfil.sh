#!/bin/zsh

db.createCollection("perfil", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["usuario", "nivel", "juegos_recientes", "insignias", "estado_en_linea"],
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
				nivel: {
					bsonType: "string",
					description: "Nivel del usuario"
				},
				juegos_recientes: {
					bsonType: "array",
					description: "Juegos recientes del usuario",
					items: {
						bsonType: "object",
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
							}
						}
					}
				},
				insignias: {
				bsonType: "array",
				description: "Insignias del usuario",
				items: {
					bsonType: "string",
					description: "Insignia del usuario"
				}
				},
				estado_en_linea: {
					bsonType: "bool",
					description: "Estado en línea del usuario"
				}
			}
		}
	}
})