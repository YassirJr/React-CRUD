import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Categorie from "./components/Categorie";
import AddProducts from "./Pages/AddProducts";
import ProductsDetails from "./Pages/ProductsDetails";
import EditProduct from "./Pages/EditProduct";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container row">
        <div className="col-3 bg-color sidebar">
          <Sidebar />
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="categorie" element={<Categorie />} />
            <Route path="products" element={<Products />} />
            <Route path="about" element={<About />} />
            <Route path="/products/add" element={<AddProducts />} />
            <Route path="/products/edit/:productID" element={<EditProduct />} />
            <Route path="/products/:productID" element={<ProductsDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
