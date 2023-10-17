db.biblioteca.aggregate([
  {
    $match: {
      "usuario.query": true,
      "juegos.query": true,
    },
  },
  {
    $lookup: {
      from: "usuarios",
      localField: "usuario.usuario_id",
      foreignField: "usuario_id",
      as: "usuario_info",
    },
  },
  {
    $set: {
      "usuario.nombre_usuario": { $first: "$usuario_info.username" },
      "usuario.foto_perfil": { $first: "$usuario_info.foto_perfil" },
    },
  },
  { $unset: ["usuario_info"] },
  {
    $unwind: "$juegos",
  },
  {
    $lookup: {
      from: "juegos",
      localField: "juegos.juego_id",
      foreignField: "juego_id",
      as: "juego_info",
    },
  },
  {
    $set: {
      "juegos.titulo": { $first: "$juego_info.titulo" },
      "juegos.imagen_url": { $first: "$juego_info.imagen_url" },
    },
  },
  {
    $unset: ["juego_info"],
  },
  {$},
  {
    $merge: {
      into: "biblioteca",
      on: "_id",
      whenMatched: "replace",
      whenNotMatched: "discard",
    },
  }
])