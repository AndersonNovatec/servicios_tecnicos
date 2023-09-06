const UserDataSourceRemote = require('../datasource/UserDataSourceRemote');
const userDatasourceRemote = new UserDataSourceRemote();
const UserDataSourceLocal = require('../datasource/UserDataSourceLocal');
const userDatasourceLocal = new UserDataSourceLocal();

/**
 * @module UserRepository - ../../repository/UserRepository
*/

/**
 * @description Este archivo cumple la función de trabajar como puerta de entrada a la información del modelo de datos, en él se almacena los métodos asociados al acceso de forma local y remota..
 */


module.exports = class LoginRepository {
  static instance;
  /** @constructor */
  constructor () {
    if (LoginRepository.instance) {
      return LoginRepository.instance
    } else {
      LoginRepository.instance = this
    }
  }
  /**
   * @function loginUserRemote
   * @param {string} email - Email del usuario que se consulta
   * @param {string} password - Password del usuario que se esta consultando
   * @description Esta función retorna el metodo loginUser de la clase userDatasourceRemote la cuál consulta el servicio LoginUsuarioApp para validar y obtener información del 
   * usuario que realiza el ingreso al sistema
   * @returns {Function} 
  */
  loginUserRemote(email, password) {
    return userDatasourceRemote.loginUser(email, password);
  }
  /**
   * @function getInformationLine
   * @param {array} data - Arreglo con los datos del usuario AccountId, LineOfBusiness, token, email
   * @description Esta función retorna el metodo getInformationLine de la clase userDatasourceRemote la cuál obtiene del servicio consultaInformacion la información de las lineas que posee el usuario 
   * @returns {Function} 
  */
  getInformationLine(data) {
    return userDatasourceRemote.getInformationLine(data);
  }
  /**
   * @function setDataStorage
   * @param {string} key - Nombre de la posición del objeto que se esta almacenando
   * @param {Array} data - Datos que se almacenarán en el storage
   * @description Esta función retorna el metodo setDataStorage de la clase userDatasourceLocal el cuál almacena en el storage dentro de la key indicada la data enviada 
   * @returns {Function} 
  */
  setDataStorage(key, data) {
    return userDatasourceLocal.setDataStorage(key, data);
  }
  /**
   * @function createUserLocal
   * @param {Object} data - Objeto que contiene los parametros necesarios
   * @description Esta función obtiene el metodo createUser de la clase userDatasourceLocal la cuál construye una instancia de tipo user con los parametros first_name, last_name,
   * email, documentNumber, DocumentType, accounts: [user.response.cuentas]
   * @returns {Function} 
  */
  createUserLocal(user) {
    return userDatasourceLocal.createUser(user);
  }  
  /**
   * @function getInfoStorage
   * @param {string} key - Nombre de la posición del objeto que se esta buscando
   * @description Esta función retorna el metodo getInfoStorage de la clase userDatasourceLocal la cuál obtiene información del estorage a partir de la key que se envia como consulta 
   * @returns {Function} 
  */ 
  getInfoStorage(key){
    return userDatasourceLocal.getInfoStorage(key)
  }
} 