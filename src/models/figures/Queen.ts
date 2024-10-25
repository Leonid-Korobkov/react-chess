import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure } from './Figure'
import blackLogo from '../../assets/black-queen.svg'
import whiteLogo from '../../assets/white-queen.svg'
import { FiguresNames } from './FiguresNames'

// Фигура - ферзь
export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FiguresNames.QUEEN
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false
    if (
      this.cell.isEmptyVertical(target) ||
      this.cell.isEmptyHorizontal(target) ||
      this.cell.isEmptyDiagonal(target)
    ) {
      return true
    }

    return false
  }
}
