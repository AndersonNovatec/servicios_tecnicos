const serviceViewModel = require('/main/domain/serviceViewModel');


/**
 * @module BuscarVisita main/ui/pages/search_visit
*/


/**
 * Arreglo para almacenar los resultados de la selección de radio.
 * @type {Array}
 */

var resultRadioData = [];

Page({
  /** Datos de la página.
   * @property {string} cuenta - Trae la información de la cuenta que selecciono el usuario.
   * @property {boolean} isLoading - Indica si se debe mostrar el spinner de cargando.
   * @property {string} option - Opción seleccionada.
   * @property {boolean} overlay - Indica si se muestra la superposición del detalle.
   * @property {string} param - Parámetro ingresado.
   * @property {Array} radio - Arreglo de datos de radio.
   * @property {boolean} response - Indica si hay una respuesta.
   * @property {boolean} showOrder - Indica si se muestra la orden.
   * @property {string} dateOrder - Fecha de la orden.
   * @property {boolean} detailOrder - Indica si se muestra el detalle de la orden.
   * @property {string} class_btn - Clase CSS para el botón de búsqueda.
   * @property {string} overlayClass - Clase CSS para la superposición.
   * @property {Object} detailOrderData - Datos del detalle de la orden.
   * @property {boolean} obveservOrder - Indica si se muestra la observación de la orden.
   * @property {Object} obveservOrderData - Datos de la observación de la orden.
   * @property {boolean} modalOpened - Indica si el modal está abierto.
   * @property {boolean} modalViewSlotHeader - Indica si se muestra el encabezado del modal.
   * @property {boolean} modalViewBodyImgTop - Indica si se muestra la parte superior de la imagen del modal.
   * @property {string} modalImgTop - Imagen de la parte superior del modal.
   * @property {string} modalTextBody - Texto del cuerpo del modal.
   * @property {string} modalViewBodyImgBottom - Indica si se muestra la parte inferior de la imagen del modal.
   * @property {string} modalImgBottom - Imagen de la parte inferior del modal.
   * @property {Object} modal - Datos del modal.
  */
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
  
  /**
    * @function openModal
    * @description Abre el modal.
  */
  openModal() {      
    this.setData({
      modalOpened: true,
    });
  },
   /**
    * @function onModalClick
    * @description Maneja el evento clic en el modal.
  */
  onModalClick() {
    this.setData({
      modalOpened: false,
    });
  },
  /**
    * @function onModalClose
    * @description Maneja el cierre del modal.
  */
  onModalClose() {
    this.setData({
      modalOpened: false,
    });
  },
  /**
    * @function event
    * @param {Object} data - Datos del evento.
    * @description Maneja en el data los datos de response y las opciones que estan activas, igualmente confirma que tenga parametros en el campo de consulta 
    * Y que el campo tenga mas de 4 caracteres, también consulta que la opción seleccionada no se un 0 o este vacia
  */
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
  /**
    * @function setParam
    * @param {Object} e - Datos del evento.
    * @description Al hacer ingreso de texto en el input envia esos datos a esta función con el objeto, el valor del evento lo almacena en el 
    * parametro data del data principal y verifica que el valor ingresado no sea menor a 4 
  */
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
  /**
    * @async
    * @function consult
    * @description Esta función modifica los datos de respuesta almacenado en el data al igual que mostrar orden, radio, cargamdo, header y demas 
    * los parametros, verifica que los datos seleccionados en la opción no estyen vacios y activa la visual del spiner de carga, realiza petición al 
    * serviceViewModel en el metodo getService enviando la data del input y la opción seleccionada, si recibe un true en la petición, oculta el 
    * spiner y en la variable response service consulta el getStorage en la posición RESPONS_SERVICE
  */
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
  /**
    * @async
    * @function radioSelected
    * @param {Object} data - Datos del evento.
    * @description Esta recibe un parametro de tipo objeto en donde estan los datos del elemento cliquedo, recorre los datos del array radio en donde 
    * quedan almacenados las respuesta a los servicios consultados, verifica cuál es el id del dato clickeado corresponde a algunos de la lista, si es 
    * así cambia la propiedad checked y la imagen que tiene ese elemento y finalmente actualiza la lista.  
  */
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

    this.setData({
      radio: updatedRadio
    });

  },
  /**
    * @function showODS
    * @description Esta función recorre los datos del array radio en donde quedan almacenados los datos de respuesta a los servicios consultados, verifica cuál 
    * es el item que esta en en true en la propiedad checked y almacena el la posición en la variable radioCheck, luego verifica que radioCheck no este vacia y si 
    * no es así declara 3 variables una dataCkecked que almacena los datos del radio checkeado, sizeLine que almacena el tamaño de la linea en la que esta la atención 
    * a ese servicio y emptyline que determina las números de la secuencia de atención, finalmente cambia las propiedades que almacenan el detalle de la orden de servicio.  
  */
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
  /**
    * @function showListDetailOrder
    * @param {Object} e - Datos del evento.
    * @description Esta función realiza cambios en las propiedades que muestran u oculta los detalles de las ordenes de servicio   
  */
  showListDetailOrder(e){
    
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
