const ServiceDataSourceLocal = require('../dataSource/ServiceDataSourceLocal');
const ServiceDataSourceRemote = require('../dataSource/ServiceDataSourceRemote');
const serviceDatasourceLocal = new ServiceDataSourceLocal();
const serviceDatasourceRemote = new ServiceDataSourceRemote();

module.exports = class ServiceRepository {
  static instance;
  constructor () {
    if (ServiceRepository.instance) {
      return ServiceRepository.instance
    } else {
      ServiceRepository.instance = this
    }
  }
  getDataStorage(key) {
    return serviceDatasourceLocal.getDataStorage(key);
  }
  setDataStorage(key, data) {
    return serviceDatasourceLocal.setDataStorage(key, data);
  }
  getService(data){
    return serviceDatasourceRemote.getService(data);
  }
}