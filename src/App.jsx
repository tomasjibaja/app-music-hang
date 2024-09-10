import Router from './router/Router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Provider from './context/Provider'

function App() {

  return (
    <BrowserRouter>
      <Provider>
        <Router />
      </Provider>
    </BrowserRouter>
  )
}

export default App
