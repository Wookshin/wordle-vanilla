import Navbar from "./Navbar.js"
import GameGrid from "./GameGrid.js"
import GameKeyboard from "./GameKeyboard.js"

class App {
  state = {x:-1, y:0, value:null, words:Array(6).fill(''), isUpdate: false};

  constructor(target) {
    this.target = target;
    this.navbar = new Navbar({target});
    this.gameGrid = new GameGrid({target});
    this.gameKeyboard = new GameKeyboard({target});
    window.addEventListener('keydown', e => {
      let value = e.key.toUpperCase();
      console.log(value);
      const regex = /^[A-Z]|BACKSPACE$/;
      if (!regex.test(value)) {
        return;
      }

      let stateX = this.state.x;
      let stateY = this.state.y; 
      let x;
      let y;
      let words = this.state.words.slice();
      let isUpdate = true;

      if (value === 'BACKSPACE') {
        console.log('1',this.state);
        
        if (stateX === -1 && stateY === 0) {
          return;
        }

        words[stateY] = words[stateY].substr(0, words[stateY].length-1);
        this.setState({x: stateX, y: stateY, value: '', words, isUpdate});

        if (stateX === 0 && stateY === 0) {
          x = -1;
          y = 0;
          isUpdate = false;
        }
        else {
          x = stateX === 0 ? 4 : stateX - 1;
          y = stateX === 0 ? stateY - 1 : stateY;
        }
        console.log('2',this.state);
        this.setState({...this.state, x, y, value: words[y][x], isUpdate});
        console.log('3',this.state);
      }
      else {
        x = stateX === 4 ? 0 : stateX + 1;
        y = stateX === 4 ? stateY + 1 : stateY;
        words[y] = words[y] + value;
        this.setState({x, y, value, words, isUpdate});
        console.log(this.state);
      }
    })
  }
  
  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.gameGrid.setProps(this.state);
  }
}

export default App;