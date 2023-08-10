Component({
  mixins: [],
  data: {
    showDropdown: false,
    selectedOption: 'Elige el criterio de búsqueda',
    options: ['Elige el criterio de búsqueda','Número Orden de Servicio', '', 'Cédula']
  },
  props: {
    onEvent : (data) => console.log(data),
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    toggleDropdown(e) {
      this.setData({
        showDropdown: !this.data.showDropdown
      });
    },
  
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