db.biblioteca.aggregate([
  { $match: { "juegos.query": true } },
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
      juegos: {
        $let: {
          vars: { juegos: "$juegos", juego_info: "$juego_info" },
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
                            input: "$$juego_info",
                            as: "info",
                            cond: {
                              $eq: ["$$info.juego_id", "$$juego.juego_id"],
                            },
                          },
                        },
                        0,
                      ],
                    },
                  },
                  in: {
                    $mergeObjects: [
                      "$$juego",
                      {
                        titulo: "$$info.titulo",
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
  { $unset: ["juego_info"] },
  {
    $merge: {
      into: "biblioteca",
      on: "_id",
      whenMatched: "replace",
      whenNotMatched: "discard",
    },
  },
]);
