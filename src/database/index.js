import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Usuario from '../app/models/Usuario';
import Foto from '../app/models/Foto';
import Funcionario from '../app/models/Funcionario';
import Email from '../app/models/Email';
import Telefone from '../app/models/Telefone';
import PerfilUsuario from '../app/models/PerfilUsuario';

const connection = new Sequelize(databaseConfig);

Usuario.init(connection);
Foto.init(connection);
Funcionario.init(connection);
Email.init(connection);
Telefone.init(connection);
PerfilUsuario.init(connection);

Usuario.associate(connection.models);
Funcionario.associate(connection.models);
Email.associate(connection.models);
Telefone.associate(connection.models);

module.exports = connection;

