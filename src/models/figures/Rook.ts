import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure } from './Figure'
import blackLogo from '../../assets/black-rook.svg'
import whiteLogo from '../../assets/white-rook.svg'
import { FiguresNames } from './FiguresNames'

// Фигура - ладья
export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FiguresNames.ROOK
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    if (
      this.cell.isEmptyVertical(target) ||
      this.cell.isEmptyHorizontal(target)
    ) {
      return true
    }
    return false
  }
}
