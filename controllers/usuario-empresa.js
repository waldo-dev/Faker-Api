const Empresa = require('../models/Empresa');
const Usuario = require('../models/Usuario');


const crearNuevoUsuarioEmpresa = (req, res) => {
  const newUsuario = new Usuario();
  const newEmpresa = new Empresa();
  const newUsuarioEmpresa = [];
  newUsuarioEmpresa.push(newUsuario)
  newUsuarioEmpresa.push(newEmpresa)

  res.json(newUsuarioEmpresa);
}

module.exports = {crearNuevoUsuarioEmpresa};