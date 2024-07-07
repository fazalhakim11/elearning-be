'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mata_pelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mata_pelajaran.init({
    nama_mata_pelajaran: DataTypes.STRING,
    icon_mata_pelajaran: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mata_pelajaran',
    underscored: true,
  });
  return mata_pelajaran;
};