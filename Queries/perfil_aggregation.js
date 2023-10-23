db.perfil.aggregate([
    {
      $lookup: {
        from: "usuarios",
        localField: "usuario.usuario_id",
        foreignField: "_id",
        as: "usuario_info"
      }
    },
    {
      $set: {
        "usuario.nombre_usuario": { $arrayElemAt: ["$usuario_info.username", 0] },
        "usuario.foto_perfil": { $arrayElemAt: ["$usuario_info.foto_perfil", 0] }
      }
    },
    {
      $unset: ["usuario_info"]
    }
  ]);
  