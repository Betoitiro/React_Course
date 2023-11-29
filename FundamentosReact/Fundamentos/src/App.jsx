//react
import { useState } from 'react'

//components
import FirstComponents from './components/FirstComponnent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'
import Challange from './components/Challenge'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div>
      <h1>
        hello
      </h1>
      <p>
        <FirstComponents/>
      </p>
      <p>
        <TemplateExpressions/>
      </p>
      <p>
        <Events/>
      </p>
      <p>
        <Challange/>
      </p>
    </div>
    </>
    
  )
  
}

export default App
