const userRemote = require('../source/UserRemote');
const { URL_BASE } = require('../../../config/remote/APIs');

module.exports = class UserDataSourceRemote {
  static instance;
  constructor () {
    if (UserDataSourceRemote.instance) {
      return UserDataSourceRemote.instance
    } else {
      UserDataSourceRemote.instance = this
    }
  }  
  loginUser(email, password){
    return userRemote.loginUser(URL_BASE.CLARO_LOGIN, email, password)
  }
  getInformationLine(data){
    return userRemote.getInformationLine(URL_BASE.CLARO_LOGIN, data)
  }
} 