export class GridRow {
  constructor ({ target }) {
    this.gridColumns = []
    const $gridRow = document.createElement('div')
    $gridRow.classList.add('grid__row')
    target.appendChild($gridRow)
    this.$gridRow = $gridRow
  }
}
