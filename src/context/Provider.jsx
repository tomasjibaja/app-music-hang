import React, { useState, useEffect } from 'react'
import Context from './Context'
import { preguntas } from '../data/preguntas'

const Provider = ( {children} ) => {
  const [gameOver, setGameOver] = useState(false)
  const [pregunta, setPregunta] = useState(preguntas[Math.floor(Math.random() * preguntas.length)])
  const [found, setFound] = useState([])
  const [wrongs, setWrongs] = useState([])
  const [win, setWin] = useState(false)
  const [lose, setLose] = useState(false)

  const generatePregunta = () => {
    setPregunta(preguntas[Math.floor(Math.random() * preguntas.length)])
  }

  useEffect(() => {
    if (Array.from(pregunta.respuesta).every((elem) => found.includes(elem))) {
      setWin(true)
    }
  }, [found])

  return (
    <Context.Provider value={{ 
      gameOver, setGameOver, pregunta, setPregunta, generatePregunta, found, setFound, win, setWin, lose, setLose, wrongs, setWrongs 
    }} >
      {children}
    </Context.Provider>
  )
}

export default Provider
