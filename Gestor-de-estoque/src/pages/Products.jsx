import ProductContext from "../../contexts/ProductContext";
import axios from "axios";
import { useEffect, useState } from "react";
import Form from "../components/Form";
import Table from "../components/Table";

export default function Products() {
  // STATES
  const [products, setProducts] = useState([]);

  
  const fetchProducts = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_BASE_URL);
      setProducts(response.data);
    } catch (error) {
      console.log("erro ao fazer a req GET: ", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      <h2>Produtos</h2>
      <ProductContext.Provider
        value={{
          products,
          setProducts,
          fetchProducts,
        }}
      >
        <Form />
        <div className="table-container">
          <Table />
        </div>
      </ProductContext.Provider>
    </div>
  );
}
