export class GridColumn {
  constructor ({ target }) {
    this.props = {}
    const $gridColumn = document.createElement('div')
    $gridColumn.classList.add('grid__column')
    target.appendChild($gridColumn)
    this.$gridColumn = $gridColumn
  }

  setProps (nextProps) {
    this.props = { ...this.props, ...nextProps }
    this.render()
  }

  render () {
    this.$gridColumn.textContent = this.props.value
  }
}
