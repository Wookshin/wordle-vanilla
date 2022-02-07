class GameKeyboard {
  state = [];
  constructor({ target }) {
    const gameKeyboard = document.createElement('div');
    this.gameKeyboard = gameKeyboard;
    gameKeyboard.classList.add('game__keyboard');
    target.appendChild(gameKeyboard);
    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.gameKeyboard.innerHTML = `
      <div class="keyboard__row">
        <div class="keyboard__row-key">Q</div>
        <div class="keyboard__row-key">W</div>
        <div class="keyboard__row-key">E</div>
        <div class="keyboard__row-key">R</div>
        <div class="keyboard__row-key">T</div>
        <div class="keyboard__row-key">Y</div>
        <div class="keyboard__row-key">U</div>
        <div class="keyboard__row-key">I</div>
        <div class="keyboard__row-key">O</div>
        <div class="keyboard__row-key">P</div>
      </div>
      <div class="keyboard__row">
        <div class="keyboard__row-key">A</div>
        <div class="keyboard__row-key">S</div>
        <div class="keyboard__row-key">D</div>
        <div class="keyboard__row-key">F</div>
        <div class="keyboard__row-key">G</div>
        <div class="keyboard__row-key">H</div>
        <div class="keyboard__row-key">J</div>
        <div class="keyboard__row-key">K</div>
        <div class="keyboard__row-key">L</div>
      </div>
      <div class="keyboard__row">
        <div class="keyboard__row-key">ENTER</div>
        <div class="keyboard__row-key">Z</div>
        <div class="keyboard__row-key">X</div>
        <div class="keyboard__row-key">C</div>
        <div class="keyboard__row-key">V</div>
        <div class="keyboard__row-key">B</div>
        <div class="keyboard__row-key">N</div>
        <div class="keyboard__row-key">M</div>
        <div class="keyboard__row-key">BACKSPACE</div>
      </div>
    `;
  }
}

export default GameKeyboard;
