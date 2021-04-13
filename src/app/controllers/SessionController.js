import jwt from 'jsonwebtoken';
import PerfilUsuario from '../models/PerfilUsuario';
import Usuario from '../models/Usuario';

import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { perfilusuario, password } = req.body;

    let perfil = await PerfilUsuario.findOne({
      where: {
        perfil_usuario: perfilusuario
      }
    })

    if(!perfil) {
      return res.status(401).json({error: 'Perfil de usuário não encontrado'});
    }

    let user = await Usuario.findOne({
      where: {
        id_perfil_usuario: perfil.id_perfil_usuario
      }
    });

    if(!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha errada'});
    }

    if(user.usuario_bloqueado == true) {
      return res.status(401).json({error: 'Usuário bloqueado, tente mais tarde'});
    }

    const { id_usuario, id_perfil_usuario } = user;

    return res.json({
      user: {
        id_usuario,
        id_perfil_usuario
      },
      token: jwt.sign({ id_usuario }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      })
    })


  }
}

export default new SessionController();