import { useEffect, useState } from 'react'
import './App.css'
import BoardC from './components/BoardC'
import { Board } from './models/Board'

function App() {
  const [board, setBoard] = useState(new Board())

  useEffect(() => {
    restart()
  }, [])

  function restart() {
    const newBoard = new Board()
    newBoard.InitCells()
    newBoard.setUpFigures()
    setBoard(newBoard)
  }

  return (
    <>
      <div className='app'>
        <BoardC board={board} setBoard={setBoard}></BoardC>
      </div>
    </>
  )
}

export default App
