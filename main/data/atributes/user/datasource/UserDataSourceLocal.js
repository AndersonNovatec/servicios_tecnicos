const userLocal = require('../source/UserLocal');
const key = require('../../../config/local/Keys');

/**
 * @module UserDataSourceLocal - ../../dataSource/UserDataSourceLocal
*/

/**
 * @description Este archivo sirve para indicar las operaciones que se puede realizar con la fuente de datos local.
 */

module.exports = class UserDataSourceLocal {
  static instance;
  /** @constructor */
  constructor () {
    if (UserDataSourceLocal.instance) {
      return UserDataSourceLocal.instance
    } else {
      UserDataSourceLocal.instance = this
    }
  }
  /**
   * @function setDataStorage
   * @param {string} key - Nombre de la posición del objeto que se esta almacenando
   * @param {Array} data - Datos que se almacenarán en el storage
   * @description Esta función retorna el metodo setDataStorage de la clase userLocal el cuál almacena en el storage dentro de la key indicada la data enviada 
   * @returns {Function} 
  */

  setDataStorage(KeyStorage, data){
    return userLocal.setDataStorage(key.TYPE[KeyStorage], data);
  }
  /**
   * @function getInfoStorage
   * @param {string} key - Nombre de la posición del objeto que se esta buscando
   * @description Esta función retorna el metodo getInfoStorage de la clase userLocal la cuál obtiene información del estorage a partir de la key que se envia como consulta 
   * @returns {Function} 
  */ 

  createUser(user){
    return userLocal.createUser(key.TYPE.USER,user);
  }
  /**
   * @function getInfoStorage
   * @param {string} key - Nombre de la posición del objeto que se esta buscando
   * @description Esta función retorna el metodo getInfoStorage de la clase userLocal la cuál obtiene información del estorage a partir de la key que se envia como consulta 
   * @returns {Function} 
  */ 
  getInfoStorage(key){
    return userLocal.getInfoStorage(key);
  }
} 