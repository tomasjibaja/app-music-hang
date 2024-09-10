import React, { useContext } from 'react'
import Context from '../context/Context'
import { Routes, Route, Navigate } from 'react-router-dom'
import Game from '../components/Game'
import End from '../components/End'

const Router = () => {
  const {gameOver} = useContext(Context)
  return (
    <Routes>
      <Route path='/' element={ <Game /> } />
      <Route path='/end' element={ gameOver ? <End /> : <Navigate to={'/'} /> } />
    </Routes>
  )
}

export default Router
