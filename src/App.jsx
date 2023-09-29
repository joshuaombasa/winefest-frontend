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
import Login from './pages/Login'
import VendorSignup from './pages/VendorSignup'
import Error from './pages/Error'
import Wine from './pages/Wine'
import AuthRequired from './components/AuthRequired'

function App() {


  return (
    <>
      <Routes >
        <Route path='/' element={<MainLayout />}>
          <Route path='wines' element={<Home />}>
            <Route path=':id' element={<Wine />} />
          </Route>
          <Route element={<AuthRequired/>}>
            <Route path='addItem' element={<AddItem />} />
          </Route>
          <Route path='cart' element={<Cart />} />
          <Route path='login' element={<Login />} />
          <Route path='vendorSignUp' element={<VendorSignup />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
