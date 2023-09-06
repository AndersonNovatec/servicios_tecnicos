/**
 * @param loginUser
 * @description - Variable que exporta la función para que se permita el uso externo 
 */
module.exports.loginUser = loginUser;
/**
 * @param getInformationLine
 * @description - Variable que exporta la función para que se permita el uso externo 
 */

module.exports.getInformationLine = getInformationLine;

/**
  * @param headers
  * @description - Variable que contiene los parametros de headers que se envian en la petición a los servicios 
  * @type {object} headers 
  * @property {string} X_SESSION_ID - Parametro que al token del usuario que realiza la consulta
  * @property {string} X_MC_LINE - Parametro que corresponde a la línea que se esta consultando
  * @property {string} X_MC_LOB - Parametro que exige el servicio con datos de identificación de la línea 
  * @property {string} X_MC_MAIL - Parametro que corresponde al correo electronico del usuario que realiza la consulta 
  * @property {string} X_MC_SO - Parametro que exige el servicio con datos del sistema operativo del dispositivo
  * @property {string} X_MC_DEVICE_ID - Parametro que exige el servicio con datos de identificación del dispositivo
*/ 

const headers = {
  'X-SESSION-ID':'U2FsdGVkX1/GV7tHxfWg/F3Kmrr9o4ARnM1D6IrygPHYqm0xPsVmxsBr2oA/3o+VD7piOdMGkYCQSuvW7V0dkjNThy4Dg/8BzbG3KHPhrjT1Ir9MG7ZKZqSI7pgym8ty5J2Fa8Y4G33PAJaG/VuhIPQZ+2PNLHttMFgQ1UrF06i9UaRFGi7c+mQDvm8W2rwnbGJbATqKexeyzoyML7ChMuJRy5RLNDHJUJ+iLsaqZvDuNj/j+ArVODd29OdkZZbzz4ko2iCwsBQa8kbA2PDFvZJUs/w+us9iF7Q7PduXRlFD37VXyI986jm5hPB8m04GTYVvCaxCyuBzYgr7LaQSzHZIgJbyn/n1CXDgAVyNlHdqdgNgkZCYS22eFCv6lG2AyppOAJ7ff1Pc4p49vu4I9ZVeqquxqq9/lTJQGJE0NXOyftWgLXLvxPTRzRoU5Jge8BH+P/8DyyScR8RXOSlx6d9p6UkoCGnuI9NfxqdMz6GGLVhUjd3EZYTvWCRr43SxGjxqgUn8s9GyDsj3Oc1niFyZzLIEyj1TKkePlEx0wt8=',
  'X-MC-LINE':'0',
  'X-MC-LOB':'0',
  'X-MC-MAIL':'' ,
  'X-MC-SO':'android',
  'X-MC-DEVICE-ID':'apaBtkizNFNBZELjASE/HxysF2nkRUJ3EefWy9UX6y9Wz/iV/sRlb3y+yK8l1FTeogBA9lcLwkVLXFOtrzjTRwp8SGQ9BWh5+G2IeRbaEOMM04ocECda0jGTWwWVjeYC8LwH23SiRUbD73nbyAnMNfunzxeYvhCs/x2s9D+1y8I='
}

/**
 * @function loginUser
 * @param {string} api - Url base del servicio que se utiliza
 * @param {string} email - Email del usuario que se consulta
 * @param {string} password - Password del usuario que se esta consultando
 * @description Esta función retorna los datos de respuesta del servicio LoginUsuarioApp a partir de los datos que se para validar y obtener información del 
 * usuario que realiza el ingreso al sistema
 * @returns {Object} 
*/

function loginUser(api, email, password) {

  return new Promise((resolve , reject) => {
    my.request({
      url: api + 'v1/soap/LoginUsuarioApp.json',
      method: 'POST',
      data: {
        data: {
          clave: password,
          nombreUsuario: email
        }
      },
      dataType: 'json',
      headers: headers,
      success: (result) => {
        // respondera la información del servicio         
        resolve(result.data)
      },
      fail: (error) => {
        // respondera la información del servicio  con su error
        reject(error)
      }
    });
  })
}

/**
 * @async
 * @function getInformationLine
 * @param {Array} data - Datos de la cuenta del usuario 
 * @param {string} api - Url base del servicio que se utiliza
 * @description Esta función entrega la información que retorna el servicio consultaInformacion enviando los parametros que requiere la consulta
 * @returns {Object} - Retorna un objeto con los datos de la respuesta del servicio
*/

function getInformationLine(api, data) {

  return new Promise((resolve , reject) => {
    
    my.request({
      url: api + 'v1/soap/consultaInformacion.json',
      method: 'POST',
      data: {
        data: {
          AccountId:data.AccountId,
          accountIdHEader:'',
          alias:data.alias,
          custcode:'',
          esEmpresas:0,
          isZonaPublica:false,
          LineOfBusiness:data.LineOfBusiness,
          selected:false,
          token:data.token,
          tokenLine:'',
          valida:0
        }
      },
      dataType: 'json',
      headers: {
        'X-SESSION-ID':data.token,
        'X-MC-LINE': data.AccountId,
        'X-MC-LOB':'0',
        'X-MC-MAIL': data.email,
        // 'X-MC-SO':'android',
        'X-MC-DEVICE-ID':'apaBtkizNFNBZELjASE/HxysF2nkRUJ3EefWy9UX6y9Wz/iV/sRlb3y+yK8l1FTeogBA9lcLwkVLXFOtrzjTRwp8SGQ9BWh5+G2IeRbaEOMM04ocECda0jGTWwWVjeYC8LwH23SiRUbD73nbyAnMNfunzxeYvhCs/x2s9D+1y8I='
      },
      success: (result) => {
        // respondera la información del servicio 
        resolve(result.data)
      },
      fail: (error) => {
        // respondera la información del servicio  con su error
        reject(error)
      }
    });
  } )
  
}
// Fin de Funciones que se utilizan en el home principal

