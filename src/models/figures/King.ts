import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure } from './Figure'
import blackLogo from '../../assets/black-king.svg'
import whiteLogo from '../../assets/white-king.svg'
import { FiguresNames } from './FiguresNames'

// Фигура - король
export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FiguresNames.KING
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }

    const dx = Math.abs(this.cell.x - target.x)
    const dy = Math.abs(this.cell.y - target.y)

    if (dx <  2 && dy < 2) {
      return true
    }
    return false
  }
}
