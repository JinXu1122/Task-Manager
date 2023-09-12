'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      dueDate: {
        type: Sequelize.DATE
      },
      priority: {
        type: Sequelize.STRING
      },
      order: {
        type: Sequelize.INTEGER
      },
      tasklist_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'TaskLists', // Name of the referenced table
          key: 'id'       // Name of the referenced column
        },
        onUpdate: 'CASCADE', // Optional: What to do on update of referenced key
        onDelete: 'CASCADE'  // Optional: What to do on deletion of referenced key
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tasks');
  }
};