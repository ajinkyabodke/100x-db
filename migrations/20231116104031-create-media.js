"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Media", {
      id: { type: Sequelize.BIGINT, autoIncrement: true, allowNull: false },
      index: { type: Sequelize.INTEGER, allowNull: false },
      postId: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: "Posts",
          key: "id",
        },
      },
      url: { type: Sequelize.STRING(2048), allowNull: false },
      type: {
        type: Sequelize.ENUM,
        values: ["image", "video", "gif"],
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Media");
  },
};
