Component({
  mixins: [],
  data: {
    modalOpened: false
  },
  props: {
    isOpen: false,
    title: '',
    content: '',
    footer: ''
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    openModal() {
      this.setData({
        modalOpened: this.props.isOpen,
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
    }
  },
});
