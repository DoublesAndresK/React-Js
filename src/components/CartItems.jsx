import React from "react";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai';

const CartItems = ({ item, increaseQuantity, decreaseQuantity }) => {
  return (
    <>
      <div className="card w-96 shadow-xl my-3 bg-white text-black">
        <div className="card-body">
          <div className="flex gap-3">
            <img src={item.image} className="w-20" alt="" />
            <div>
              <h1 className="mb-3">{item.title}</h1>
              <p>$ {item.price * item.quantity}</p>
              <div className="btn-group">
                <button className="btn"  onClick={()=>decreaseQuantity(item.id)}><AiOutlineMinusCircle/></button>
                <button className="btn">{item.quantity}</button>
                <button className="btn" onClick={()=>increaseQuantity(item.id)}><AiOutlinePlusCircle/></button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
