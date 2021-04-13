'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('perfilusuario', { 
      id_perfil_usuario: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      perfil_usuario: {
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
    return queryInterface.dropTable('perfilusuario');
  }
};