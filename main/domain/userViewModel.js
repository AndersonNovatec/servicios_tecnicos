const UserRepository = require('../data/atributes/user/repository/UserRepository');
/**
 * @module ViewModel_user - /domain/userViewModel
 * @description Este archivo proporciona una capa de acceso entre la interfaz del usuario (UI) y la data con los servicios
 */

/**
 * @async
 * @function signUp
 * @param {string} email - Correo del usuario que ingresa al miniprogram
 * @param {string} password - Contraseña del usuario que ingresa al miniprogram
 * @description Esta función obtiene la clase UserRepository y la almacena en una variable, de allí, obtiene el metodo loginUserRemote enviando los parametros para validar si el usuario es valido,
 * @returns {Object} - Retorna un objeto con los datos de la respuesta del servicio
*/


function signUp(email, password) {
  const userRepository = new UserRepository();
  const queryUserRemote = userRepository.loginUserRemote(email, password);
  console.log("queryUserRemote => " , queryUserRemote);
  return queryUserRemote;  
}
/**
 * @function getInformationLine
 * @param {array} data - Arreglo con los datos del usuario AccountId, LineOfBusiness, token, email
 * @description Esta función retorna el metodo getInformationLine de la clase userRepository la cuál obtiene del servicio consultaInformacion la información de las lineas que posee el usuario 
 * @returns {Function} 
*/

function getInformationLine(data) {
  const userRepository = new UserRepository();
  const infoLine = userRepository.getInformationLine(data);
  return infoLine;
  
}

/**
 * @async
 * @function setLocalLine
 * @param {Array} data - Datos de la linea seleccionada 
 * @description Esta función obtiene la clase UserRepository y la almacena en una variable, de allí, obtiene el metodo setDataStorage enviando como key LINE_SELECT y la data de la linea registrada 
 * @returns {boolean} - Retorna una respuesta de la funcion setDataStorage con un true o un false
*/

function setLocalLine(data) {
  const userRepository = new UserRepository();
  const infoLine = userRepository.setDataStorage('LINE_SELECT', data);
  return infoLine;
}

/**
 * @async
 * @function getUserLogged
 * @description Esta función obtiene la clase UserRepository y la almacena en una variable, de allí, obtiene el metodo getInfoStorage enviando como key REGISTERED_USER, esta función permite obtener
 * los datos almacenados en el storage del usuario quién inicio sesión
 * @returns {boolean} - Retorna una respuesta de la funcion setDataStorage con un true o un false
*/

function getUserLogged() {
  const userRepository = new UserRepository();
  const userData = userRepository.getInfoStorage('REGISTERED_USER');
  return userData;
}

/**
 * @async
 * @function setDataLocalUser
 * @param {Array} data - Datos del usuario que inicio la sesión 
 * @description Esta función obtiene la clase UserRepository y la almacena en una variable, de allí, obtiene el metodo createUserLocal enviando como parametro los datos del usuario que inicio sesión 
 * este usuario queda disponible para ser utilizado por los metodos de consulta del servicio
 * @returns {Object} - Retorna un objeto de tipo usuario con los datos  first_name, last_name, email, documentNumber, DocumentType, accounts: [user.response.cuentas]
*/

function setDataLocalUser(user) {
  const userRepository = new UserRepository();
  const userLocalSet = userRepository.createUserLocal(user);
  return userLocalSet;
}

module.exports.setLocalLine = setLocalLine;
module.exports.signUp = signUp;
module.exports.setDataLocalUser = setDataLocalUser;
module.exports.getUserLogged = getUserLogged;
module.exports.getInformationLine = getInformationLine;


