import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Card from "./Card";
import CartItems from "./CartItems";
import Layout from "./Layout";

const Products = () => {
  const [products, setProducts] = useState([]);
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const [cart, setCart] = useState(cartItems ? [...cartItems] : []);
  // console.log(cart);

  const addToCart = (product) => {
    setCart([...cart, product]);
    localStorage.setItem("cartItems", JSON.stringify([...cart, product]));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cart.filter((item) => item.id !== id))
    );
  };
  // console.log(cart);
  const deleteProduct = async (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn btn-success",
        cancelButton: "btn btn-danger me-2",
      },
      buttonsStyling: false,
    });

   

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            await axios.delete(`http://localhost:3500/products/${id}`)
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary data is safe :)",
            "error"
          );
        }
      });
    // console.log(data);
  };

  const fetchProduct = async () => {
    const { data } = await axios.get("http://localhost:3500/products");
    setProducts(data);
  };
  // console.log(products);

  useEffect(() => {
    fetchProduct();
  }, [products]);

  return (
    <Layout>
      <div className="flex flex-wrap gap-5 justify-center items-center mb-10">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            deleteProduct={deleteProduct}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Products;
