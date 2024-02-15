import './App.css'
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'

//pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
       <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
