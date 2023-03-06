import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "./Layout";

const Details = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const getProductDetails = async () => {
    const { data } = await axios.get(`http://localhost:3500/products/${id}`);
    console.log(data);
    setProduct(data);
  };

  useEffect(()=>{
    getProductDetails();
  },[])
  return (
    <Layout>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={product.image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{product.title}</h1>
            <p className="py-6">
             {product.description}
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
