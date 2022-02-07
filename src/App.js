import Navbar from "./Navbar.js"
import GameGrid from "./GameGrid.js"
import GameKeyboard from "./GameKeyboard.js"

class App {
  state = [];

  constructor(target) {
    this.target = target;
    this.navbar = new Navbar({target});
    this.gameGrid = new GameGrid({target});
    this.gameKeyboard = new GameKeyboard({target});
  }
  
  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
  }
}

export default App;