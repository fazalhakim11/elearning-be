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
      // define association here
    }
  }
  progress.init({
    status_progress: DataTypes.DECIMAL(10,2)
  }, {
    sequelize,
    modelName: 'progress',
    underscored: true,
  });
  return progress;
};