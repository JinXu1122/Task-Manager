'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TaskList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TaskList.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
      TaskList.hasMany(models.Task, {
        foreignKey:'tasklist_id',
        as:'tasks'
      })
    }
  }
  TaskList.init({
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    order: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TaskList',
  });
  return TaskList;
};