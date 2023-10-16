db.biblioteca.aggregate([
  {
    $lookup: {
      from: "usuarios",
      localField: "usuario.usuario_id",
      foreignField: "usuario_id",
      as: "usuario_info",
    },
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
    $unwind: {
      path: "$usuario_info",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $unwind: {
      path: "$juego_info",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $set: {
      "usuario.nombre_usuario": "$usuario_info.username",
      "usuario.foto_perfil": "$usuario_info.foto_perfil",
    },
  },
  {
    $set: {
      "juegos.$[].title": "$juego_info.titulo",
      "juegos.$[].imagen_url": "$juego_info.imagen_url",
    },
  },
  {
    $unset: ["usuario_info", "juego_info"],
  },
  {
    $match: {
      "juegos.title": { $exists: true, $ne: null },
      "juegos.imagen_url": { $exists: true, $ne: null },
    },
  },
  {
    $merge: {
      into: "biblioteca",
      on: "_id",
      whenMatched: "replace",
      whenNotMatched: "discard",
    },
  },
]);
