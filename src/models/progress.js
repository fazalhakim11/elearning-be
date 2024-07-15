'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class progress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      progress.belongsTo(models.user, {
        foreignKey: "id_user",
        as: "user"
      })
      progress.belongsTo(models.material, {
        foreignKey: "id_material",
        as: "material"
      })
    }
  }
  progress.init({
    status_progress: DataTypes.BOOLEAN,
    id_user: DataTypes.INTEGER,
    id_material: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'progress',
    underscored: true,
  });
  return progress;
};