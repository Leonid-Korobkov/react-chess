import { Cell } from '../models/Cell'
import { Colors } from '../models/Colors'

interface CellProps {
  cell: Cell
  selected: boolean
  click: (cell: Cell) => void
}

function CellC({ cell, selected, click }: CellProps) {
  return (
    <div
      onClick={() => click(cell)}
      className={`board__cell 
        ${cell.color === Colors.WHITE ? 'board__cell--white' : 'board__cell--black'}
        ${selected ? 'selected' : ''}`}
      style={{
        cursor: cell.figure ? 'pointer' : 'default',
        backgroundColor: cell.aviable && cell.figure ? '#2fff2f' : '',
      }}
    >
      {cell.aviable && !cell.figure && <div className='aviable'></div>}
      {cell.figure?.logo && <img src={cell.figure?.logo} alt='' />}
    </div>
  )
}

export default CellC
