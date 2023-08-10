const serviceLocal = require('../source/ServiceLocal');
const key = require('../../../config/local/Keys');

module.exports = class ServiceDataSourceLocal {
  static instance;
  constructor () {
    if (ServiceDataSourceLocal.instance) {
      return ServiceDataSourceLocal.instance
    } else {
      ServiceDataSourceLocal.instance = this
    }
  }
  getDataStorage(keyStorage) {
    return serviceLocal.getDataStorage(key.TYPE[keyStorage])
  }
  setDataStorage(KeyStorage, data){
    return serviceLocal.setDataStorage(key.TYPE[KeyStorage], data);
  }
} 