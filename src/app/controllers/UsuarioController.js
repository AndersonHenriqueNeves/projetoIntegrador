import Usuario from '../models/Usuario';
import PerfilUsuario from '../models/PerfilUsuario';
import Funcionario from '../models/Funcionario';
import { v4 as uuidV4 } from "uuid";
import bcrypt from 'bcryptjs';

class UsuarioController {
  async store(req, res) {
    let perfilExists = await PerfilUsuario.findOne({
      where: {
        perfil_usuario: req.body.perfil_usuario
      }
    })

    if(perfilExists) {
      return res.status(401).json({ error: 'O perfil de usuário já existe'});
    }

    let funcionarioExists = await Funcionario.findOne({
      where: {
        id_funcionario: req.body.id_funcionario
      }
    })

    if(!funcionarioExists) {
      return res.status(401).json({ error: 'O funcionario não existe'});
    }

    if(req.body.senha.length < 8) {
      return res.status(401).json({ error: 'A senha deve conter no minimo 8 caracteres'});
    }

    if(/[!@#$%*()_+^&{}}:;?.]/gm.test(req.body.senha)){
      return res.status(401).json({ error: 'A senha não pode conter caracter especial'});
    }

    if(/[!@#$%*()_+^&{}}:;?.]/gm.test(req.body.perfil_usuario)){
      return res.status(401).json({ error: 'O perfil de usuário não pode conter caracter especial'});
    }

    if(/[A-Z]/gm.test(req.body.perfil_usuario)){
      return res.status(401).json({ error: 'O perfil de usuário não pode conter letra maiuscula'})
    }

    if(!(/[a-z]/gm.test(req.body.perfil_usuario[0]))){
      return res.status(401).json({ error: 'O perfil de usuário deve começar com letra minúscula'})
    }

    req.body.senha = await bcrypt.hash(req.body.senha, 8);
 
    let createPerfil = await PerfilUsuario.create({
      id_perfil_usuario: uuidV4(),
      perfil_usuario: req.body.perfil_usuario
    })

    let usuario = await Usuario.create({
      id_usuario: uuidV4(),
      id_funcionario: req.body.id_funcionario,
      id_perfil_usuario: createPerfil.id_perfil_usuario,
      senha: req.body.senha
    });

    return res.status(200).send();
  }
}

export default new UsuarioController();