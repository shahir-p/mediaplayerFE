
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import History from './pages/History'
import Home from './pages/Home'
import Landingpage from './pages/Landingpage'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/history' element={ <History/>}/>    
    </Routes>
    <Footer/>
    </>
  )
}

export default App
