// Define the pipeline stages for the aggregation
var reshape_review_docs_pipeline = 

db.reseñas.aggregate([
  {
    $lookup: {
      from: "usuarios",
      localField: "usuario_id",
      foreignField: "usuario_id",
      as: "usuario_info",
    },
  },
  {
    $unwind: {
      path: "$usuario_info",
      includeArrayIndex: "string",
      preserveNullAndEmptyArrays: false,
    },
  },
  {
    $project: {
      _id: "$_id",
      "usuario.nombre": "$usuario_info.nombre",
      "usuario.usuario_id": "$usuario_id",
    },
  },
  {
    $merge: {
      into: "reseñas",
      on: "_id",
      whenMatched: "replace",
      whenNotMatched: "discard",
    },
  },
])

// Run the aggregation pipeline on the "reviews" collection
db.reseñas.aggregate(reshape_review_docs_pipeline);


// funciona
db.reseñas.aggregate([
  {
    $lookup: {
      from: "usuarios",
      localField: "usuario.usuario_id",
      foreignField: "usuario_id",
      as: "usuario_info",
    },
  },
  { $unwind: { path: "$usuario_info", preserveNullAndEmptyArrays: true } },
  { $set: { "usuario.nombre": "$usuario_info.nombre" } },
  { $unset: "usuario_info" },
  {
    $merge: {
      into: "reseñas",
      on: "_id",
      whenMatched: "replace",
      whenNotMatched: "insert",
    },
  },
]);
