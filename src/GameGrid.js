class GameGrid {
  state = [];
  constructor({target}) {
    const gameGrid = document.createElement('div');
    this.gameGrid = gameGrid;
    gameGrid.classList.add('game__grid');
    target.appendChild(gameGrid);
    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.gameGrid.innerHTML = `
      <div class="grid__row">
        <div class="grid__column"></div>
        <div class="grid__column"></div>
        <div class="grid__column"></div>
        <div class="grid__column"></div>
        <div class="grid__column"></div>
      </div>
      <div class="grid__row">
        <div class="grid__column"></div>
        <div class="grid__column"></div>
        <div class="grid__column"></div>
        <div class="grid__column"></div>
        <div class="grid__column"></div>
      </div>
      <div class="grid__row">
        <div class="grid__column"></div>
        <div class="grid__column"></div>
        <div class="grid__column"></div>
        <div class="grid__column"></div>
        <div class="grid__column"></div>
      </div>
      <div class="grid__row">
        <div class="grid__column"></div>
        <div class="grid__column"></div>
        <div class="grid__column"></div>
        <div class="grid__column"></div>
        <div class="grid__column"></div>
      </div>
      <div class="grid__row">
        <div class="grid__column"></div>
        <div class="grid__column"></div>
        <div class="grid__column"></div>
        <div class="grid__column"></div>
        <div class="grid__column"></div>
      </div>
      <div class="grid__row">
        <div class="grid__column"></div>
        <div class="grid__column"></div>
        <div class="grid__column"></div>
        <div class="grid__column"></div>
        <div class="grid__column"></div>
      </div>
    `;
  }
}

export default GameGrid;