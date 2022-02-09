import { GridColumn } from './GridColumn.js'
import { GridRow } from './GridRow.js'

class GameGrid {
  props = {};
  gridRows = null;
  constructor({target}) {
    const $gameGrid = document.createElement('div');
    this.$gameGrid = $gameGrid;
    $gameGrid.classList.add('game__grid');
    target.appendChild($gameGrid);
    
    this.gridRows = Array.from({length:5}, ()=> new GridRow({target: $gameGrid}));
    this.gridRows.forEach(gridRow => {
      for (let i=0; i<5; i++) {
        let gridColumn = new GridColumn({target: gridRow.$gridRow});
        gridRow.gridColumns.push(gridColumn);
      }
    });
  }

  setProps(nextProps) {
    this.props = {...this.props, ...nextProps};
    this.render();
  }

  render() {
    const { x, y, value, isUpdate, isFinish, result} = this.props;
    
    if (isUpdate) {
      this.gridRows[y].gridColumns[x].$gridColumn.classList.toggle('inserting');
      this.gridRows[y].gridColumns[x].setProps({value});
      window.setTimeout(() => {
        this.gridRows[y].gridColumns[x].$gridColumn.classList.toggle('inserting');
      }, 100);
    }

    if (isFinish) {
      this.gridRows[y].gridColumns.forEach((gridColumn, idx) => {
        window.setTimeout(() => {
          gridColumn.$gridColumn.classList.toggle('finishing');
        }, 250 * (idx+1) + 50);

        window.setTimeout(() => {
          gridColumn.$gridColumn.classList.add(result[idx]);
          gridColumn.$gridColumn.classList.toggle('finishing');
        }, 250 * (idx+1) + 300);
      });
    }
  }
}

export default GameGrid;