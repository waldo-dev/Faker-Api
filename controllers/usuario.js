const Usuario = require("../models/Usuario")

const usuarios = [new Usuario(), new Usuario(), new Usuario()];

//console.log(usuarios);
const crearNuevoUsuario = (res, response) => {
  const newUsuario = new Usuario();
  usuarios.push(newUsuario);
  response.json(newUsuario)
}

const getUsers = (req, res) => {
  res.json(usuarios)
}

module.exports = {crearNuevoUsuario, getUsers};