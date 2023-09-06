/**
 * @module Radio main/ui/components/layout/radio
*/

/**
 * Componente header.
 * @component
*/

Component({
  /**
   * Mezclas (mixins) a ser utilizadas en el componente.
   * @type {Array}
  */
  mixins: [],
  /**
   * Datos locales del componente.
   * @type {object}
   * @property {boolean} intern - Indica si se marca la parte interna del radio.
   * @property {boolean} extern - Indica si se la parte externa del radio.
  */
  data: {
    intern : false,
    extern : true,
  },
  /**
   * Propiedades del componente.
   * @type {object}
   * @function onEvent - Esta propiedad almacena una función que se ejecuta al activar el evento onClick en el input
   * @param {object} data - Obtiene la propiedades del input
  **/
  props: {
    onEvent : (data) => console.log(data),
    value : '', 
    check: '',
    id: '',
    class_txt : 'texto-basico',
    imagen: ''
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    /**
     * @function check - Esta propiedad almacena una función que se ejecuta al activar el evento onClick en el input
     * @param {object} e - Obtiene la propiedades del input
    **/
    check(e){
      this.props.onEvent(e);
    },
    onTapExtern(){}
  },
});
