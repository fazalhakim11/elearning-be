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
      material.belongsTo(models.sub_bab, {
        foreignKey: "id_sub_bab",
        as: "sub_bab"
      })
      material.belongsToMany(models.user, {
        through: "progress",
        foreignKey: "id_material",
        as: "user"
      })
      material.hasMany(models.progress, {
        foreignKey: "id_material",
        as: "progresses"
      })
    }
  }
  material.init({
    nama_material: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    tipe: DataTypes.STRING,
    xp: DataTypes.INTEGER,
    gold: DataTypes.INTEGER,
    id_sub_bab: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'material',
    underscored: true,
  });
  return material;
};