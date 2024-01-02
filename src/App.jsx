import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import HomePage from './pages/home/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header>
    </Header>
     <Container className='my-2'>
      <HomePage></HomePage>
    </Container>
    </>
  )
}

export default App
