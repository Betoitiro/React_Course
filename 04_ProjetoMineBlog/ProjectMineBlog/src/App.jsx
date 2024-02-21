import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthenticaton'
import { AuthProvider } from './suaCaminhoCorreto/AuthProvider' // substitua pelo caminho correto do seu AuthProvider

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {
  const [user, setUser] = useState(undefined)
  const [auth] = useAuthentication()
  const [loadingUser, setLoadingUser] = useState(true) // Corrigido

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoadingUser(false) // Corrigido
    })

    return () => unsubscribe()
  }, [auth])

  if (loadingUser) {
    return <p>Carregando....</p>
  }

  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Register' element={<Register />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
