import React, { useContext } from 'react'
import Context from '../context/Context'

const alphabet = Array.from({length: 26}, (_, x) => String.fromCharCode(x + 65))

const Letters = () => {

  const {pregunta, setFound, found, wrongs, setWrongs, setWin, setLose} = useContext(Context)

  const handleClick = (e) => {
    const char = e.target.innerHTML
    const respuesta = Array.from(pregunta.respuesta)
    if (respuesta.includes(char)) {
      if (!found.includes(char)) {
        e.target.classList.add('right')
        setFound([...found, char])
      }
    } else {
      if (!wrongs.includes(char)) {
        e.target.classList.add('wrong')
        setWrongs([...wrongs, char])
      }
    }
    if (wrongs.length == 5) {
      setLose(true)
    }
  }

  return (
    <div className='letters-wrapper'>
      {
        alphabet.map((elem, index) => {
          return (
            <button onClick={handleClick} className='button-letter' key={index}>{elem}</button>
          )
        })
      }
    </div>
  )
}

export default Letters
