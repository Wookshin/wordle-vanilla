import Navbar from "./Navbar.js"
import GameGrid from "./GameGrid.js"
import GameKeyboard from "./GameKeyboard.js"

class App {
  state = {x:0, y:0, value:null};

  constructor(target) {
    this.target = target;
    this.navbar = new Navbar({target});
    this.gameGrid = new GameGrid({target});
    this.gameKeyboard = new GameKeyboard({target});
    window.addEventListener('keydown', e => {
      this.setState({...this.state, value:e.key});
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