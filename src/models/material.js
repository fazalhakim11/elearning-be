'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  material.init({
    nama_material: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    tipe: DataTypes.STRING,
    xp: DataTypes.INTEGER,
    gold: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'material',
    underscored: true,
  });
  return material;
};