import Sequelize, { Model } from 'sequelize';

class Telefone extends Model {
  static init(sequelize) {
    super.init({
      id_telefone: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      }, 
      numero_telefone: Sequelize.STRING,
    },{
      sequelize,
      tableName: 'telefone'
    });

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Funcionario, { foreignKey: 'id_telefone', through: 'funcionario_telefone', as: 'funcionario' });
  }
}

export default Telefone;