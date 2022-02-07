import { GridColumn } from './GridColumn.js'
import { GridRow } from './GridRow.js'

class GameGrid {
  props = {};
  constructor({target}) {
    const gameGrid = document.createElement('div');
    this.gameGrid = gameGrid;
    gameGrid.classList.add('game__grid');
    target.appendChild(gameGrid);
    
    const rows = Array.from({length:5}, ()=> new GridRow({target: gameGrid}));
    rows.forEach(row => {
      for (let i=0; i<5; i++) {
        new GridColumn({target: row.gridRow})
      }
    });
  }

  setProps(nextProps) {
    props = {...this.props, nextProps};
    this.render();
  }


  render() {
  }
}

export default GameGrid;