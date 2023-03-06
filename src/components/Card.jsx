import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { FaExclamation } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

const Card = ({ product, deleteProduct, addToCart, removeFromCart }) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  return (
    <>
      <div className="card w-96 bg-white shadow-xl text-zinc-600">
        <Link to={`/products/details/${product?.id}`}>
          <div className="flex justify-end mr-5 mt-4">
            <button>
              <FaExclamation />
            </button>
          </div>
        </Link>
        <div className="card-body">
          <img
            src={product?.image}
            alt=""
            className=" h-20 w-24 mx-auto rounded"
          />
          <h2 className="card-title truncate">{product?.title}</h2>
          <p className="truncate">{product?.description}</p>
          <p className="truncate text-xl mt-1">${product?.price}</p>
          <div className="card-actions justify-end">
            {cartItems?.find((item) => item.id == product.id) ? (
              <button
                onClick={() => removeFromCart(product?.id)}
                className="btn btn-sm btn-accent"
              >
                <MdOutlineRemoveShoppingCart />
              </button>
            ) : (
              <button
                onClick={() => addToCart({ ...product, quantity: 1 })}
                className="btn btn-sm btn-secondary"
              >
                <AiOutlineShoppingCart />
              </button>
            )}

            <button
              className="btn btn-error btn-sm text-white"
              onClick={() => deleteProduct(product.id)}
            >
              <RiDeleteBin5Line />
            </button>
            <NavLink to={`/products/edit/${product.id}`}>
              <button className="btn btn-success btn-sm text-white">
                <FiEdit />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
