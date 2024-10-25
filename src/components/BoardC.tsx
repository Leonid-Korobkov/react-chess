import { useEffect, useState } from 'react'
import { Board } from '../models/Board'
import CellC from './CellC'
import { Cell } from '../models/Cell'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
}

function BoardC({ board, setBoard }: BoardProps) {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  useEffect(() => {
    highlightCells()
  }, [selectedCell])

  function clickOnCell(cell: Cell) {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell)
      setSelectedCell(null)
      updateBoard()
    } else {
      setSelectedCell(cell)
    }
  }

  function highlightCells() {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (
    <div className='board'>
      {board.cells.map((row) =>
        row.map((cell) => (
          <CellC
            click={clickOnCell}
            cell={cell}
            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
            key={cell.x + '-' + cell.y}
          ></CellC>
        )),
      )}
    </div>
  )
}

export default BoardC
