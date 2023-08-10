module.exports.setDataStorage = setDataStorage;
module.exports.createUser = createUser;
module.exports.clearStorage = clearStorage;
module.exports.getInfoStorage = getInfoStorage;

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

function clearStorage(){
  try{
    my.clearStorageSync()
  }catch(error) {
    return false
  }
}

function getInfoStorage(key) {
  try {
    const {data} = my.getStorageSync({ key })
    return data
  } catch (error) {
    return false;
  }
 }