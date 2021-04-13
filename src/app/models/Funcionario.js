import Sequelize, { Model } from 'sequelize';

class Funcionario extends Model {
  static init(sequelize) {
    super.init({
      id_funcionario: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      }, 
      nome_funcionario: Sequelize.STRING,
      cpf: Sequelize.STRING,
    },{
      sequelize,
      tableName: 'funcionario'
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Foto, { foreignKey: 'id_foto', as: 'idFoto' });
    this.belongsToMany(models.Email, { foreignKey: 'id_funcionario', through: 'funcionario_email', as: 'email' });
    this.belongsToMany(models.Telefone, { foreignKey: 'id_funcionario', through: 'funcionario_telefone', as: 'telefone' });
  }
}

export default Funcionario;