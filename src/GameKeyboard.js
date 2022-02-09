class GameKeyboard {
  constructor({ target, onClick }) {
    const $gameKeyboard = document.createElement('div');
    this.$gameKeyboard = $gameKeyboard;
    $gameKeyboard.classList.add('game__keyboard');
    $gameKeyboard.addEventListener('click', e => {
      if (e.target.matches('.keyboard__row-key')) {
        onClick(e.target.dataset);
      }
    });
    $gameKeyboard.innerHTML = `
      <div class="keyboard__row">
        <div class="keyboard__row-key" data-key="Q">Q</div>
        <div class="keyboard__row-key" data-key="W">W</div>
        <div class="keyboard__row-key" data-key="E">E</div>
        <div class="keyboard__row-key" data-key="R">R</div>
        <div class="keyboard__row-key" data-key="T">T</div>
        <div class="keyboard__row-key" data-key="Y">Y</div>
        <div class="keyboard__row-key" data-key="U">U</div>
        <div class="keyboard__row-key" data-key="I">I</div>
        <div class="keyboard__row-key" data-key="O">O</div>
        <div class="keyboard__row-key" data-key="P">P</div>
      </div>
      <div class="keyboard__row">
        <div class="keyboard__row-key" data-key="A">A</div>
        <div class="keyboard__row-key" data-key="S">S</div>
        <div class="keyboard__row-key" data-key="D">D</div>
        <div class="keyboard__row-key" data-key="F">F</div>
        <div class="keyboard__row-key" data-key="G">G</div>
        <div class="keyboard__row-key" data-key="H">H</div>
        <div class="keyboard__row-key" data-key="J">J</div>
        <div class="keyboard__row-key" data-key="K">K</div>
        <div class="keyboard__row-key" data-key="L">L</div>
      </div>
      <div class="keyboard__row">
        <div class="keyboard__row-key" data-key="ENTER">ENTER</div>
        <div class="keyboard__row-key" data-key="Z">Z</div>
        <div class="keyboard__row-key" data-key="X">X</div>
        <div class="keyboard__row-key" data-key="C">C</div>
        <div class="keyboard__row-key" data-key="V">V</div>
        <div class="keyboard__row-key" data-key="B">B</div>
        <div class="keyboard__row-key" data-key="N">N</div>
        <div class="keyboard__row-key" data-key="M">M</div>
        <div class="keyboard__row-key" data-key="BACKSPACE">BACKSPACE</div>
      </div>
    `;
    target.appendChild($gameKeyboard);
  }

  setProps(nextProps) {
    this.props = { ...this.props, ...nextProps };
    this.render();
  }

  render() {
    const { scores, isEnter } = this.props;

    if (!isEnter) {
      return;
    }

    const keys = this.$gameKeyboard.querySelectorAll('.keyboard__row-key');
    keys.forEach($key => {
      scores.forEach(v => {
        if ($key.dataset.key === v.alphabet) {
          $key.classList.add(v.score);
        }
      });
    });
  }
}

export default GameKeyboard;
