import React, { useContext } from "react";

const Card = ({ product }) => {
  return (
    <div className="border rounded-md mb-2 p-4 w-72">
      <img src={product.image} alt="" className="w-44 h-44" />
      <h2 className=" truncate">{product.title}</h2>
      <p>$ {product.price}</p>
      <div className="flex">
        <button className="btn bg-indigo-600 py-3 px-5 rounded mr-3">
          Add to Cart
        </button>
        <button className="btn bg-teal-600 py-3 px-5 rounded">Details</button>
      </div>
    </div>
  );
};

export default Card;
