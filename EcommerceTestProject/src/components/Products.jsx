import React, { useContext } from 'react'
import DataContext from '../context/DataContext';
import Card from './Card';


const Products = () => {
  const {state:{products}}=useContext(DataContext);
  return (
    <>
      <div className='flex flex-wrap gap-5 mt-20'>
        {
          products.map((product)=>
          <Card key={product.id} product={product}/>
          )
        }
      </div>
    </>
  )
}

export default Products