const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const countryRoute = require('./country')
const activityRoute = require('./activity')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//configurando middleware
router.use('/countries', countryRoute)
router.use('/activities', activityRoute)


module.exports = router;
