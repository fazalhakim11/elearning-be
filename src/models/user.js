'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsToMany(models.material, {
        through: "progress",
        foreignKey: "id_user",
        as: "material"
      })
      user.hasMany(models.progress, {
        foreignKey: "id_user",
        as: "progresses",
      })
    }
  }
  user.init({
    nama_user: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    underscored: true,
  });
  return user;
};