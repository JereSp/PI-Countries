//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const axios = require('axios');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Country } = require ('./src/db.js')

// Syncing all the models at once.

// let createData = async () => {
// const allCountries = Country.findAll();
// if(!allCountries.length){
// const apiCountriesResponse = await axios.get('https://restcountries.com/v3/all');
// let apiCountries = apiCountriesResponse.data.map((e) => {
//     return {
//       id: e.cca3,
//       nombre: e.name.common,
//       imagenBandera: e.flags[0],
//       continente: e.continents[0],
//       capital: e.capital ? e.capital[0] : 'Not found',
//       subregion: e.subregion,
//       area: e.area,
//       poblacion: e.population
//       }
//     })
//       await Country.bulkCreate(apiCountries);
//       console.log('bbd creada')
//   }
// }
// createData()

conn.sync({force: true}).then(() => {
  server.listen(process.env.PORT, async() => {
    const allCountries = Country.findAll();
    if(!allCountries.length){
    const apiCountriesResponse = await axios.get('https://restcountries.com/v3/all');
    let apiCountries = apiCountriesResponse.data.map((e) => {
        return {
          id: e.cca3,
          nombre: e.name.common,
          imagenBandera: e.flags[0],
          continente: e.continents[0],
          capital: e.capital ? e.capital[0] : 'Not found',
          subregion: e.subregion,
          area: e.area,
          poblacion: e.population
          }
        })
          await Country.bulkCreate(apiCountries);
          console.log('bbd creada')
      }
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
