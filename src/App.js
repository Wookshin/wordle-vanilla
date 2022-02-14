import Navbar from './Navbar.js'
import GameResult from './GameResult.js'
import GameGrid from './GameGrid.js'
import GameKeyboard from './GameKeyboard.js'
import { getWordFromNaver } from './api.js'
import LoadingDialog from './LoadingDialog.js'

const INIT_INDEX = -1
const LAST_INDEX = 4

class App {
  constructor (target) {
    this.state = {
      x: INIT_INDEX,
      y: 0,
      value: null,
      inputWords: Array(6).fill(''),
      isUpdate: false,
      isEnter: false,
      isLoading: false,
      isSuccess: null,
      answer: '',
      scores: Array(5).fill('')
    }
    this.navbar = new Navbar({ target })
    this.gameResult = new GameResult({ target })
    this.loadingDialog = new LoadingDialog({ target })
    this.gameGrid = new GameGrid({ target })
    this.gameKeyboard = new GameKeyboard({
      target,
      onClick: this.handleInput.bind(this)
    })
    this.target = target
    this.state.answer = this.getTodayAnswer()
    window.addEventListener('keydown', this.handleInput.bind(this))
  }

  setState (nextState) {
    this.state = nextState
    this.render()
  }

  render () {
    this.gameResult.setProps(this.state)
    this.loadingDialog.setProps(this.state)
    this.gameGrid.setProps(this.state)
    this.gameKeyboard.setProps(this.state)
  }

  handleInput (e) {
    if (this.state.isSuccess !== null) {
      return
    }

    const value = e.key.toUpperCase()
    const regex = /^[A-Z]$|^BACKSPACE$|^ENTER$/

    if (!regex.test(value)) {
      return
    }

    if (value === 'BACKSPACE') {
      this.handleBackspace()
    } else if (value === 'ENTER') {
      this.handleEnter()
    } else {
      this.handleAlphabet(value)
    }
  }

  getTodayAnswer () {
    return 'WORLD'
  }

  handleBackspace () {
    if (this.state.x === INIT_INDEX) {
      return
    }

    const x = this.state.x
    const y = this.state.y
    const inputWords = this.state.inputWords.slice()

    inputWords[y] = inputWords[y].substr(0, inputWords[y].length - 1)

    this.setState({ ...this.state, value: '', inputWords, isUpdate: true })
    this.setState({ ...this.state, x: x - 1, isUpdate: false })
  }

  async handleEnter () {
    if (this.state.x !== LAST_INDEX) {
      return
    }

    const y = this.state.y
    const inputWords = this.state.inputWords.slice()
    const checkList = { answer: this.state.answer, scores: Array.from({ length: 5}, () => ({ alphabet: '', score:'miss' })) }
    
    this.setState({ ...this.state, isLoading: true })
    const json = await getWordFromNaver(inputWords[y])
    this.setState({ ...this.state, isLoading: false })

    if (
      json.items[0].length === 0 ||
      json.items[0][0][0][0].toUpperCase() !== inputWords[y]
    ) {
      window.alert(`${inputWords[y]}는 단어가 아닙니다!`)
      return
    }

    [...inputWords[y]].forEach((alphabet, idx) => {
      // check strike
      for (let i = 0; i < checkList.answer.length; i++) {
        if (idx === i && checkList.answer[i] === alphabet) {
          checkList.scores[i].alphabet = alphabet
          checkList.scores[i].score = 'strike'
          break
        }
      }

      // check ball
      for (let i = 0; i < checkList.answer.length; i++) {
        if (checkList.scores[i].score === 'miss' && checkList.answer[i] === alphabet) {
          checkList.scores[i].alphabet = alphabet
          checkList.scores[i].score = 'ball'
          break
        }
      }
    })
    
    this.setState({ ...this.state, scores: checkList.scores, isEnter: true })

    if (checkList.answer === inputWords[y]) {
      this.setState({ ...this.state, isEnter: false, isSuccess: true })
    } else if (y === LAST_INDEX) {
      this.setState({ ...this.state, isEnter: false, isSuccess: false })
    } else {
      this.setState({ ...this.state, x: INIT_INDEX, y: y + 1, isEnter: false })
    }
  }

  handleAlphabet (value) {
    if (this.state.x === LAST_INDEX) {
      return
    }

    const x = this.state.x
    const y = this.state.y
    const inputWords = this.state.inputWords.slice()

    inputWords[y] = inputWords[y] + value

    this.setState({
      ...this.state,
      x: x + 1,
      value,
      inputWords,
      isUpdate: true
    })
    this.setState({ ...this.state, isUpdate: false })
  }
}

export default App
