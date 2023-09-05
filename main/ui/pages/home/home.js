const userViewModel = require('../../../domain/userViewModel');

Page({
  data: {
    isLoading: false,
    userEmail: '',
    accountsType2: [],
    accountsType3: [],
    accountsType1: [],
    typeAccountTab: 3
  },
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
  selectTab({target}) {
    this.setData({
      typeAccountTab: target.dataset.tab
    })
  },
  startClearStorage() {
    userViewModel.startClearStorage()
    my.navigateTo({
      url: '/main/ui/pages/signUp/signUp'
    })
  },
  onLoad() {
    let { accounts, email } = userViewModel.getUserLogged();

    console.log("Cuentas ", accounts);
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
