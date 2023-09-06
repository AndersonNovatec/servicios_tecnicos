/**
 * @param setDataStorage
 * @description - Variable que exporta la función para que se permita el uso externo 
 */
module.exports.setDataStorage = setDataStorage;
/**
 * @param createUser
 * @description - Variable que exporta la función para que se permita el uso externo 
 */
module.exports.createUser = createUser;
/**
 * @param clearStorage
 * @description - Variable que exporta la función para que se permita el uso externo 
 */
module.exports.clearStorage = clearStorage;
/**
 * @param getInfoStorage
 * @description - Variable que exporta la función para que se permita el uso externo 
*/
module.exports.getInfoStorage = getInfoStorage;

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
 * @function createUser
 * @param {string} key - Nombre de la posición del objeto
 * @param {array} data - Datos del usuario
 * @description Esta función almacena en el storage, utilizando la función my.setStorage propia de la herramienta miniprogam los datos recibidos en el array data  
 * y utilizando la variable key para registrar ese nombre como key del objeto
 * @returns {boolean} true / false
*/

function createUser(key,user) {
  try {
    my.setStorageSync({
      key: key,
      data: {
        first_name: user.response.usuario.nombre,
        last_name: user.response.usuario.apellido,
        email: user.response.usuario.UserProfileID,
        documentNumber: user.response.usuario.DocumentNumber,
        DocumentType: user.response.usuario.DocumentType,
        accounts: [
          ...user.response.cuentas
        ]
      }
    });
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * @function clearStorage
 * @description Esta función limpia la información almacenada en el storage utilizando la función my.clearStorageSync propia de la herramienta miniprogam
 * @returns {boolean} - si se presenta error retorna un false
*/

function clearStorage(){
  try{
    my.clearStorageSync()
  }catch(error) {
    return false
  }
}

/**
 * @function getInfoStorage
 * @param {string} key - Nombre de la posición del objeto
 * @description Esta función obtiene la información almacenada en el storage utilizando la función my.getStorageSync propia de la herramienta miniprogam, utiliza la variable key 
 * como ubicación en donde estan registrados los datos 
 * @returns {Object} - Objeto que contiene los datos 
*/

function getInfoStorage(key) {
  try {
    const {data} = my.getStorageSync({ key })
    return data
  } catch (error) {
    return false;
  }
 }