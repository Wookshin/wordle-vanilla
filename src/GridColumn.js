export class GridColumn {
  props = {};

  constructor({target}) {
    const $gridColumn = document.createElement('div');
    this.$gridColumn = $gridColumn;
    $gridColumn.classList.add('grid__column');
    target.appendChild($gridColumn);
  }

  setProps(nextProps) {
    this.props = {...this.props, ...nextProps};
    this.render();
  }

  render() {
    this.$gridColumn.textContent = this.props.value;
  }
}