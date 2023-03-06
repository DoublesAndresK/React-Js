import React from 'react'

const InvoiceList = ({ lists, increaseQuantity, decreaseQuantity }) => {
  return (
    <>
      {
        lists.length >0 && (
          <table className='table text-primary'>
        <thead>
          <tr>
            <th>Item</th>
            <th className='text-end'>Price</th>
            <th className='text-end'>Quantity</th>
            <th className='text-end'>Cost</th>
          </tr>
        </thead>
        <tbody>
          {lists.map(list=>(
            <tr key={list.id}>
              <td>{list.item.name}</td>  {/* why list.item.name */}
              <td className='text-end'>{list.item.price}</td>
              <td className='text-end'>
                <button className='btn btn-sm btn-outline-primary' onClick={()=>(decreaseQuantity(list.id))}>
                  <i className='bi bi-dash'></i>
                </button>
                <span className='d-inline-block w-25 b px-2' style={{width:"30px"}}>{list.quantity}</span>
                
                <button className='btn btn-sm btn-outline-primary' onClick={()=>(increaseQuantity(list.id))}>
                  <i className='bi bi-plus'></i>
                </button>
                </td>
              <td className='text-end'>{list.cost}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className='text-center fw-bold' colSpan={3}>Total</td>
            <td className='text-end'>
              {
                lists.reduce((pv,cv)=>pv+cv.cost,0)
              }</td>
          </tr>
        </tfoot>
      </table>
        )
      }
    </>
  )
}

export default InvoiceList