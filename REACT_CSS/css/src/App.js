import logo from './logo.svg';
import './App.css';
import MyComponents from './components/MyComponents';

function App() {
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
    </div>
  );
}

export default App;
