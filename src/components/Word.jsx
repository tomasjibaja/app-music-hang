import React, { useContext } from 'react'
import Context from '../context/Context'

const Word = () => {

  const {pregunta, found} = useContext(Context)
  const word = [...pregunta.respuesta]

  return (
    <div className='word'>
      {word.map((elem, index) => {
        const visibility = found.includes(elem) ? 'visible' : 'hidden'
        return (
          <span className={`hang-letter ${visibility}`} key={index}>{elem}</span>
        )
      })}
    </div>
  )
}

export default Word
