db.anunciantes.aggregate([
    {
      $lookup: {
        from: "usuarios",
        localField: "region",
        foreignField: "region",
        as: "usuarios_region"
      }
    },
    {
      $project: {
        anunciante_id: 1,
        empresa: 1,
        region: 1,
        usuarios_region: { $size: "$usuarios_region" }
      }
    }
  ]);


  // sin index 42,097ms
  // con index 19,084ms