'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Question.belongsToMany(models.Game, { through: 'UserTeamMaps', foreignKey: 'question_id' });
      Question.hasMany(models.Answer,{foreignKey: 'question_id'})
    }
  };
  Question.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    lvl: {
      type: DataTypes.INTEGER
    },
    content: {
      type: DataTypes.STRING
    },
  }, {
    underscored: true,
    sequelize,
    modelName: 'Question',
  });
  return Question;
};