const userLocal = require('../source/UserLocal');
const key = require('../../../config/local/Keys');

module.exports = class UserDataSourceLocal {
  static instance;
  constructor () {
    if (UserDataSourceLocal.instance) {
      return UserDataSourceLocal.instance
    } else {
      UserDataSourceLocal.instance = this
    }
  }
  setDataStorage(KeyStorage, data){
    return userLocal.setDataStorage(key.TYPE[KeyStorage], data);
  }
  createUser(user){
    return userLocal.createUser(key.TYPE.USER,user);
  }
  getInfoStorage(key){
    return userLocal.getInfoStorage(key);
  }
} 