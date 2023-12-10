import './App.css';
import CM from './components/CM';
import MyComponents from './components/MyComponents';

import {useState} from 'react';

function App() {
  const n = 15;
  const [name] = useState("humberto")

  const redTitle = true;
  return (
    <div className="App">
      {/**css global */}
      <h1>react com css</h1>
      <p>
        Esse paragrafo é para o app.js
      </p>
      {/**css de components */}
      <MyComponents/>
      {/**
       * inline CSS
      */}
      {/**
       * 
       * inline seria bom de ser evitado!! 
       * Devido ao atraso, é recomendavel usar uma regra padronizada
       * 
       */}
      <p style={{color: "blue", padding: "25px"}}>
        Esse paragrafo é dedicado ao inline CSS
      </p>

      {/**CSS inline dinamic */}
      {/**
       * o if ternario corresponde a criação de um atributo, e a seguinte estrutura:
       *  n>10 ? ({acao caso o n seja maior que 10}) :({uma acao caso o n seja menor que 10})
       */}
      <h1 style={n >10 ? ({color: "purple"}):({color: "pink"})}>
        CSS DINAMICO
      </h1>
      <h1 style={name==="humberto" ? ({color: "gren"}):({color: "black"})}>CSS DINAMICO</h1>

       {/**CLasse dinamic */}
       <h2 className={redTitle ? "red-title" : "title"}> Class dinamic</h2>

       {/**CSS modules */}
       <CM/>
       
    </div>
  );
}

export default App;
