const usuariosServices = require('../services/usuariosServices'); 

const controller = {
	getUsuarios: async (req, res)=> {
		res.json(await usuariosServices.getUsuarios(req.query));
	},
	createProfesional: async (req, res)=> {
		res.json(await usuariosServices.createProfesional(req.body));
	},
	loginUsuario: async (req, res)=> {
		res.json(await usuariosServices.loginUsuario(req.body,req.session));
	},
	updateUsuario: async (req, res)=> {
		res.json(await usuariosServices.updateUsuario(req.body));
	},
	deleteUsuario: async (req, res)=> {
		res.json(await usuariosServices.deleteUsuario(req.body));
	},
};

module.exports = controller;