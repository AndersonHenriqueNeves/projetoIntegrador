import Sequelize, { Model } from 'sequelize';

class PerfilUsuario extends Model {
  static init(sequelize) {
    super.init({
      id_perfil_usuario: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },   
      perfil_usuario: Sequelize.STRING,
    },{
      sequelize,
      tableName: 'perfilusuario'
    });

    return this;
  }
}

export default PerfilUsuario;