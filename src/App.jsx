import React,{useState} from 'react'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Register from './components/Register'
import { UserProvider } from './context/UserContext';
import Display from './pages/Display'
import HomePage from './components/HomePage'
import About from './components/About'
function App() {
  return (
    <div>
      <UserProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Display' element={<Display/>}/>
        <Route path='/HomePage' element={<HomePage/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/NavBar' element={<NavBar />} />
        <Route path='/Footer' element={<Footer />} />
        <Route path='/About' element={<About />} />
      </Routes>
      </BrowserRouter>
      </UserProvider>
    </div>
  )
}

export default App