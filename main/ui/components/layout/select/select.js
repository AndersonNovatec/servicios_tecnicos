/**
 * @module Select main/ui/components/layout/select
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
   * @property {boolean} showDropdown - Indica si se debe mostrar el contenido del select.
   * @property {string} selectedOption - Establece el texto inicial del select.
   * @property {array} overlay - Establece las opciones disponibles dentro del select
   */
  data: {
    showDropdown: false,
    selectedOption: 'Elige el criterio de búsqueda',
    options: ['Elige el criterio de búsqueda','Número Orden de Servicio', '', 'Cédula']
  },
  /**
   * Propiedades del componente.
   * @type {object}
   * @function onEvent - Esta propiedad almacena una función que se ejecuta al activar el evento onClick en el input
   * @param {object} data - Obtiene la propiedades del input
  **/
  props: {
    onEvent : (data) => console.log(data),
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    /**
     * @function toggleDropdown - Esta propiedad almacena una función que se ejecuta al activar el evento onClick en el input
     * @description Abre u oculta las opciones del select.
    **/
    toggleDropdown() {
      this.setData({
        showDropdown: !this.data.showDropdown
      });
    },
    /**
     * @function selectOption - Esta propiedad almacena una función que se ejecuta al activar el evento onClick en el input
     * @param {object} e - Obtiene la propiedades del input
     * @description Cambia los datos de la propiedad onEvent enviando los datos del elemento clickeado, almacena en una constante
     * los datos del actual elemento cliqueado y en el data cambia la proiedad sectedOption y showdropdown, en resumen oculta la 
     * lista de elemntos del item y establece el primer item como el seleccionado
    **/
    selectOption(e) {
      this.props.onEvent({data : e});
      const option = this.data.options[e.currentTarget.id];
      this.setData({
        selectedOption: option,
        showDropdown: false
      });
    }
  },
});