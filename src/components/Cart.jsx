import React, { useState } from "react";
import CartItems from "./CartItems";
import Layout from "./Layout";

const Cart = () => {

  const increaseQuantity = (id) => {
    setCart(
      cart?.map((cartItem) => {
        if (cartItem.id === id) {
          cartItem.quantity += 1;
        }
        return cartItem;
      })
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart?.map((cartItem) => {
        if (cartItem.id === id && cartItem.quantity > 1) {
          cartItem.quantity -= 1;
        }
        return cartItem;
      })
    );
  };

  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const [cart, setCart]=useState(cartItems);
  const totalPrice = cart?.reduce((p,c)=>p+c.price * c.quantity, 0);
  return (
    <Layout>
      <div className="flex">
        <div>
          {cart?.map((item) => (
            <div key={item.id}>
              <CartItems item={item} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
            </div>
          ))}
        </div>
        <div>
          <h1 className=" text-xl text-yellow-400">Total Price - ${totalPrice}</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
