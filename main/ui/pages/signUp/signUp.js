const userViewModel = require('../../../domain/userViewModel');
const validEmailUtil = require('../../../domain/utils/validateEmail');

Page({
  data: {
    email: '',
    password: '',
    isOpenModal: false,
    titleMessage: '',
    contentMessage: '',
    isLoading: false
  },
  
  onEmailInput(e) {
    this.setData({
      email: e.detail.value
    })
  },
  onPasswordInput(e){
    this.setData({
      password: e.detail.value
    })
  },
  
  // Funcion para el login
  signUp(){
    // Validación de campos de formulario del Login: 
    // Valid Email util la cual mediante regex valida si el campo email cumple en cuanto a estructura

    if(this.data.isLoading)  return;

    if ( !validEmailUtil.validEmail(this.data.email) || this.data.password === ""){
      my.alert({
        title: 'Campos obligatorios',
        content: 'Los campos de usuario y contraseña son obligatorios',
        buttonText: 'OK'
      })
      return;
    } else {
      this.setData({
        isLoading: true
      })
      userViewModel.signUp(this.data.email, this.data.password)
        .then((response) => {
          // Hacer lógica cuando el servicio responda con error=0 o 1. 
          console.log(response)
          const {error} = response
          const {usuario, cuentas} = response.response;
          if ( error === 0 ) {
            userViewModel.setDataLocalUser(response)
            my.navigateTo({
              url: '/main/ui/pages/icono_home/icono_home'
              
            })
          } else {
            my.alert({
              title: 'Ups, algo pasó.',
              content: 'El Usuario ingresado no se encuentra registrado',
              buttonText: 'Ok'
            })
          }   
        })
        .catch((error) => {
          
          this.setData({
            isLoading: false
          })
          my.alert({
            title: 'No disponible',
            content: 'El servicio no se encuentra disponible, intentelo más tarde'
          })
        })
        .finally(() => {
          this.setData({
            isLoading: false
          })
        })
    }
  },
  
  onLoad() {
  },

});
