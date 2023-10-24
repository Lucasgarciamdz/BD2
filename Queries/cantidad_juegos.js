db.biblioteca.aggregate([
    {
      $lookup: {
        from: "usuarios",
        localField: "usuario.usuario_id",
        foreignField: "usuario_id",
        as: "usuario_info"
      }
    },
    {
      $unwind: "$usuario_info"
    },
    {
      $group: {
        _id: "$usuario_info.region",
        totalJuegos: { $sum: { $size: "$juegos" } }
      }
    },
    {
      $project: {
        _id: 0,
        region: "$_id",
        promedioJuegos: { $avg: "$totalJuegos" }
      }
    }
  ]).explain("executionStats");

      // sin index  390,332ms
      // con index  56,000ms
  