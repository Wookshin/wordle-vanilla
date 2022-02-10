import { GridColumn } from './GridColumn.js'
import { GridRow } from './GridRow.js'

class GameGrid {
  constructor ({ target }) {
    this.props = {}
    this.gridRows = null
    const $gameGrid = document.createElement('div')
    this.$gameGrid = $gameGrid
    $gameGrid.classList.add('game__grid')
    target.appendChild($gameGrid)

    this.gridRows = Array.from(
      { length: 5 },
      () => new GridRow({ target: $gameGrid })
    )
    this.gridRows.forEach(gridRow => {
      for (let i = 0; i < 5; i++) {
        const gridColumn = new GridColumn({ target: gridRow.$gridRow })
        gridRow.gridColumns.push(gridColumn)
      }
    })
  }

  setProps (nextProps) {
    this.props = { ...this.props, ...nextProps }
    this.render()
  }

  render () {
    const { x, y, value, scores, isUpdate, isEnter } = this.props

    if (isUpdate) {
      this.gridRows[y].gridColumns[x].$gridColumn.classList.toggle('inserting')
      this.gridRows[y].gridColumns[x].setProps({ value })

      window.setTimeout(() => {
        this.gridRows[y].gridColumns[x].$gridColumn.classList.toggle(
          'inserting'
        )
      }, 100)
    }

    if (isEnter) {
      this.gridRows[y].gridColumns.forEach((gridColumn, idx) => {
        window.setTimeout(() => {
          gridColumn.$gridColumn.classList.toggle('finishing')
        }, 250 * (idx + 1) + 50)

        window.setTimeout(() => {
          gridColumn.$gridColumn.classList.add(scores[idx].score)
          gridColumn.$gridColumn.classList.toggle('finishing')
        }, 250 * (idx + 1) + 300)
      })
    }
  }
}

export default GameGrid
