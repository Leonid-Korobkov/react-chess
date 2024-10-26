import { useEffect, useState } from 'react'
import './App.css'
import BoardC from './components/BoardC'
import { Board } from './models/Board'
import { Player } from './models/Player'
import { Colors } from './models/Colors'
import LostFigures from './components/LostFigures'
import Timer from './components/Timer'

function App() {
  const [board, setBoard] = useState(new Board())
  const [whitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  useEffect(() => {
    restart()
  }, [])

  function restart() {
    const newBoard = new Board()
    newBoard.InitCells()
    newBoard.setUpFigures()
    setBoard(newBoard)

    setCurrentPlayer(whitePlayer)
  }

  function changePlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer,
    )
  }

  return (
    <>
      <div className='app'>
        <div className='board-wrapper'>
          <div className='info-panel'>
            <h2>
              Ходит игрок:{' '}
              {currentPlayer?.color === Colors.WHITE ? 'Белый' : 'Черный'}
            </h2>
            <Timer currentPlayer={currentPlayer} restartGame={restart} />
            <LostFigures
              title='Игрок за белыми фигурами'
              figures={board.lostBlackFigures}
            />
            <LostFigures
              className='lost-figure--white'
              title='Игрок за черными фигурами'
              figures={board.lostWhiteFigures}
            />
          </div>
          <BoardC
            board={board}
            setBoard={setBoard}
            currentPlayer={currentPlayer}
            changePlayer={changePlayer}
          />
        </div>
      </div>
    </>
  )
}

export default App
