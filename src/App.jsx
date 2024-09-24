
import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'

function App() {

  const [ isTimerShowing, setIsTimerShowing ] = useState(false)

  const handleChangeIsShowing = () => {
    // if (isTimerShowing) {
    //   setIsTimerShowing(false)
    // } else {
    //   setIsTimerShowing(true)
    // }
    setIsTimerShowing( !isTimerShowing )
  }

  return (
    <>

      <button onClick={handleChangeIsShowing}>{isTimerShowing ? "Ocultar" : "Mostrar"} Temporizador</button>

      {isTimerShowing === true ? <Timer setIsTimerShowing={setIsTimerShowing}/> : null}

    </>
  )
}

export default App
