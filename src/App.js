import Navbar from "./Navbar.js"
import GameResult from "./GameResult.js"
import GameGrid from "./GameGrid.js"
import GameKeyboard from "./GameKeyboard.js"
import { request } from "./api.js"

class App {
  state = {x:-1, y:0, value:null, words:Array(6).fill(''), isUpdate: false, isFinish: false, isSuccess: null, answer: '', result:Array(5).fill('')};

  constructor(target) {
    this.target = target;
    this.navbar = new Navbar({target});
    this.gameResult = new GameResult({target});
    this.gameGrid = new GameGrid({target});
    this.gameKeyboard = new GameKeyboard({target});
    this.state.answer = this.getTodayAnswer();
    window.addEventListener('keydown', this.handleKeydown.bind(this))
  }
  
  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.gameResult.setProps(this.state);
    this.gameGrid.setProps(this.state);
  }

  handleKeydown(e) {
    if (this.state.isSuccess !== null) {
      return;
    }

    const value = e.key.toUpperCase();
    const regex = /^[A-Z]$|^BACKSPACE$|^ENTER$/;
    console.log(value);

    if (!regex.test(value)) {
      return;
    }

    if (value === 'BACKSPACE') {
      this.handleBackspace();
    }
    else if (value === 'ENTER') {
      this.handleEnter();
    }
    else {
      this.handleAlphabet(value);
    }   
  }

  getTodayAnswer() {
    return "WORLD";
  }

  handleBackspace() {
    let x = this.state.x;
    let y = this.state.y; 
    let words = this.state.words.slice();

    if (x === -1) {
      return;
    }

    words[y] = words[y].substr(0, words[y].length-1);
    this.setState({...this.state, value: '', words, isUpdate: true});
    this.setState({...this.state, x: x - 1, isUpdate: false});
    
    return; 
  }

  async handleEnter() {
    let x = this.state.x;
    let y = this.state.y; 
    const words = this.state.words.slice();
    const result = [];
    const answer = this.state.answer;

    if (x !== 4) {
      return;
    }

    const json = await request(words[y]);

    if(json.items[0].length === 0 || json.items[0][0][0][0].toUpperCase() !== words[y]) {
      alert('단어가 아닙니다!');
      return;
    }

    [...words[y]].forEach((char, idx) => {
      let resultValue = 'miss';
      for (let i = 0; i < answer.length; i++) {
        if (idx === i && answer[i] === char) {
          resultValue = 'strike';
          break;
        }
        else if (answer[i] === char) {
          resultValue = 'ball';
          break;  
        }
      }

      result.push(resultValue);
    });

    this.setState({...this.state, isFinish: true, result});
    console.log(answer);
    console.log(words[y]);
    if (answer === words[y]) {
      this.setState({...this.state, isFinish: false, isSuccess: true});
      return;
    }
    else if (y === 4) {
      this.setState({...this.state, isFinish: false, isSuccess: false});
      return;
    }
    this.setState({...this.state, x:-1, y:y+1, isFinish: false});
  }

  handleAlphabet(value) {
    let x = this.state.x;
    let y = this.state.y; 
    let words = this.state.words.slice();

    if (x === 4) {
      return;
    }

    x = x + 1;
    words[y] = words[y] + value;
    this.setState({...this.state, x, value, words, isUpdate: true});
    this.setState({...this.state, isUpdate: false});
  }
}

export default App;