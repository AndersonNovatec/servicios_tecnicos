const UserRepository = require('../data/atributes/user/repository/UserRepository');


function signUp(email, password) {
  const userRepository = new UserRepository();
  const queryUserRemote = userRepository.loginUserRemote(email, password);
  console.log("queryUserRemote => " , queryUserRemote);
  return queryUserRemote;  
}

function getInformationLine(data) {
  const userRepository = new UserRepository();
  const infoLine = userRepository.getInformationLine(data);
  return infoLine;
  
}

function setLocalLine(data) {
  const userRepository = new UserRepository();
  const infoLine = userRepository.setDataStorage('LINE_SELECT', data);
  return infoLine;
}

function getUserLogged() {
  const userRepository = new UserRepository();
  const userData = userRepository.getInfoStorage('REGISTERED_USER');
  return userData;
}

function setDataLocalUser(user) {
  const userRepository = new UserRepository();
  const userLocalSet = userRepository.createUserLocal(user);
  return userLocalSet;
}

module.exports.setLocalLine = setLocalLine;
module.exports.signUp = signUp;
module.exports.setDataLocalUser = setDataLocalUser;
module.exports.getUserLogged = getUserLogged;
module.exports.getInformationLine = getInformationLine;


