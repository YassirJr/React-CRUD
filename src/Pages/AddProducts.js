import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddProducts() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("initState");
  let navigate = useNavigate();
  const formSubmit = (e) => {
    e.preventDefault();
    // axios
    //   .post("http://localhost:9000/products", {
    //     title,
    //     price,
    //     category,
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     navigate("/products");
    //   });
    fetch("http://localhost:9000/products", {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify({ title, price, category }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/products");
      });
  };
  return (
    <>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={"Title"}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={"Price"}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={"Category"}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}

export default AddProducts;
