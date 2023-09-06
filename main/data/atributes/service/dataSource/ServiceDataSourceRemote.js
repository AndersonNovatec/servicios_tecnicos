const serviceRemote = require('../source/ServiceRemote');
const { URL_BASE } = require('../../../config/remote/APIs');

/**
 * @module UserDataSourceRemote - ../../dataSource/UserDataSourceRemote
*/

/**
 * @description Este archivo sirve para indicar las operaciones que se puede realizar con la fuente de datos remota.
 */

module.exports = class ServiceDataSourceRemote {
  static instance;
  /** @constructor */
  constructor () {
    if (ServiceDataSourceRemote.instance) {
      return ServiceDataSourceRemote.instance
    } else {
      ServiceDataSourceRemote.instance = this
    }
  }  
  /**
   * @function getService
   * @param {object} data - Objeto con los parametros para consulta en el servicio
   * @description Esta función retorna el metodo getService de la clase serviceRemote el cual trael los datos del servicio consultado 
   * @returns {Function} 
  */
  getService(data){
    return serviceRemote.getService(URL_BASE.PRODUCTION, data)
  }
} 