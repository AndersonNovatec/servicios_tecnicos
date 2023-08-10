const UserDataSourceRemote = require('../datasource/UserDataSourceRemote');
const userDatasourceRemote = new UserDataSourceRemote();
const UserDataSourceLocal = require('../datasource/UserDataSourceLocal');
const userDatasourceLocal = new UserDataSourceLocal();

module.exports = class LoginRepository {
  static instance;
  constructor () {
    if (LoginRepository.instance) {
      return LoginRepository.instance
    } else {
      LoginRepository.instance = this
    }
  }
  loginUserRemote(email, password) {
    return userDatasourceRemote.loginUser(email, password);
  }
  getInformationLine(data) {
    return userDatasourceRemote.getInformationLine(data);
  }
  setDataStorage(key, data) {
    return userDatasourceLocal.setDataStorage(key, data);
  }
  createUserLocal(user) {
    return userDatasourceLocal.createUser(user);
  }  
  getInfoStorage(key){
    return userDatasourceLocal.getInfoStorage(key)
  }
} 