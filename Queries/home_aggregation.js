db.home.aggregate([
  {
    $match: { "usuario.query": true }
  },
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
  { $unset: ["usuario_info", "usuario.query"] },
  {
    $lookup: {
      from: "anunciantes",
      localField: "anunciantes.anunciante_id",
      foreignField: "_id",
      as: "anunciante_info"
    }
  },
  {
    $set: {
      anunciantes: {
        $let: {
          vars: { anunciantes: "$anunciantes", anunciante_info: "$anunciante_info" },
          in: {
            $map: {
              input: "$$anunciantes",
              as: "anunciante",
              in: {
                $let: {
                  vars: {
                    info: {
                      $arrayElemAt: [
                        {
                          $filter: {
                            input: "$$anunciante_info",
                            as: "info",
                            cond: {
                              $eq: ["$$info._id", "$$anunciante.anunciante_id"]
                            }
                          }
                        },
                        0
                      ]
                    }
                  },
                  in: {
                    $mergeObjects: [
                      "$$anunciante",
                      {
                        nombre_anunciante: "$$info.nombre",
                        imagen_url: "$$info.imagen_url"
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  { $unset: ["anunciante_info", "anunciantes.query"] },
  {
    $merge: {
      into: "home",
      on: "_id",
      whenMatched: "replace",
      whenNotMatched: "discard"
    }
  }
]);
