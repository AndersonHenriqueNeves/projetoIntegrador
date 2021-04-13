'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('funcionario_email', { 
      id_funcionario_email: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      id_funcionario: {
        type: Sequelize.STRING,
        references: { model: 'funcionario', key: 'id_funcionario' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      id_email: {
        type: Sequelize.STRING,
        references: { model: 'email', key: 'id_email' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('funcionario_email');
  }
};