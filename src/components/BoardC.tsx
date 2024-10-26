import { useEffect, useState } from 'react'
import { Board } from '../models/Board'
import CellC from './CellC'
import { Cell } from '../models/Cell'
import { Player } from '../models/Player'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
  currentPlayer: Player | null
  changePlayer: () => void
}

function BoardC({ board, setBoard, currentPlayer, changePlayer }: BoardProps) {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  useEffect(() => {
    highlightCells()
  }, [selectedCell])

  function clickOnCell(cell: Cell) {
    // Если
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell)
      changePlayer()
      setSelectedCell(null)
      updateBoard()
    } else {
      if (cell?.figure?.color === currentPlayer?.color) setSelectedCell(cell)
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
            isEnemy={cell.figure?.color !== currentPlayer?.color}
          ></CellC>
        )),
      )}
    </div>
  )
}

export default BoardC
