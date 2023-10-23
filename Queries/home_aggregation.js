db.home.aggregate([
  {
    $match: {
      "usuario.query": true
    }
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
  { $unset: ["usuario_info", "usuario.query"] },
  {
    $lookup: {
      from: "anunciantes",
      localField: "usuario.region", // Utiliza la región del usuario
      foreignField: "region", // Ajusta esto al campo de región en la colección de anunciantes
      as: "anunciantes"
    }
  },
  {
    $set: {
      anunciantes: {
        $map: {
          input: "$anunciantes", // Itera a través de los anunciantes
          as: "anunciante",
          in: {
            $mergeObjects: [
              "$$anunciante",
              {
                nombre_anunciante: "$$anunciante.empresa",
                imagen_url: "$$anunciante.imagen_url"
              }
            ]
          }
        }
      }
    }
  },
  {
    $merge: {
      into: "home",
      on: "_id",
      whenMatched: "merge",
      whenNotMatched: "discard"
    }
  }
]);
