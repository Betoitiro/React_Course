import { useState } from 'react'
import './App.css'
import MyForm from './assets/components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Form: fazendo formulario</h1>
      <MyForm user={{name: "humberto", email: "Humberto@gmail"}}/>
    </>
  )
}

export default App
