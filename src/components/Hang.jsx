import React, { useContext } from 'react'
import Context from '../context/Context'

const Hang = () => {

  const {wrongs, win, lose} = useContext(Context)

  return (
    <div className='hang'>
      <img src={`./el_ahorcado${Math.min(wrongs.length + 1, 6)}.png`} alt="" />
      {win && <span className='right msg'>GANASTE!</span>}
      {lose && <span className='wrong msg'>PERDISTE!</span>}
    </div>
  )
}

export default Hang
