const userViewModel = require('../../../domain/userViewModel');

/**
 * @module menú_cuentas - /ui/pages/manage
 */

/**
 * @function PageManage
 * @description Esta página muestra al usuario las cuentas registradas y permite seleccionar una de ellas, según el tipo de cuenta muestra algunas opciones o no
 */

Page({
   /**
   * Datos de la página.
   * @property {boolean} isLoading - Indica si se debe mostrar el spiner de carga
   * @property {string} userEmail - El correo electrónico del usuario.
   * @property {Array} accountsType2 - Arreglo de cuentas del usuario tipo 2.
   * @property {Array} accountsType3 - Arreglo de cuentas del usuario tipo 3.
   * @property {Array} accountsType1 - Arreglo de cuentas del usuario tipo 1.
   * @property {number} typeAccountTab - El tipo de pestaña de cuenta actual.
   */
  data: {
    isLoading: false,
    userEmail: '',
    accountsType2: [],
    accountsType3: [],
    accountsType1: [],
    typeAccountTab: 3
  },
  /**
   * @function setAccountSelect
   * @param {Event} target - El evento que desencadenó la selección de la cuenta.
   * @description Establece la cuenta seleccionada y realiza acciones correspondientes.
   */
  setAccountSelect({target}) {
    console.log(target);
    if (!this.isLoading) {
      this.setData({isLoading: true})
      // aqui se va a disparar un evento asincrono y despues se va a guardar en localstorage una información
      let data = target.dataset.item
      data.email = this.data.userEmail 
      userViewModel.getInformationLine(data)
      .then((response) => {
        // Hacer lógica cuando el servicio responda con error=0 o 1. 
        console.log(response, data)
        if(response.error === 0) {
          userViewModel.setLocalLine({...data, ...response.response[0]})
          my.navigateTo({
            url: '/main/ui/pages/search_visit/search_visit?client='
          })
        } 
        this.setData({
          isLoading: false
        })
      })
      .catch((error) => {
        this.setData({
          isLoading: false
        })
      })

    }
  },
  /**
   * @function selectTab
   * @param {Event} target - El evento que desencadenó el cambio de pestaña
   * @description Cambia la pestaña de tipo de cuenta actual.
  */
  selectTab({target}) {
    this.setData({
      typeAccountTab: target.dataset.tab
    })
  },
  /**
   * @function startClearStorage
   * @description Utilizando la función startClearStorage libera la cache del dispositivo y redirección al home 
  */
  startClearStorage() {
    userViewModel.startClearStorage()
    my.navigateTo({
      url: '/main/ui/pages/signUp/signUp'
    })
  },
  /**
   * @function onLoad
   * @description USe ejecuta cuando la página carga y trar del userViewModel el metodo getUserLogged  en donde se almacenan las cuentas 
   * Registradas para el usuario y almacena en la propiedad AccountType del data
  */
  onLoad() {
    let { accounts, email } = userViewModel.getUserLogged();

    // Filtrar segun la linea de Negocio 1 = Fijos 2 = Prepago 3 = Postpago
    accounts = accounts.filter(x => ['2', '3', '1'].includes(x.LineOfBusiness))

    if(accounts.length > 0){
      this.setData({
        userEmail: email,
        typeAccountTab: accounts[0].LineOfBusiness,
        accountsType2: accounts.filter(x => x.LineOfBusiness === '2'),
        accountsType3: accounts.filter(x => x.LineOfBusiness === '3'),
        accountsType1: accounts.filter(x => x.LineOfBusiness === '1')
      })
    }
  },
});
