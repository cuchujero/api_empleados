function usuarioData(sequelize, DataTypes) {
  
    const table = 'Usuario';
  
    const cols = {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      nombre: { type: DataTypes.STRING, allowNull: false },
      apellido: { type: DataTypes.STRING, allowNull: false },
      telefono: { type: DataTypes.STRING, allowNull: false },
      RUT: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      clave: { type: DataTypes.STRING, allowNull: false },
      fechaNacimiento: { type: DataTypes.DATE, allowNull: false },
      num_asignacion: {type: DataTypes.INTEGER, allowNull: true},
      Rol: { type: DataTypes.ENUM('administrador', 'consultor', 'empleado') },
    };
  
    const config = { camelCase: false, timestamps: false, tableName: 'Usuario' };
  
    const usuario = sequelize.define(table, cols, config);
    
    return usuario;
  }
  
  module.exports = usuarioData;