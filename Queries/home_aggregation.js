db.home.aggregate([
  {
    $match: { "usuario.query": true }
  },
  {
    $lookup: {
      from: "usuarios",
      localField: "usuario.usuario_id",
      foreignField: "usuario_id",
      as: "usuario_info"
    }
  },
  {
    $set: {
      "usuario.nombre_usuario": { $first: "$usuario_info.username" },
      "usuario.foto_perfil": { $first: "$usuario_info.foto_perfil" }
    }
  },
  {
    $unset: ["usuario_info", "usuario.query"]
  },
  {
    $merge: {
      into: "home",
      on: "_id",
      whenMatched: "replace",
      whenNotMatched: "discard"
    }
  }
]);
