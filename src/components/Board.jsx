import React, { useContext } from 'react'
import Context from '../context/Context'
import Word from './Word'
import Letters from './Letters'
import Restart from './Restart'

const Board = () => {

  const {pregunta, win, lose} = useContext(Context)

  return (
    <div className='board'>
      <h2>{pregunta?.pregunta}</h2>
      <Word />
      {!win && !lose && <Letters />}
      {(win || lose) && <Restart />}
    </div>
  )
}

export default Board
