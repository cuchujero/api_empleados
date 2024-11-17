
const express = require('express');
const router = express.Router();
const usuariosRouter = require('./usuariosRouter'); 

router.get('/test', async (req, res)=> { res.json({code: 200, message: 'respuesta correcta'}); },); 
router.use('/users', usuariosRouter); 

module.exports = router;
