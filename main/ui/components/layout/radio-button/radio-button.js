Component({
  mixins: [],
  data: {
    intern : false,
    extern : true,
  },
  props: {
    onEvent : (data) => console.log(data),
    value : '', 
    check: '',
    id: '',
    class_txt : 'texto-basico',
    imagen: ''
  },
  didMount() {
    //!this.props.check ? this.setData({imagen: '/main/ui/assets/iconos/radio-uncheckBN.png'}) : this.setData({imagen: '/main/ui/assets/iconos/radio-checkRed.png'});
  },
  didUpdate() {
    console.log("Al actualizarlo", this.props);
  },
  didUnmount() {
    console.log("Al iniciarlo", this.props);
  },
  methods: {
    check(e){
      this.props.onEvent(e);
      //this.props.check === 'false' ? this.setData({imagen: '/main/ui/assets/iconos/radio-uncheckBN.png'}) : this.setData({imagen: '/main/ui/assets/iconos/radio-checkRed.png'});
    },
    onTapExtern(e){
      console.log(e);
    }
  },
});
