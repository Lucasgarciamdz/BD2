db.usuarios.aggregate([
    {
        $project: {
            nombre: 1,
            fecha_nac: 1,
            edad: {
                $subtract: [
                    { $toInt: { $substr: [ { $toString: { $year: new Date() } }, 0, 4 ] } },
                    { $toInt: { $substr: [ { $toString: "$fecha_nac" }, 0, 4 ] } }
                ]
            }
        }
    },
    {
        $lookup: {
            from: "juegos",
            localField: "edad",
            foreignField: "rating",
            as: "juegos_disponibles"
        }
    },
    {
        $unwind: "$juegos_disponibles"
    },
    {
        $match: {
            "juegos_disponibles.rating": { $gte: 18 }
        }
    },
    {
        $group: {
            _id: "$_id",
            nombre: { $first: "$nombre" },
            edad: { $first: "$edad" }
        }
    }
])
