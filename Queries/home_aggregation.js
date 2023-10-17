db.biblioteca.aggregate([
    { $match: { "usuario.query": true, "juegos_descuentos.query": true, "anunciantes.query": true } },
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
    { $unset: ["usuario_info", "usuario.query"] },
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
        juegos_descuento: {
          $let: {
            vars: { juegos_descuento: "$juegos_descuento", juego_descuento_info: "$juego_descuento_info" },
            in: {
              $map: {
                input: "$$juegos_descuento",
                as: "juego_descuento",
                in: {
                  $let: {
                    vars: {
                      info: {
                        $arrayElemAt: [
                          {
                            $filter: {
                              input: "$$juego_descuento_info",
                              as: "info",
                              cond: {
                                $eq: ["$$info.juego_id", "$$juego_descuento.juego_id"],
                              },
                            },
                          },
                          0,
                        ],
                      },
                    },
                    in: {
                      $mergeObjects: [
                        "$$juego_descuento",
                        {
                          titulo: "$$info.titulo",
                          imagen_url: "$$info.imagen_url",
                          precio: "$$info.precio"
                        },
                      ],
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    { $unset: ["juego_descuento_info", "juegos_descuento.query"] },

    {
      $lookup: {
        from: "anunciantes",
        localField: "anunciantes.anunciante_id",
        foreignField: "anunciante_id",
        as: "anunciante_info",
      },
    },
    {
        $set: {
          anunciantes: {
            $let: {
              vars: { anunciantes: "$anunciantes", anunciante_info: "$anunciante_info" },
              in: {
                $map: {
                  input: "$$juegos",
                  as: "juego",
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
                                  $eq: ["$$info.anunciante_id", "$$anunciante.anunciante_id"],
                                },
                              },
                            },
                            0,
                          ],
                        },
                      },
                      in: {
                        $mergeObjects: [
                          "$$anunciante",
                          {
                            nombre: "$$info.nombre",
                            imagen_url: "$$info.imagen_url",
                          },
                        ],
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },

    { $unset: ["anunciante_info", "anunciante.query"] },
    {
      $merge: {
        into: "biblioteca",
        on: "_id",
        whenMatched: "replace",
        whenNotMatched: "discard",
      },
    },
  ]);
  