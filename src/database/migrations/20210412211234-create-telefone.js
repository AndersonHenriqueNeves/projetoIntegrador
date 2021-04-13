'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('telefone', { 
      id_telefone: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      numero_telefone: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('telefone');
  }
};