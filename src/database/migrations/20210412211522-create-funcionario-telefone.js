'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('funcionario_telefone', { 
      id_funcionario_telefone: {
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
      id_telefone: {
        type: Sequelize.STRING,
        references: { model: 'telefone', key: 'id_telefone' },
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
    return queryInterface.dropTable('funcionario_telefone');
  }
};