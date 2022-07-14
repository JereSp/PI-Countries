const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagenBandera: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
    },
    poblacion: {
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
  });
};
