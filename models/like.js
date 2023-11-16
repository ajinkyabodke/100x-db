"use strict";

import user from "./user";
import post from "./post";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Like.init(
    {
      id: { type: DataTypes.BIGINT, autoIncrement: true, allowNull: false },
      userId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: user,
          key: "id",
        },
      },
      postId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: post,
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Like",
    }
  );
  return Like;
};
