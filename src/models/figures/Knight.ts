import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure } from './Figure'
import blackLogo from '../../assets/black-knight.svg'
import whiteLogo from '../../assets/white-knight.svg'
import { FiguresNames } from './FiguresNames'

// Фигура - конь
export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FiguresNames.KNIGHT
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    if (this.isEmptyForKnight(target)) {
      return true
    }
    return false
  }

  isEmptyForKnight(target: Cell): boolean {
    const absX = Math.abs(target.x - this.cell.x)
    const absY = Math.abs(target.y - this.cell.y)
    if ((absX === 1 && absY === 2) || (absX === 2 && absY === 1)) {
      return true
    }
    return false
  }
}
