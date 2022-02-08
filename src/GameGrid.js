import { GridColumn } from './GridColumn.js'
import { GridRow } from './GridRow.js'

class GameGrid {
  props = {};
  rows = null;
  constructor({target}) {
    const gameGrid = document.createElement('div');
    this.gameGrid = gameGrid;
    gameGrid.classList.add('game__grid');
    target.appendChild(gameGrid);
    
    this.rows = Array.from({length:5}, ()=> new GridRow({target: gameGrid}));
    this.rows.forEach(row => {
      for (let i=0; i<5; i++) {
        let gridColumn = new GridColumn({target: row.gridRow});
        row.cols.push(gridColumn);
      }
    });
  }

  setProps(nextProps) {
    this.props = {...this.props, ...nextProps};
    this.render();
  }


  render() {
    const { x, y, value} = this.props;
    this.rows[y].cols[x].setProps({value});
  }
}

export default GameGrid;