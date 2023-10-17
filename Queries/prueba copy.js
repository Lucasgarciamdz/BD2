db.biblioteca.aggregate([
  {
    $match: {
      "juegos.query": true
    }
  },
  {
    $lookup: {
      from: "juegos",
      localField: "juegos.juego_id",
      foreignField: "juego_id",
      as: "juego_info"
    }
  },
  {
    $set: {
      "juegos": {
        $map: {
          input: "$juegos",
          as: "juego",
          in: {
            $cond: {
              if: {
                $isArray: {
                  $filter: {
                    input: "$juego_info",
                    as: "info",
                    cond: {
                      $eq: ["$$info.juego_id", "$$juego.juego_id"]
                    }
                  }
                }
              },
              then: {
                $mergeObjects: [
                  "$$juego",
                  {
                    "titulo": {
                      $arrayElemAt: [
                        {
                          $map: {
                            input: {
                              $filter: {
                                input: "$juego_info",
                                as: "info",
                                cond: {
                                  $eq: ["$$info.juego_id", "$$juego.juego_id"]
                                }
                              }
                            },
                            as: "info",
                            in: "$$info.titulo"
                          }
                        },
                        0
                      ]
                    },
                    "imagen_url": {
                      $arrayElemAt: [
                        {
                          $map: {
                            input: {
                              $filter: {
                                input: "$juego_info",
                                as: "info",
                                cond: {
                                  $eq: ["$$info.juego_id", "$$juego.juego_id"]
                                }
                              }
                            },
                            as: "info",
                            in: "$$info.imagen_url"
                          }
                        },
                        0
                      ]
                    }
                  }
                ]
              },
              else: "$$juego"
            }
          }
        }
      }
    }
  },
  {
    $unset: ["juego_info"]
  },
  {
    $project: {
      "juegos.query": 0
    }
  },
  {
    $merge: {
      into: "biblioteca",
      on: "_id",
      whenMatched: "replace",
      whenNotMatched: "discard"
    }
  }
]);