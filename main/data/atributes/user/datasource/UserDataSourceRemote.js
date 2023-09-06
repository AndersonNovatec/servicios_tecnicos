const userRemote = require('../source/UserRemote');
const { URL_BASE } = require('../../../config/remote/APIs');

/**
 * @module UserDataSourceRemote - ../../dataSource/UserDataSourceRemote
*/

/**
 * @description Este archivo sirve para indicar las operaciones que se puede realizar con la fuente de datos remota.
 */

module.exports = class UserDataSourceRemote {
  static instance;
  /** @constructor */
  constructor () {
    if (UserDataSourceRemote.instance) {
      return UserDataSourceRemote.instance
    } else {
      UserDataSourceRemote.instance = this
    }
  } 
  /**
   * @function loginUser
   * @param {string} email - Email del usuario que se consulta
   * @param {string} password - Password del usuario que se esta consultando
   * @description Esta función retorna el metodo loginUser de la clase userDatasourceRemote la cuál consulta el servicio LoginUsuarioApp para validar y obtener información del 
   * usuario que realiza el ingreso al sistema
   * @returns {Function} 
  */ 
  loginUser(email, password){
    return userRemote.loginUser(URL_BASE.CLARO_LOGIN, email, password)
  }
  /**
   * @function getInformationLine
   * @param {array} data - Arreglo con los datos del usuario AccountId, LineOfBusiness, token, email
   * @description Esta función retorna el metodo getInformationLine de la clase userDatasourceRemote la cuál obtiene del servicio consultaInformacion la información de las lineas que posee el usuario 
   * @returns {Function} 
  */
  getInformationLine(data){
    return userRemote.getInformationLine(URL_BASE.CLARO_LOGIN, data)
  }
} 