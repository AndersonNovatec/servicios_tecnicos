module.exports.setDataStorage = setDataStorage;
module.exports.getDataStorage = getDataStorage;

function setDataStorage(key, data) {
  try {
    //my.removeStorage({key: key});
    my.setStorageSync({
      key: key,
      data: data
    });
    return true;
  } catch (error) {
    return false;
  }
}

function getDataStorage(key) {
  try {
    return my.getStorageSync({ key: key }).data;
  } catch (error) {
    return "";
  }
}
