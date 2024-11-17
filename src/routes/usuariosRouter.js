const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const {usuarioFieldsValidator, IdValidator} = require('../helpers/validationsFields');
const {generalValidation} = require('../middlewares/validationsMw');
const {requestAuthorization} = require('../middlewares/authorizationRequestMw');

router.get('/', requestAuthorization, usuariosController.getUsuarios);
router.post('/', requestAuthorization, usuarioFieldsValidator, generalValidation, usuariosController.createProfesional);
router.post('/login', requestAuthorization, usuariosController.loginUsuario);
router.put('/', requestAuthorization, IdValidator, usuarioFieldsValidator, generalValidation, usuariosController.updateUsuario);
router.delete('/', requestAuthorization, IdValidator, generalValidation, usuariosController.deleteUsuario);

module.exports = router;