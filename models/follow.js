"use strict";

const user = require("./user");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Follow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Follow.init(
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      followerId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: user,
          key: "id",
        },
      },
      followingId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: user,
          key: "id",
        },
      },
      timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Follow",
    }
  );
  return Follow;
};
