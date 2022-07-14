const { Router } = require('express');
const router = Router();
const { Sequelize } = require('sequelize')
const { Country, Activity } = require('../db')



router.get('/', async (req, res) => {
    try {
        const {name} = req.query;
        if (name) {
            let upperName = name.charAt(0).toUpperCase() + name.slice(1)
            const countries = await Country.findAll({
                where: {
                    nombre: { [Sequelize.Op.iLike]: `%${upperName}%`}
                },
                include: Activity  //include para hacer el join de las tablas
                })
                return countries ? res.json(countries) : res.sendStatus(404)
            }
        else {
            const allCountries = await Country.findAll()
            return  res.json(allCountries);
        }
    } catch (error) {
        res.send(error)
    }
})

router.get('/:idpais', async (req, res) => {
    try {
        const {idpais} = req.params;
        const country = await Country.findByPk(idpais);
        res.json(country || 'pais no encontrado')
    } catch (error) {
        res.send(error)
    }
})




module.exports = router;