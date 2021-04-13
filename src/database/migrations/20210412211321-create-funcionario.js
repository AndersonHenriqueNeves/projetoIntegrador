'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('funcionario', { 
      id_funcionario: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
      },
      nome_funcionario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_foto: {
        type: Sequelize.STRING,
        references: { model: 'foto', key: 'id_foto' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
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
    return queryInterface.dropTable('funcionario');
  }
};