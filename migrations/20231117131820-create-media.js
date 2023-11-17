"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, { DataTypes }) {
    await queryInterface.createTable("Media", {
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
          model: "Posts",
          key: "id",
        },
      },
      url: { type: DataTypes.STRING(2048), allowNull: false },
      type: {
        type: DataTypes.ENUM,
        values: ["image", "video", "gif"],
        allowNull: false,
      },
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
