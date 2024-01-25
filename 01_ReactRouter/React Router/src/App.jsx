// 1-> Config react router
import { BrowserRouter, Routes, Route } from "react-router-dom"

//pages
import Home from './pages/Home';
import About from "./pages/about";

//components
import Navbar from './Components/Navbar'
function App() {

  return (
    <>
      <div className="App">

        {/**
         * 
         * Parte que vai ser apresentada em todo component (todas as talas)
         * 
          * */}
        <h1>React Router</h1>

        <BrowserRouter>
        {/*Como o Navbar possui elementos do react router, ela vai ficar dentro do Browser*/}
          <Navbar/>
          
          <Routes>
            {/** o conteudo que fica dentro de Routes é oq sempre vai mudar, ou seja os componentes da aplicação*/}
            <Route path="/" element={<Home/>}/> 
            <Route path="/about" element={<About/>}/> 

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
