const router = require("express").Router();

const { crearNuevoUsuarioEmpresa } = require("../controllers/usuario-empresa");

router.post("/", crearNuevoUsuarioEmpresa);


module.exports = router;
