import { Colors } from '../Colors'
import logo from '../../assets/black-knight.svg'
import { Cell } from '../Cell'
import { FiguresNames } from './FiguresNames'

export abstract class Figure {
  color: Colors
  logo: typeof logo | null
  cell: Cell
  name: FiguresNames
  id: number

  constructor(color: Colors, cell: Cell) {
    this.color = color
    this.cell = cell
    this.cell.figure = this
    this.logo = null
    this.name = FiguresNames.FIGURE
    this.id = Math.random()
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) {
      return false
    }
    if (target.figure?.name === FiguresNames.KING) {
      return false
    }
    return true
  }
  moveFigure(_target: Cell) {}
}
