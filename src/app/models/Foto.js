import Sequelize, { Model } from 'sequelize';

class Foto extends Model {
  static init(sequelize) {
    super.init({
      id_foto: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      }, 
      imagem: Sequelize.STRING,
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `http://localhost:3333/files/${this.imagem}`;
        }
      }
    },{
      sequelize,
      tableName: 'foto'
    });

    return this;
  }
}

export default Foto;