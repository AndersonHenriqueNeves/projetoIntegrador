import Sequelize, { Model } from 'sequelize';

class Email extends Model {
  static init(sequelize) {
    super.init({
      id_email: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      }, 
      email: Sequelize.STRING,
    },{
      sequelize,
      tableName: 'email'
    });

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Funcionario, { foreignKey: 'id_email', through: 'funcionario_email', as: 'funcionario' });
  }
}

export default Email;