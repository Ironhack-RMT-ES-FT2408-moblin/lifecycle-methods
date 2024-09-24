import { useEffect, useState } from 'react'

function Timer(props) {

  
  const [timerValue, setTimerValue] = useState(10)

  // console.log("componente renderizandose de nuevo")

  useEffect(() => {
    console.log("esto ocurre solo una vez cuando el componente es creado")

    const intervalId = setInterval(() => {
      // console.log("estado cambiando")

      setTimerValue((estado) => {
        // console.log(estado)
        return estado - 1
      })
    }, 1000)

    return () => {
      console.log("efecto de salida. Component Will Unmount")
      clearInterval(intervalId)
    }

  }, []) // componentDidMount

  useEffect(() => {
    console.log("esto ocurre cuando se actualiza timerValue")
    if (timerValue <= 0) {
      // ejemplo reiniciarlo
      setTimerValue(10)

      // ejemplo destruirlo al terminar el timer
      // console.log("autodestruccion")
      // props.setIsTimerShowing(false)
    }
  }, [timerValue])

  return (
    <div>
      
      <h3>Temporizador</h3>

      <h1>{timerValue}</h1>

      {/* <p>Tiempo se termino</p> */}

    </div>
  )
}

export default Timer