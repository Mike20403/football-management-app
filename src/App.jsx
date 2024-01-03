import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import MainRoutes from './routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <MainRoutes />
      </Router>
    </>
  )
}

export default App
