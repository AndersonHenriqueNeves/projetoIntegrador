'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario', { 
      id_usuario: {
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
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_perfil_usuario: {
        type: Sequelize.STRING,
        references: { model: 'perfilusuario', key: 'id_perfil_usuario' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      usuario_bloqueado: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    return queryInterface.dropTable('usuario');
  }
};