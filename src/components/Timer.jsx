import { useEffect, useState } from 'react'

function Timer() {

  
  const [timerValue, setTimerValue] = useState(0)

  // console.log("componente renderizandose de nuevo")

  useEffect(() => {
    console.log("esto ocurre solo una vez cuando el componente es creado")

    setInterval(() => {
      // console.log("estado cambiando")

      setTimerValue((estado) => {
        return estado + 1
      })

    }, 1000)

  }, []) // componentDidMount

  return (
    <div>
      
      <h3>Temporizador</h3>

      <h1>{timerValue}</h1>

      {/* <p>Tiempo se termino</p> */}

    </div>
  )
}

export default Timer