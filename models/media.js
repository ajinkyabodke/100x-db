"use strict";

const post = require("./post");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Media.init(
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      index: { type: DataTypes.INTEGER, allowNull: false },
      postId: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: post,
          key: "id",
        },
      },
      mediaUrl: { type: DataTypes.STRING(2048), allowNull: false },
      type: {
        type: DataTypes.ENUM,
        values: ["image", "video", "gif"],
        allowNull: false,
      },
    
    },
    {
      sequelize,
      modelName: "Media",
    }
  );
  return Media;
};
