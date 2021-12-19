const router = require('express').Router();
const {crearNuevaEmpresa, getEmpresas} = require('../controllers/empresa');

router.get("/new", getEmpresas);
router.post("/new", crearNuevaEmpresa);

module.exports = router;