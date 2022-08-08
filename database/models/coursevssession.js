'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseVsSession extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CourseVsSession.init({
    course_id: DataTypes.INTEGER,
    session_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CourseVsSession',
  });
  return CourseVsSession;
};