'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bab.init({
    nama_bab: DataTypes.STRING,
    icon_bab: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bab',
    underscored: true,
  });
  return bab;
};