/**
 * @function validEmail
 * @param {string} email
 * @description Esta función recibe un string como parametro el cual verifica que cumpla la condición regex para un correo electronico 
 * @returns {Boolean} true o false
*/

function validEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

module.exports.validEmail = validEmail