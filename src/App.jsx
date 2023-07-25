import React from 'react'
import { 
         Routes, 
         Route,
         createBrowserRouter,
         createRoutesFromElements
        } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import AddItem from './pages/AddItem'
import Cart from './pages/Cart'

function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/addItem' element={<AddItem/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
    </>
  )
}

export default App
