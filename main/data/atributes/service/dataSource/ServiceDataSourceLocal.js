const serviceLocal = require('../source/ServiceLocal');
const key = require('../../../config/local/Keys');

/**
 * @module ServiceDataSourceLocal - ../../dataSource/ServiceDataSourceLocal
*/

/**
 * @description Este archivo sirve para indicar las operaciones que se puede realizar con la fuente de datos local.
 */

module.exports = class ServiceDataSourceLocal {
  static instance;
  /** @constructor */
  constructor () {
    if (ServiceDataSourceLocal.instance) {
      return ServiceDataSourceLocal.instance
    } else {
      ServiceDataSourceLocal.instance = this
    }
  }
  /**
   * @function getDataStorage
   * @param {string} keyStorage - Nombre de la posición del objeto que se esta buscando
   * @description Esta función retorna el metodo getDataStorage de la clase userLocal el cual trael los datos del storage 
   * @returns {Function} 
  */
  getDataStorage(keyStorage) {
    return serviceLocal.getDataStorage(key.TYPE[keyStorage])
  }
  /**
   * @function setDataStorage
   * @param {string} KeyStorage - Nombre de la posición del objeto que se esta almacenando
   * @param {Array} data - Datos que se almacenarán en el storage
   * @description Esta función retorna el metodo setDataStorage de la clase userLocal el cuál almacena en el storage dentro de la key indicada la data enviada 
   * @returns {Function} 
  */
  setDataStorage(KeyStorage, data){
    return serviceLocal.setDataStorage(key.TYPE[KeyStorage], data);
  }
} 