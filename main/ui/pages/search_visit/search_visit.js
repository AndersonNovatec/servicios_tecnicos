const serviceViewModel = require('/main/domain/serviceViewModel');

var resultRadioData = [];

Page({
  data: { 
    cuenta: '123456',
    isLoading: false,
    option : '',
    overlay : false,
    param : '',
    radio : resultRadioData,
    response : false,
    showOrder : false,
    dateOrder : '',
    detailOrder : false,
    class_btn : 'btn-search-disabled',
    overlayClass:'',
    detailOrderData : {
      ods : '',
      ingreso : '', 
      puntoIngreso: '',
      marca : '',
      color : '',
      serial : '',
      revision : '',
      entrega : '',
      estado : '',
      prestamo : '',
    },
    obveservOrder : false,
    obveservOrderData : {data: ''},
    modalOpened: false,
    modalViewSlotHeader: false,
    modalViewBodyImgTop: false,
    modalImgTop: '',
    modalTextBody: '',
    modalViewBodyImgBottom: 'false',
    modalImgBottom: '',
    modal : {
      title : true,
      image: false,
      footer: false,
      show_title: false,
      response: false
    },
  },
  onLoad() {},
  openModal() {      
    this.setData({
      modalOpened: true,
    });
  },
  onModalClick() {
    this.setData({
      modalOpened: false,
    });
  },
  onModalClose() {
    this.setData({
      modalOpened: false,
    });
  },
  event(data){
    resultRadioData = [];
    this.setData({response: false});
    this.setData({option : data.data.currentTarget.id})

    if(this.data.param.length > 4){
      if(this.data.option !== '' && this.data.option !== 0 ){
        this.setData({class_btn: 'btn-search'});
      }
      else{
        this.setData({class_btn: 'btn-search-disabled'});
      }
    }
    else{
      this.setData({class_btn: 'btn-search-disabled'});
    }
  },
  setParam(e){
    this.setData({param: e.detail.value});

    if(e.detail.value.length > 4){
      if(this.data.option !== '' && this.data.option !== 0 ){
        this.setData({class_btn: 'btn-search'});
      }
      else{
        this.setData({class_btn: 'btn-search-disabled'});
      }
    }
    else{
      this.setData({class_btn: 'btn-search-disabled'});
    }
    
  },
  async consult(){
    
    resultRadioData = [];
    this.setData({response: false, showOrder: false, radio: resultRadioData});
    
    this.setData({
      cargando: true,
      modalViewSlotHeader: false,
      modalViewBodyImgTop: false,
      modalImgTop: "",
      modalTextBody: "",
      modalViewBodyImgBottom: false,
      modalImgBottom: '',
      modalViewSlotFooter: false,
      'modal.image': true,
    });

    if(this.data.option !== '' && this.data.option !== 0 )
    {

      if(this.data.param != '')
      {
        this.setData({isLoading: true});
        try {
          let service = await serviceViewModel.getService(this.data.param, this.data.option);
          
          if(service)
          {
            this.setData({isLoading: false});
            let responsService = serviceViewModel.getStorage("RESPONS_SERVICE");
            
            if(responsService[1] == "No se encontro información asociada.")
            {
              this.openModal();
              
              this.setData({
                cargando: false,
                modalViewSlotHeader: false,
                modalViewBodyImgTop: true,
                modalImgTop: '/main/ui/assets/ic_alert_gray.png',
                classmodalImgTop: 'ic_alert_2',
                modalTextBody: responsService[1],
                modalViewBodyImgBottom: false,
                modalImgBottom: '',
                modalViewSlotFooter: true,        
                'modal.image' : false,
                response: false
              });              
            }
            else
            {
              responsService[1].map((element, key)=>{
                resultRadioData[key] = { imagen: '/main/ui/assets/iconos/radio-uncheckBN.png', checked : 'false', value: "Orden de servicio: "+element.ODS, data : element};
              })

              this.setData({response: true});
              this.onModalClose();
            }
            
            this.setData({radio: resultRadioData});
          }
        } catch (error) {
          my.alert({content: "Error de acceso al servicio "+error, buttonText: 'Aceptar'});
          this.onModalClose();
        }
      }
      else
      {
        this.setData({
          cargando: false,
          modalViewSlotHeader: false,
          modalViewBodyImgTop: true,
          modalImgTop: '/main/ui/assets/ic_alert_gray.png',
          classmodalImgTop: 'ic_alert_2',
          modalTextBody: "Debe seleccionar el tipo de busqueda y un dato para consultar",
          modalViewBodyImgBottom: false,
          modalImgBottom: '',
          modalViewSlotFooter: true,        
          'modal.image' : false,
          response: false
        });

        this.openModal();
        this.setData({response: false});
      }      
    }
    else
    {
      this.setData({
        cargando: false,
        modalViewSlotHeader: false,
        modalViewBodyImgTop: true,
        modalImgTop: '/main/ui/assets/ic_alert_gray.png',
        classmodalImgTop: 'ic_alert_2',
        modalTextBody: "Debe seleccionar el tipo de busqueda y un dato para consultar",
        modalViewBodyImgBottom: false,
        modalImgBottom: '',
        modalViewSlotFooter: true,        
        'modal.image' : false
      });

      this.openModal();

      this.setData({response: false});
    }
  },
  radioSelected(data){
    
    const radioId = data.currentTarget.id;
    const updatedRadio = this.data.radio.map((item, index) => {

      if (index == radioId) {

        if(item.checked === 'false')
        {  
          return {
            ...item,
            checked: 'true',
            imagen : '/main/ui/assets/iconos/radio-checkV.png'
          };
        }
        else
        {
          return {
            ...item,
            checked: 'false',
            imagen : '/main/ui/assets/iconos/radio-uncheckBN.png'
          };  
        }
      }
      else
      {
        return {
          ...item,
          checked: 'false',
          imagen : '/main/ui/assets/iconos/radio-uncheckBN.png'
        };
      }
    });

    console.log("Actualizar check ", updatedRadio);
    this.setData({
      radio: updatedRadio
    });

  },
  showODS() {
    
    let radioCheck = '';
    this.data.radio.map((item, index) => {
      if(item.checked === 'true')
      {
        radioCheck = index;
      }
    });

    if(radioCheck !== '')
    {
      this.setData({response: false, showOrder: true});
      let dataChecked =  this.data.radio[radioCheck];
      let sizeline = parseInt(dataChecked.data.ESTADO_ACTUAL);
      let emptyline = 6 - (sizeline + 1);
      const countArray = new Array(sizeline).fill(0);
      const emptyViews = new Array(emptyline).fill(0);

      this.setData({
        dateOrder : dataChecked.data.FECHA_ENTREGA+" "+ dataChecked.data.ESTADO_ACTUAL_ODS,
        'detailOrderData.ods' : dataChecked.data.ODS,
        'detailOrderData.ingreso' : dataChecked.data.FECHA_INGRESO, 
        'detailOrderData.puntoIngreso': dataChecked.data.CAV,
        'detailOrderData.marca' : dataChecked.data.MARCA,
        'detailOrderData.color' : dataChecked.data.COLOR,
        'detailOrderData.serial' : dataChecked.data.IMEI,
        'detailOrderData.revision' : dataChecked.data.CONDICION_DE_INGRESO,
        'detailOrderData.entrega' : dataChecked.data.FECHA_ENTREGA,
        'detailOrderData.estado' : dataChecked.data.ESTADO_ACTUAL_ODS,
        'detailOrderData.prestamo' : dataChecked.data.EQUIPOPRESTAMO,
        'obveservOrderData.data' : dataChecked.data.OBSERVACIONES,
        countArray,
        emptyViews,
      });
    }
    else
    {
      this.setData({
        cargando: false,
        modalViewSlotHeader: false,
        modalViewBodyImgTop: true,
        modalImgTop: '/main/ui/assets/ic_alert_gray.png',
        classmodalImgTop: 'ic_alert_2',
        modalTextBody: "Debe seleccionar un servicio",
        modalViewBodyImgBottom: false,
        modalImgBottom: '',
        modalViewSlotFooter: true,        
        'modal.image' : false
      });

      this.openModal(); 
    }
  },
  showListDetailOrder(e){
    
    console.log("Tap actual ", e.currentTarget.id + ' Valor detail order '+ this.data.detailOrder);
    if(e.currentTarget.id == "detail")
    {
      this.setData({
        overlay : true,
        detailOrder: true,
        obveservOrder: false
      });
    }
    else
    {
      this.setData({
        overlay : true,
        obveservOrder: true,
        detailOrder: false
      });
    }

    if(this.data.modalSelectorDocTypeActive){
      this.setData({
        backgroudUnfocused:"",
        modalSelectorDocTypeOpenClass:"",
        overlay : false,
        modalSelectorDocTypeActive: false,
      })
    }else{
      this.setData({
        backgroudUnfocused:"backgroud-unfocused",
        modalSelectorDocTypeOpenClass:"open",
        modalSelectorDocTypeActive: true,
      })
    }
  },
});
