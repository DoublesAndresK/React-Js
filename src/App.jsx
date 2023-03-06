import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProducts from './components/AddProducts'
import Cart from './components/Cart'
import Dashboard from './components/Dashboard'
import Details from './components/Details'
import Edit from './components/Edit'
import Guard from './components/Guard'
import Login from './components/Login'
import Products from './components/Products'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/' element={
        <Guard>
            <Dashboard/>
        </Guard>
      } />
      <Route path='/products' element={
        <Guard>
            <Products/>
        </Guard>
      } />
      <Route path='/cart' element={
        <Guard>
            <Cart/>
        </Guard>
      } />
      <Route path='/addProducts' element={
        <Guard>
            <AddProducts/>
        </Guard>
      } />
      <Route path='/products/details/:id' element={
        <Guard>
            <Details/>
        </Guard>
      } />
       <Route path='/products/edit/:id' element={
        <Guard>
            <Edit/>
        </Guard>
      } />
    </Routes>
      
    </>
  )
}

export default App