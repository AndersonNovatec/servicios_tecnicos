/**
  * @module Service - ../../entities/Service
  * @description Esta clase contiene la estructura necesaria para crear una instancia de un único objeto de tipo "SERVICE" 
  * (implementa el patrón singleton).
*/

module.exports = class Service {
  static instance;
  /** @constructor */
  /**
    * @param {String} param - Corresponde al número del servicio 
    * @param {String} type - Corresponde al tipo de busqueda de servicio
    * @param {String} history - Este parametro se declara en false y trae historico
  */
  constructor (param = null, type = null, history = false) {
    this.history = history;
    this.param = param;
    this.type = type;

    if (Service.instance) {

      Service.instance.history = history;
      Service.instance.param = param;
      Service.instance.type = type;

      return Service.instance
    } else {
      Service.instance = this
    }
  }  
}