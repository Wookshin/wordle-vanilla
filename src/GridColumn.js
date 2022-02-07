export class GridColumn {
  constructor({target}) {
    const gridColumn = document.createElement('div');
    this.gridColumn = gridColumn;
    gridColumn.classList.add('grid__column');
    target.appendChild(gridColumn);
  }
}