import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "./Layout";

const Edit = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate();

  const { id } = useParams();
  const getProducts = async () => {
    const { data } = await axios.get(`http://localhost:3500/products/${id}`);
    setTitle(data?.title);
    setPrice(data?.price);
    setDescription(data?.description);
    setImage(data?.image);
    setCategory(data?.category);
  };
  useEffect(() => {
    getProducts();
  }, []);

    const submitHandler=async(e)=>{
        e.preventDefault();
        const productData = {title, price, description, image, category};
        await axios.patch(`http://localhost:3500/products/${id}`, productData);
        // console.log(productData);
        navigate('/products');
    }  

  return (
    <>
      <Layout>
        <form action="" id="create" onSubmit={submitHandler}/>
        <div className="mx-auto">
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Update info of the Product!</h1>
                <p className="py-6">
                  Hello from Product Updating Page! You can change the new
                  information that changed according to your business plan.
                  Thank you!
                </p>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Title</span>
                    </label>
                    <input
                      form="create"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      placeholder="title"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      form="create"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      type="number"
                      placeholder="price"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <input
                      form="create"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      type="text"
                      placeholder="Description"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Category</span>
                    </label>
                    <input
                      form="create"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      type="text"
                      placeholder="Category"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Image</span>
                    </label>
                    <input
                      form="create"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      type="text"
                      placeholder="image url"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <div className="flex gap-5">
                      <Link>
                        <button className="btn btn-error text-white">
                          Cancel
                        </button>
                      </Link>
                      <button
                        form="create"
                        type="submit"
                        className="btn btn-success text-white"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Edit;
