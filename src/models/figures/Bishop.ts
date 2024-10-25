import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure } from './Figure'
import blackLogo from '../../assets/black-bishop.svg'
import whiteLogo from '../../assets/white-bishop.svg'
import { FiguresNames } from './FiguresNames'

// Фигура - слон
export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FiguresNames.BISHOP
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    if (this.cell.isEmptyDiagonal(target)) {
      return true
    }
    return false
  }
}
