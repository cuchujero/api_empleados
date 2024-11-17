const {body} = require('express-validator');

const ciudadFieldsValidator = [
  body('nombre', 'Campo nombre no puede ser vacio').not().isEmpty(),
  body('nombre', 'Campo nombre tiene una longitud incorrecta').isLength({min: 3},{max: 26}),
  body('provinciaFK', 'Campo provinciaFK no puede ser vacio').not().isEmpty(),
  body('provinciaFK', 'Campo provinciaFK tiene un tipo de dato invalido').isInt()
]

const colegioFieldsValidator = [
  body('nombre', 'Campo nombre no puede ser vacio').not().isEmpty(),
  body('nombre', 'Campo nombre tiene una longitud incorrecta').isLength({min: 3},{max: 26}),
  body('profesionFK', 'Campo profesionFK no puede ser vacio').not().isEmpty(),
  body('profesionFK', 'Campo profesionFK tiene un tipo de dato invalido').isInt(),
  body('ciudadFK', 'Campo ciudadFK no puede ser vacio').not().isEmpty(),
  body('ciudadFK', 'Campo ciudadFK tiene un tipo de dato invalido').isInt()
]

const cuentasBancariaFieldsValidator = [
  body('tipo_cuenta', 'Campo tipo_cuenta no puede ser vacio').not().isEmpty(),
  body('tipo_cuenta', 'Campo tipo_cuenta tiene una longitud incorrecta').isLength({min: 3},{max: 26}),
  body('identificador', 'Campo identificador no puede ser vacio').not().isEmpty(),
  body('referencia', 'Campo referencia no puede ser vacio').not().isEmpty(),
  body('principal', 'Campo principal no puede ser vacio').not().isEmpty()
]

const nomenclaturaFieldsValidator = [
  body('nombre', 'Campo nombre no puede ser vacio').not().isEmpty(),
  body('nombre', 'Campo nombre tiene una longitud incorrecta').isLength({min: 3},{max: 26}),
  body('cantidad_unidades_establecidas', 'Campo cantidad_unidades_establecidas no puede ser vacio').not().isEmpty(),
  body('cantidad_unidades_establecidas', 'Campo cantidad_unidades_establecidas tiene una longitud incorrecta').isLength({min: 1},{max: 8}),
  body('unidad_establecidaFK', 'Campo unidad_establecidaFK no puede ser vacio').not().isEmpty(),
  body('unidad_establecidaFK', 'Campo unidad_establecidaFK tiene un tipo de dato invalido').isInt(),
  body('colegioFK', 'Campo colegioFK no puede ser vacio').not().isEmpty(),
  body('colegioFK', 'Campo colegioFK tiene un tipo de dato invalido').isInt()
]

const operacionFieldsValidator = [
  body('cantidad_unidades', 'Campo cantidad_unidades no puede ser vacio').not().isEmpty(),
  body('cantidad_unidades', 'Campo cantidad_unidades tiene un tipo de dato invalido').isInt(),
  body('nomenclaturaFK', 'Campo nomenclaturaFK no puede ser vacio').not().isEmpty(),
  body('nomenclaturaFK', 'Campo nomenclaturaFK tiene un tipo de dato invalido').isInt(),
  body('registro_operacionFK', 'Campo registro_operacionFK no puede ser vacio').not().isEmpty(),
  body('registro_operacionFK', 'Campo registro_operacionFK tiene un tipo de dato invalido').isInt()
]

const paisFieldsValidator = [
  body('nombre', 'Campo nombre no puede ser vacio').not().isEmpty(),
  body('nombre', 'Campo nombre tiene una longitud incorrecta').isLength({min: 3},{max: 26})
]

const profesionFieldsValidator = [
  body('nombre', 'Campo nombre no puede ser vacio').not().isEmpty(),
  body('nombre', 'Campo nombre tiene una longitud incorrecta').isLength({min: 3},{max: 26})
]

