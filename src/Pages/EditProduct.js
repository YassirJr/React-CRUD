import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EditProducts() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("initState");
  let { productID } = useParams();
  let [products, setProducts] = useState(0);
  let navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:9000/products/${productID}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:9000/products/${productID}`, {
        title,
        price,
        category,
      })
      .then(() => navigate("/products"));
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
            placeholder={"Title ?"}
            onChange={(e) => setTitle(e.target.value)}
            defaultValue={products.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            placeholder={"Price"}
            onChange={(e) => setPrice(e.target.value)}
            defaultValue={products.price}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={"Category"}
            onChange={(e) => setCategory(e.target.value)}
            defaultValue={products.category}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}

export default EditProducts;
