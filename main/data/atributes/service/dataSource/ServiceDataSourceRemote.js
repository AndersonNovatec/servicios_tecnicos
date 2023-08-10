const serviceRemote = require('../source/ServiceRemote');
const { URL_BASE } = require('../../../config/remote/APIs');

module.exports = class ServiceDataSourceRemote {
  static instance;
  constructor () {
    if (ServiceDataSourceRemote.instance) {
      return ServiceDataSourceRemote.instance
    } else {
      ServiceDataSourceRemote.instance = this
    }
  }  
  getService(data){
    return serviceRemote.getService(URL_BASE.PRODUCTION, data)
  }
} 