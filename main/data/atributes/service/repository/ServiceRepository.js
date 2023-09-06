const ServiceDataSourceLocal = require('../dataSource/ServiceDataSourceLocal');
const ServiceDataSourceRemote = require('../dataSource/ServiceDataSourceRemote');
const serviceDatasourceLocal = new ServiceDataSourceLocal();
const serviceDatasourceRemote = new ServiceDataSourceRemote();

/**
 * @module ServiceRepository - ../../repository/ServiceRepository
*/

/**
 * @description Este archivo cumple la función de trabajar como puerta de entrada a la información del modelo de datos, en él se almacena los métodos asociados al acceso de forma local y remota..
 */

module.exports = class ServiceRepository {
  static instance;
  constructor () {
    if (ServiceRepository.instance) {
      return ServiceRepository.instance
    } else {
      ServiceRepository.instance = this
    }
  }
  /**
   * @function getDataStorage
   * @param {string} key - Nombre de la posición del objeto que se esta buscando
   * @description Esta función retorna el metodo getDataStorage de la clase userDatasourceLocal el cual trael los datos del storage 
   * @returns {Function} 
  */
  getDataStorage(key) {
    return serviceDatasourceLocal.getDataStorage(key);
  }
  /**
   * @function setDataStorage
   * @param {string} key - Nombre de la posición del objeto que se esta almacenando
   * @param {Array} data - Datos que se almacenarán en el storage
   * @description Esta función retorna el metodo setDataStorage de la clase userDatasourceLocal el cuál almacena en el storage dentro de la key indicada la data enviada 
   * @returns {Function} 
  */
  setDataStorage(key, data) {
    return serviceDatasourceLocal.setDataStorage(key, data);
  }
  /**
   * @function getService
   * @param {object} data - Objeto con los parametros para consulta en el servicio
   * @description Esta función retorna el metodo getService de la clase serviceDatasourceRemote el cual trael los datos del servicio consultado 
   * @returns {Function} 
  */
  getService(data){
    return serviceDatasourceRemote.getService(data);
  }
}