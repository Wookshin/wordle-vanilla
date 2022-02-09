class GameResult {
  props = {};

  constructor({ target }) {
    const $gameResult = document.createElement('div');
    this.$gameResult = $gameResult;
    $gameResult.classList.add('game__result');
    target.appendChild($gameResult);
  }

  setProps(nextProps) {
    this.props = { ...this.props, ...nextProps };
    this.render();
  }

  render() {
    const { answer, isSuccess } = this.props;

    if (isSuccess === null) {
      return;
    }

    this.$gameResult.innerHTML = `
      <div>정답은 <span class="result__answer">${answer}</span> 입니다!</div>
      <div>
      ${isSuccess ? '축하드립니다!🎉' : '다음 기회에 맞춰주세요!😉'}
      </div>
    `;
    window.setTimeout(() => {
      this.$gameResult.classList.add('show');
    }, 300);
  }
}

export default GameResult;
