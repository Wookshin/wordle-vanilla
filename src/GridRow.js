export class GridRow {
  constructor ({ target }) {
    this.gridColumns = []
    const $gridRow = document.createElement('div')
    this.$gridRow = $gridRow
    $gridRow.classList.add('grid__row')
    target.appendChild($gridRow)
  }
}