const provinciaFieldsValidator = [
  body('nombre', 'Campo nombre no puede ser vacio').not().isEmpty(),
  body('nombre', 'Campo nombre tiene una longitud incorrecta').isLength({min: 3},{max: 26}),
  body('paisFK', 'Campo paisFK no puede ser vacio').not().isEmpty(),
  body('paisFK', 'Campo paisFK tiene un tipo de dato invalido').isInt(),
]

const puntuacionFieldsValidator = [
  body('puntaje', 'Campo puntaje no puede ser vacio').not().isEmpty(),
  body('puntaje', 'Campo puntaje tiene un tipo de dato invalido').isInt(),
  body('comentario', 'Campo comentario no puede ser vacio').not().isEmpty(),
  body('comentario', 'Campo comentario tiene una longitud incorrecta').isLength({min: 3},{max: 26}),
  body('profesionalFK', 'Campo profesionalFK no puede ser vacio').not().isEmpty(),
  body('profesionalFK', 'Campo profesionalFK tiene un tipo de dato invalido').isInt(),
]

const registroOperacionFieldsValidator = [
  body('nombre_cliente', 'Campo nombre_cliente no puede ser vacio').not().isEmpty(),
  body('nombre_cliente', 'Campo nombre_cliente tiene una longitud incorrecta').isLength({min: 3},{max: 26}),
  body('apellido_cliente', 'Campo apellido_cliente no puede ser vacio').not().isEmpty(),
  body('apellido_cliente', 'Campo apellido_cliente tiene una longitud incorrecta').isLength({min: 3},{max: 26}),
  body('dni_cliente', 'Campo dni_cliente no puede ser vacio').not().isEmpty(),
  body('codigo_pago', 'Campo codigo_pago no puede ser vacio').not().isEmpty()
]

const unidadEstablecidaFieldsValidator = [
  body('nombre', 'Campo nombre no puede ser vacio').not().isEmpty(),
  body('nombre', 'Campo nombre tiene una longitud incorrecta').isLength({min: 3},{max: 26}),
  body('valor_monetario', 'Campo valor_monetario no puede ser vacio').not().isEmpty()
]

const usuarioFieldsValidator = [
  body('nombre', 'Campo nombre no puede ser vacio').not().isEmpty(),
  body('nombre', 'Campo nombre tiene una longitud incorrecta').isLength({min: 3},{max: 26}),
  body('apellido', 'Campo apellido no puede ser vacio').not().isEmpty(),
  body('apellido', 'Campo apellido tiene una longitud incorrecta').isLength({min: 3},{max: 26}),
  body('telefono', 'Campo telefono no puede ser vacio').not().isEmpty(),
  body('clave', 'Campo clave no puede ser vacio').not().isEmpty(),
  body('clave', 'Campo clave tiene una longitud incorrecta').isLength({min: 5},{max: 26}),
  body('ciudadFK', 'Campo profesionFK no puede ser vacio').not().isEmpty(),
  body('ciudadFK', 'Campo profesionFK tiene un tipo de dato invalido').isInt(),
  body('profesionFK', 'Campo profesionFK no puede ser vacio').not().isEmpty(),
  body('profesionFK', 'Campo profesionFK tiene un tipo de dato invalido').isInt(),
]

const IdValidator = [
  body('id', 'Campo id no puede ser vacio').not().isEmpty(),
  body('id', 'Campo id tiene un tipo de dato invalido').isInt()
]

module.exports = {
  ciudadFieldsValidator,
  colegioFieldsValidator,
  IdValidator,
  cuentasBancariaFieldsValidator,
  nomenclaturaFieldsValidator,
  operacionFieldsValidator,
  paisFieldsValidator,
  profesionFieldsValidator,
  provinciaFieldsValidator,
  puntuacionFieldsValidator,
  registroOperacionFieldsValidator,
  unidadEstablecidaFieldsValidator,
  usuarioFieldsValidator
}