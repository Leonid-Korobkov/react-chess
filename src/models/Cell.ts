import { Board } from './Board'
import { Colors } from './Colors'
import { Figure } from './figures/Figure'

export class Cell {
  readonly x: number
  readonly y: number
  readonly color: Colors
  figure: Figure | null
  board: Board
  aviable: boolean // может ли фигура переместиться на эту ячейку

  constructor(
    board: Board,
    x: number,
    y: number,
    color: Colors,
    figure: Figure | null,
  ) {
    this.x = x
    this.y = y
    this.color = color
    this.board = board
    this.figure = figure
    this.aviable = false
  }
  setFigure(figure: Figure) {
    this.figure = figure
    this.figure.cell = this
  }

  moveFigure(target: Cell) {
    if (this.figure && this.figure?.canMove(target)) {
      target.setFigure(this.figure)
      this.figure = null
    }
  }

  isEmpty(): boolean {
    return this.figure === null
  }

  isEmptyVertical(target: Cell): boolean {
    if (this.x !== target.x) {
      return false
    }

    const min = Math.min(this.y, target.y)
    const max = Math.max(this.y, target.y)
    for (let y = min + 1; y < max; y++) {
      if (!this.board.getCell(this.x, y).isEmpty()) {
        return false
      }
    }
    return true
  }

  isEmptyHorizontal(target: Cell): boolean {
    if (this.y !== target.y) {
      return false
    }

    const min = Math.min(this.x, target.x)
    const max = Math.max(this.x, target.x)
    for (let x = min + 1; x < max; x++) {
      if (!this.board.getCell(x, this.y).isEmpty()) {
        return false
      }
    }
    return true
  }

  isEmptyDiagonal(target: Cell): boolean {
    if (this.x !== target.x && this.y !== target.y) {
      return false
    }
    return true
  }
}
