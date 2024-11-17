const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const {usuarioFieldsValidator, IdValidator} = require('../helpers/validationsFields');
const {requestAuthorization} = require('../middlewares/authorizationRequestMw');

router.get('/', requestAuthorization, usuariosController.getUsuarios);
router.post('/', requestAuthorization, usuarioFieldsValidator, usuariosController.createProfesional);
router.post('/login', requestAuthorization, usuariosController.loginUsuario);
router.put('/', requestAuthorization, IdValidator, usuarioFieldsValidator, usuariosController.updateUsuario);
router.delete('/', requestAuthorization, IdValidator, usuariosController.deleteUsuario);

module.exports = router;