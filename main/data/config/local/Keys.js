/**
 * @module Keys - data/config/local/Keys
*/

/**
 * @description Este clase construye un objeto con multiples posiciones, las cuales contienen como valor una serie de string
 * los cuales son utilizados como llave en el registro del storage del programa
*/

module.exports = class Keys {
  static get TYPE() {
    return TYPE;
  }
}

/** 
  * @typedef {Object} TYPE - Objeto con nombre de las keys
  * @property {String} USER - Esta posición sirve como llave en donde se almacenara la respuesta con la información que se obtiene del usuario a partir 
  * del consumo del servicio LoginUsuarioApp 
  * @property {string} LINE_SELECT - Esta posición sirve como llave en donde se almacenara la respuesta con la información que se obtiene de las cuentas 
  * activas del usuario a partir del consumo del servicio consultaInformacion   
  * @property {string} SERVICE - Esta posición sirve como llave en donde se almacenara la respuesta que el servicio ConsultaServicioTecnico 
*/

const TYPE = {
  USER: "REGISTERED_USER",
  LINE_SELECT : "LINE_SELECT",
  SERVICE : "RESPONS_SERVICE"
};