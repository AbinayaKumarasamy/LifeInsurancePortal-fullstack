import React,{useState} from 'react'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Login from './components/User/Login'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Register from './components/User/Register'
import NavBar from './components/NavBar/NavBar'
import { UserProvider } from './context/UserContext';
import Display from './pages/Display'
import HomePage from './components/HomePage/HomePage'
import About from './components/About/About'
import Service from './components/ServicesPages/Service'
import TermLifeInsurance from './components/ServicesPages/TermLifeInsurance'
import WholeLifeInsurance from './components/ServicesPages/WholeLifeInsurance'
import UniversalLifeInsurance from './components/ServicesPages/UniversalLifeInsurance'
import HealthInsurance from './components/ServicesPages/HealthInsurance'
import GlobalCoverage from './components/ServicesPages/GlobalCoverage'
import InvestmentPlans from './components/ServicesPages/InvestmentPlans'
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
        <Route path='/Header' element={<Header />} />
        <Route path='/NavBar' element={<NavBar/>}/>
        <Route path='/Footer' element={<Footer />} />
        <Route path='/About' element={<About />} />
        <Route path='/Service' element={<Service />} />
        <Route path="/TermLifeInsurance" element={<TermLifeInsurance />} />
        <Route path="/WholeLifeInsurance" element={<WholeLifeInsurance />} />
        <Route path="/UniversalLifeInsurance" element={<UniversalLifeInsurance />} />
        <Route path="/HealthInsurance" element={<HealthInsurance />} />
        <Route path="/GlobalCoverage" element={<GlobalCoverage />} />
        <Route path="/InvestmentPlans" element={<InvestmentPlans />} />
      </Routes>
      </BrowserRouter>
      </UserProvider>
    </div>
  )
}

export default App