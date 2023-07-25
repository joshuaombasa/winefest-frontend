import React from 'react'
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import './App.css'
import MainLayout from './components/MainLayout'
import AddItem from './pages/AddItem'
import Cart from './pages/Cart'
import Home from './pages/Home'

function App() {


  return (
    <>
      <Routes >
        <Route path='/' element={<MainLayout />}>
          <Route path='home' element={<Home/>}/>
          <Route path='addItem' element={<AddItem />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
