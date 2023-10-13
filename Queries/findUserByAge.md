db.usuarios.aggregate([
    {
        $project: {
            nombre: 1,
            fecha_nac: 1,
            edad: {
                $subtract: [
                    { $toInt: { $substr: [ { $toString: { $year: new Date() } }, 0, 4 ] } },
                    { $toInt: { $substr: [ { $toString: { $year: "$fecha_nac" } }, 0, 4 ] } }
                ]
            }
        }
    },
    {
        $match: {
            edad: { $gte: 18 }
        }
    }
]).pretty()