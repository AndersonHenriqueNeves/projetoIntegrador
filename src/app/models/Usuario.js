import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Usuario extends Model {
  static init(sequelize) {
    super.init({
      id_usuario: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      }, 
      password: Sequelize.VIRTUAL,
      senha: Sequelize.STRING,
      usuario_bloqueado: Sequelize.BOOLEAN,
    },{
      sequelize,
      tableName: 'usuario'
    });

    return this;
  }
  
  static associate(models) {
    this.belongsTo(models.PerfilUsuario, { foreignKey: 'id_perfil_usuario', as: 'idPerfilUsuario' });
    this.belongsTo(models.Funcionario, { foreignKey: 'id_funcionario', as: 'idFuncionario' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.senha);
  }
}

export default Usuario;