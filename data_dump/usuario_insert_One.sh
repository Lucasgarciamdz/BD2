#!/bin/zsh

db.usuarios.insertOne({
    "usuario_id": 1,
    "nombre": "Lucas",
    "apellido": "Garcia",
    "username": "lucasgarcia",
    "fecha_nac": new Date("2002-09-18"),
    "email": "lu.garcia@alumno.um.edu.ar",
    "password": "123456",
    "foto_perfil": "https://picsum.photos/id/4/200/300",
})