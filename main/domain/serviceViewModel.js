const ServiceRepository = require('../data/atributes/service/repository/ServiceRepository');
const Service = require('../data/atributes/service/entities/Service');

async function getService(service, type) {
  const serviceRepository = new ServiceRepository();
  let queryUserLogin = await serviceRepository.getService(newService(service, type));
  let response = false;
  setStorage("RESPONS_SERVICE", queryUserLogin.data.response);
  switch (true) {
    case queryUserLogin.data.error == 0:      
      response = true;
      break;
    case queryUserLogin.data.error == 1:
      response = true;
      break;
  }

  return response;
}

function setStorage(key, data) {  
  const serviceRepository = new ServiceRepository();
  serviceRepository.setDataStorage(key, data);  
  var response =  true;
  return response;
}

function getStorage(key) {  
  const serviceRepository = new ServiceRepository();
  let getLocalStorage = serviceRepository.getDataStorage(key);  
  
  var response = false;
  
  if(getLocalStorage)
  {
    response = true;
  }
  
  return [response, getLocalStorage];
}

function newService(service, type) {
  return new Service(service, type);
}


module.exports.getService = getService;
module.exports.setStorage = setStorage;
module.exports.getStorage = getStorage;
