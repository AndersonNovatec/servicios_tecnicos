module.exports = class Service {
  static instance;
  constructor (param = null, type = null, history = false) {
    this.history = history;
    this.param = param;
    this.type = type;

    if (Service.instance) {

      Service.instance.history = history;
      Service.instance.param = param;
      Service.instance.type = type;

      return Service.instance
    } else {
      Service.instance = this
    }
  }  
}