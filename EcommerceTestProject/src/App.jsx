import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Products from './components/Products';
import DataContext from './context/DataContext'

const App = () => {
  const {state}=useContext(DataContext);
  console.log(state);
  return (
    <div>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App