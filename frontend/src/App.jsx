import { React } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Order from './pages/Order'

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/order' element={<Order />}/>
        

      </Routes>
    </>
  )
}

export default App