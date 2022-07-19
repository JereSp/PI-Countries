const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('activity', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    dificultad: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        allowNull: false,
    },
    duracion: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    temporada: {
        type: DataTypes.ENUM("verano", "otoño", "primavera", "invierno"),
        allowNull: false,
    },
    }, {
        timestamps: false,
    });
};
