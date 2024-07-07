'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mode_pembelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      mode_pembelajaran.belongsTo(models.kelas, { 
        foreignKey: 'id_kelas',
        as: "kelas" 
      })
      mode_pembelajaran.hasMany(models.mata_pelajaran, {
        foreignKey: "id_mode_pembelajaran",
        as: "mata_pelajaran"
      })
    }
  }
  mode_pembelajaran.init({
    nama_mode_pembelajaran: DataTypes.STRING,
    id_kelas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mode_pembelajaran',
    underscored: true,
  });
  return mode_pembelajaran;
};