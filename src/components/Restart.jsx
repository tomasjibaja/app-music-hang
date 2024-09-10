import React, { useContext } from 'react'
import Context from '../context/Context'

const Restart = () => {

  const {setWin, setLose, generatePregunta, setWrongs, setFound } = useContext(Context)

  const handleClick = () => {
    setFound([])
    setLose(false)
    setWin(false)
    setWrongs([])
    generatePregunta()
  }

  return (
    <button className='restart-btn' onClick={handleClick}>Jugar de nuevo</button>
  )
}

export default Restart
