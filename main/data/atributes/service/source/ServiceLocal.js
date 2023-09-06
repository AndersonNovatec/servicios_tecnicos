/**
 * @param setDataStorage
 * @description - Variable que exporta la función para que se permita el uso externo 
 */
module.exports.setDataStorage = setDataStorage;
/**
 * @param getDataStorage
 * @description - Variable que exporta la función para que se permita el uso externo 
 */
module.exports.getDataStorage = getDataStorage;
/**
 * @function setDataStorage
 * @param {string} key - Nombre de la posición del objeto
 * @param {array} data - Datos que se almacenaran en el storage
 * @description Esta función almacena en el storage, utilizando la función my.setStorage propia de la herramienta miniprogam los datos recibidos en el arrat data  
 * y utilizando la variable key para registrar ese nombre como key del objeto
 * @returns {boolean} true / false
*/

function setDataStorage(key, data) {
  try {
    //my.removeStorage({key: key});
    my.setStorageSync({
      key: key,
      data: data
    });
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * @function getDataStorage
 * @param {string} key - Nombre de la posición del objeto
 * @description Esta función obtiene la información almacenada en el storage utilizando la función my.getStorageSync propia de la herramienta miniprogam, utiliza la variable key 
 * como ubicación en donde estan registrados los datos 
 * @returns {Object} - Objeto que contiene los datos 
*/
function getDataStorage(key) {
  try {
    return my.getStorageSync({ key: key }).data;
  } catch (error) {
    return "";
  }
}
