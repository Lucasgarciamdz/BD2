db.usuarios.aggregate([
    {
      $group: {
        _id: "$region",
        totalUsuarios: { $sum: 1 }
      }
    },
    {
      $project: {
        region: "$_id",
        totalUsuarios: 1,
        _id: 0
      }
    }
  ]).explain("executionStats");
  
    // sin index 446ms
    // con index 377ms