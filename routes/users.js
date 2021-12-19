const router = require("express").Router();
const {crearNuevoUsuario, getUsers} = require('../controllers/usuario');

router.get("/new", getUsers)
router.post("/new", crearNuevoUsuario)

module.exports = router;