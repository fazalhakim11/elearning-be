'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      kelas.hasMany(models.mode_pembelajaran, { 
        foreignKey: 'id_kelas',
        as: "mode_pembelajaran" 
      });
    }
  }
  kelas.init({
    nama_kelas: DataTypes.STRING,
    image: DataTypes.STRING,
    bg_color: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'kelas',
    underscored: true,
  });
  return kelas;
};