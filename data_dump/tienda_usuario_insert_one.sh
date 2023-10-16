db.tienda_usuario.insertOne({
    "usuario": {
        "usuario_id": 1,
        "nombre_usuario": "Juan",
        "mail": "juan@gmail.com"
    },
    "wishlist": [{
        "juego_id": 1,
        "titulo": "The Witcher 3",
        "imagen_url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.3djuegos.com%2Fjuegos%2Fanalisis%2F20140%2F0%2Fthe-witcher-3-wild-hunt%2F&psig=AOvVaw0QZ3Z3Z3Z3Z3Z3Z3Z3Z3Z3&ust=1623686160000000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4ZqH0_ECFQAAAAAdAAAAABAD",
        "precio": 1000
    },
    {
        "juego_id": 2,
        "titulo": "The Witcher 2",
        "imagen_url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.3djuegos.com%2Fjuegos%2Fanalisis%2F20140%2F0%2Fthe-witcher-3-wild-hunt%2F&psig=AOvVaw0QZ3Z3Z3Z3Z3Z3Z3Z3Z3Z3&ust=1623686160000000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4ZqH0_ECFQAAAAAdAAAAABAD",
        "precio": 1000
    }],
    "total": 2
    }
)