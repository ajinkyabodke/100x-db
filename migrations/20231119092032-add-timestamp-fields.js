"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, { DataTypes }) {
    queryInterface.addColumn("Posts", "updatedAt", {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    });
    queryInterface.addColumn("Media", "updatedAt", {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    });
    queryInterface.addColumn("Media", "createdAt", {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    });
    queryInterface.addColumn("Likes", "createdAt", {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    });
    queryInterface.addColumn("Likes", "updatedAt", {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    });
    queryInterface.addColumn("Follows", "createdAt", {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    });
    queryInterface.addColumn("Follows", "updatedAt", {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
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
