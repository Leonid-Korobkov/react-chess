import { useEffect, useRef, useState } from 'react'
import { Player } from '../models/Player'
import { Colors } from '../models/Colors'

interface TimerProps {
  currentPlayer: Player | null
  restartGame: () => void
}

function Timer({ currentPlayer, restartGame }: TimerProps) {
  const [blackTimer, setBlackTimer] = useState<number>(300)
  const [whiteTimer, setWhiteTimer] = useState<number>(300)
  const timer = useRef<null | ReturnType<typeof setInterval>>(null)

  useEffect(() => {
    startTimer()
  }, [currentPlayer])

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current)
    }

    const callback =
      currentPlayer?.color === Colors.BLACK
        ? decrementBlackTimer
        : decrementWhiteTimer

    timer.current = setInterval(callback, 1000)
  }

  function decrementBlackTimer() {
    setBlackTimer((p) => p - 1)
  }
  function decrementWhiteTimer() {
    setWhiteTimer((p) => p - 1)
  }
  function handleRestart() {
    setBlackTimer(300)
    setWhiteTimer(300)
    restartGame()
  }

  return (
    <div className='timer'>
      <div>Время черные: {blackTimer}</div>
      <div>Время белые: {whiteTimer}</div>
      <button onClick={handleRestart} className='btn-main' role='button'>
        Перезапуск
      </button>
    </div>
  )
}

export default Timer
