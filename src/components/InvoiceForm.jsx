import React, { useRef } from 'react'

const InvoiceForm = ({items, addList}) => {
  const formRef= useRef();
  const handleSubmit=(event)=>{  //preventing from loading the webpage
    event.preventDefault();      //preventing from loading the webpage
    // console.log(formRef.current);
    const formdata = new FormData(formRef.current);
    // console.log(formdata.get("item_id"));
    // console.log(formdata.get("quantity"));
    addList(formdata.get("item_id"), parseInt(formdata.get("quantity")));
    formRef.current.reset(); 
 
  };
  return (
    <>
    <form action="" id="create" ref={formRef} onSubmit={handleSubmit}></form>
    <div className='row border rounded p-3 g-3 m-2'>
        <div className='col-12 col-md-4'>
            <label htmlFor="" className='form-label'>Select Item</label>
            <select name="item_id" id="" form='create' className='form-select'>
                {
                  items.map((item)=>(<option key={item.id} value={item.id}>{item.name}</option>))
                }
            </select>
        </div>
        <div className='col-12 col-md-4'>
            <label htmlFor="" className='form-label'>Quantity</label>
            <input type="number" name='quantity' form='create' className='form-control' required/>
        </div>
        <div className='col-12 col-md-4'>
             <button form='create' className='btn btn-primary btn-lg w-100 h-100'>Add Item</button>
        </div>
    </div>
    </>
  )
}

export default InvoiceForm