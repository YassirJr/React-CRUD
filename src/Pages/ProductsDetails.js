import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";

function ProductsDetails() {
  let { productID } = useParams();
  let [productsDetails, setProductsDetails] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:9000/products/${productID}`)
      .then((res) => res.json())
      .then((data) => setProductsDetails(data));
  }, []);
  return (
    <>
      <h1 className={"text-primary"}>{productsDetails.title}</h1>
      <table
        className={
          "table table-striped table-active table-bordered text-center"
        }
      >
        <thead>
          <th>id</th>
          <th>title</th>
          <th>category</th>
          <th>price</th>
          <th>description</th>
          <th>image</th>
        </thead>
        <tbody>
          <tr>
            <th>{productsDetails.id}</th>
            <td>{productsDetails.title}</td>
            <td>{productsDetails.category}</td>
            <td>{productsDetails.price}$</td>
            <td>{productsDetails.description}</td>
            <td>
              <img
                src={productsDetails.image}
                alt="photo"
                height={"30px"}
                width={"30px"}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ProductsDetails;
