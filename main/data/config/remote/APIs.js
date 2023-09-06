/**
 * @module APIs - data/config/remote/APIs
*/

/**
 * @description Este clase construye un objeto con multiples posiciones, las cuales contienen como valor las url base para consumo 
 * de los diferentes servicios que interactuan en el programa 
 */

module.exports = class APIs {
  static get URL_BASE() {
    return URL_BASE;
  }
}

/**
 * @typedef {Object} URL_BASE - Objeto con URL's base
 * @property {string} DEVELOP - url para pruebas
 * @property {string} CLARO_LOGIN
 * @property {string} PRODUCTION - url de producción
 * @property {string} URL - url de producción
 */

const URL_BASE = {
  DEVELOP: 'https://apiselfservice.co/api/index.php/v1/soap',
  CLARO_LOGIN: 'https://apiselfservice.co/api/index.php/',
  PRODUCTION: 'https://apiselfservice.co/M3',
  URL : 'https://apiselfservice.co/M3/'
};