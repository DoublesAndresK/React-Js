import React, {useState} from 'react'
import InvoiceForm from './InvoiceForm'
import InvoiceList from './InvoiceList'

const Invoice = () => {
   const [items,setItems]=useState([
    {
      id:1,
      name:"apple",
      price:"500"
    },
    {
      id:2,
      name:"orange",
      price:"600"
    },
    {
      id:3,
      name:"mango",
      price:"1500"
    }
   ]);
// -----------------------------------
const [lists, setList]=useState([]);   //what is in the list?

// const addList=(itemID,quantity)=>{
//   const currentItem =items.find(item=>item.id ==itemID);
//   const newList={
//     id:Date.now(),
//     item:currentItem,
//     quantity,
//     cost: currentItem.price *quantity
//   };
//   setList([...list,newList]);
// }

function addList(itemID, quantity){
  const currentItem =items.find(item=>item.id ==itemID);
 const isExitinList= lists.find(list=>list.item.id=== currentItem.id); //find the new array to check if there's an existing value

 if(isExitinList){
   setList(lists.map(list=>{
    if(list.item.id === currentItem.id){
      list.quantity += quantity;
      list.cost = currentItem.price * list.quantity;
    }
    return list;
   }))
}else{
  const newList={
    id:Date.now(),
    item: currentItem,
    quantity,
    cost:currentItem.price*quantity,
  };
  setList([...lists,newList]);
}
}
console.log(lists);

// -------------increase/decrease------------
function increaseQuantity(id){  
  setList(lists.map(list=>{
    if(list.id===pid){
      list.quantity +=1;
      list.cost= list.item.price *list.quantity;
    }
   
    return list;
  }))
  
  // console.log(id);
}

function decreaseQuantity(id){  
  setList(lists.map(list=>{
    if(list.id===id && list.quantity>1){
      list.quantity -=1;
      list.cost= list.item.price *list.quantity;
    }
    return list;
  }))
  
  // console.log(id);
}

  return (
    <>
    <div className=''>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h3 className='mt-5 mb-3'>Invoice App</h3>
                    <InvoiceForm items={items} addList={addList} />
                    <InvoiceList lists={lists} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
                </div>
            </div>
        </div>
    
    </div>
    </>
  )
}

export default Invoice