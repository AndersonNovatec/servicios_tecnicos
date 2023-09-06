const ServiceRepository = require('../data/atributes/service/repository/ServiceRepository');
const Service = require('../data/atributes/service/entities/Service');

/**
 * @module ServiceModel - /domain/serviceViewModel
 * @description Este archivo proporciona una capa de acceso entre la interfaz del usuario (UI) y la data con los servicios
 */

/**
 * @async
 * @function getService
 * @param {string} service - Número del servicio que se va a consultar 
 * @param {string} type - Tipo de servicio que se va a consultar 
 * @description Esta función obtiene la clase serviceRepository y la almacena en una variable, de allí, obtiene el metodo getService y envia un objeto formateado 
 * con los datos del servicio y el tipo como parametros verifica que la respuesta no tenga ningún error (error = 0), si es así, almacacena la respuesta en el storage
 * haciendo uso de la función setStorage con la key gammers y retorna un true 
 * @returns {boolean} true o false
*/

async function getService(service, type) {
  const serviceRepository = new ServiceRepository();
  let queryUserLogin = await serviceRepository.getService(newService(service, type));
  let response = false;
  setStorage("RESPONS_SERVICE", queryUserLogin.data.response);
  switch (true) {
    case queryUserLogin.data.error == 0:      
      response = true;
      break;
    case queryUserLogin.data.error == 1:
      response = true;
      break;
  }

  return response;
}

/**
 * @function setStorage
 * @param {string} key - Nombre de la posición del objeto
 * @param {array} data - Datos que se almacenaran en el storage
 * @description Esta función obtiene la clase UserRepository y la almacena en una variable, de allí, obtiene el metodo setDataStorage enviando la key y data recibidos 
 * para que sean registrados en el storage del sistema
 * @returns {boolean} true
*/

function setStorage(key, data) {  
  const serviceRepository = new ServiceRepository();
  serviceRepository.setDataStorage(key, data);  
  var response =  true;
  return response;
}

/**
 * @function getStorage
 * @param {string} key - Nombre de la posición del objeto
 * @description Esta función obtiene la clase UserRepository y la almacena en una variable, de allí, obtiene el metodo getDataStorage enviando la key que sera consultada
 * con esa key se recuperan los datos que estan almacenados en el storage y son enviados como respuesta
 * @returns {array} response, getLocalStorage 
*/


function getStorage(key) {  
  const serviceRepository = new ServiceRepository();
  let getLocalStorage = serviceRepository.getDataStorage(key);  
  
  var response = false;
  
  if(getLocalStorage)
  {
    response = true;
  }
  
  return [response, getLocalStorage];
}

/**
 * @function newService
 * @param {string} service - Número del Servicio
 * @param {string} type - Typo de servicio
 * @description Esta función formatea el servicio a un objeto con los parametros que requiere la petición. 
 * @returns {function} 
*/


function newService(service, type) {
  return new Service(service, type);
}


module.exports.getService = getService;
module.exports.setStorage = setStorage;
module.exports.getStorage = getStorage;
