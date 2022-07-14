const { Router } = require('express');
const router = Router();
const { Activity, Country } = require('../db')

router.post('/', async (req, res) => {
    const { nombre, dificultad, duracion, temporada, idpais} = req.body

    try {
        const newActivity = await Activity.create({
            nombre,
            dificultad,
            duracion,
            temporada
        })

        const pushCountry = await Country.findOne({
            where: {
                id: idpais,
            }
        })
        await newActivity.addCountry(pushCountry)  //mixing sequelize add + nombreTabla
        res.sendStatus(201)

    } catch (error) {
        res.send(error)
    }
})


module.exports = router;