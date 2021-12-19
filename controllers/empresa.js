const Empresa = require('../models/Empresa');

const empresas = [new Empresa(), new Empresa()];

//console.log(empresas)

const crearNuevaEmpresa = (req, res) => {
  const newEmpresa = new Empresa();
  empresas.push(newEmpresa);
  res.json(newEmpresa)
}

const getEmpresas = (req, res) => {
  res.json(empresas)
}

module.exports = {crearNuevaEmpresa, getEmpresas};