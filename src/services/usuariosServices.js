const bd = require('../database/models'); 
const bcrypt = require('bcrypt');

const services = {

    getUsuarios: (userData) => {

        if (!userData.num_asignacion){
            return {code: 404, message: 'numero de asignacion faltante'};
        }

        const where = { num_asignacion: userData.num_asignacion };

        if (userData.usuarioId) where.id = userData.usuarioId;
        if (userData.Rol) where.Rol = userData.Rol;
        if (userData.RUT) where.RUT = userData.RUT;
    
        const options = {
            where,
            order: userData.orderValue ? [[userData.orderValue, userData.orderType || 'ASC']] : []
        };
        
        return userData.usuarioId 
        ? bd.Usuario.findByPk(userData.usuarioId, options) 
        : bd.Usuario.findAll(options);
    },
    
    createProfesional: async (userData) => {

        if (!userData.num_asignacion){
            return {code: 404, message: 'numero de asignacion faltante'};
        }

        await bd.Usuario.create({
            nombre: userData.nombre,
            apellido: userData.apellido,
            telefono: userData.telefono,
            RUT: userData.RUT,
            email: userData.email,
            clave: bcrypt.hashSync(userData.clave,10),
            fechaNacimiento: userData.fechaNacimiento,
            num_asignacion: userData.num_asignacion,
            Rol: 'empleado'
        });

        return {code: 200, message: 'usuario creado'};
    },

    loginUsuario: async (usuarioData, reqSession) => {
        const usuarioSearch = await bd.Usuario.findOne({where: {email: usuarioData.email}});

        if (!usuarioSearch){
            return {code: 404, message: 'email no encontrado'};
        }
       
        if(bcrypt.compareSync(usuarioData.clave, usuarioSearch.clave)){
            reqSession.user_id = usuarioSearch.id;
            return {code: 200, message: 'acceso exitoso', data: usuarioSearch};
        }

        return {code: 401, message: 'clave incorrecta'};
    },

    updateUsuario: async (userData) => {

        if (!userData.id) { return {code: 404, message: 'id de usuario faltante'}; }

        const updatedFields = {};

        if (userData.nombre) updatedFields.nombre = userData.nombre;
        if (userData.apellido) updatedFields.apellido = userData.apellido;
        if (userData.telefono) updatedFields.telefono = userData.telefono;
        if (userData.RUT) updatedFields.RUT = userData.RUT;
        if (userData.email) updatedFields.email = userData.email;
        if (userData.clave) updatedFields.clave = bcrypt.hashSync(userData.clave, 10);
        if (userData.fechaNacimiento) updatedFields.fechaNacimiento = userData.fechaNacimiento;

        if (userData.Rol) updatedFields.Rol = userData.Rol;
    
        await bd.Usuario.update(updatedFields, {
            where: { id: userData.id }
        });

        return {code: 200, message: 'usuario modificado'};
    },

    deleteUsuario: async (usuarioData) => {
        if (!usuarioData.id) { return {code: 404, message: 'id de usuario faltante'}; }
        await bd.Usuario.destroy({where: { id: usuarioData.id }});
        return {code:200, message: 'usuario eliminado'};
    }
      
}


module.exports = services;