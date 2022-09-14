import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllData();
  }, []);
  const getAllData = () => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const deleteProducts = (product) => {
    Swal.fire({
      title: `Are you Sure To Delete ${product.title}`,
      showCancelButton: true,
    }).then((response) => {
      if (response.isConfirmed) {
        fetch(`http://localhost:9000/products/${product.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => getAllData());
      }
    });
  };

  return (
    <>
      <h1 className={"mb-3"}>Product Page</h1>
      <Link to={"/products/add"} className={"btn btn-primary "}>
        Add Product
      </Link>
      <table className="table table-striped text-center mt-5 table-bordered">
        <thead>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">Price</th>
          <th scope="col">Categorie</th>
          <th scope="col">Operations</th>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <Link
                    to={`/products/edit/${product.id}`}
                    className={"btn btn-secondary btn-sm me-1"}
                  >
                    Edit
                  </Link>
                  <button
                    className={"btn btn-danger btn-sm me-1"}
                    onClick={() => {
                      deleteProducts(product);
                    }}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/products/${product.id}`}
                    className={"btn btn-success btn-sm me-1"}
                  >
                    Details
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Products;
