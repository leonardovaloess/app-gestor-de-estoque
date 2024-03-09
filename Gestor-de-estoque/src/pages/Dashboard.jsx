import { useState } from "react";
import DashboardContext from "../../contexts/DashboardContext";
import InStock from "../components - dashboard/InStock";
import { useEffect } from "react";
import axios from "axios";



export default function Dashboard() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      setProducts(response.data);
    } catch (error) {
      console.log("erro ao fazer a req GET: ", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log(products);
  return (
    <div className="dashboard-container">
      
      <DashboardContext.Provider value={{products, fetchProducts}}>
        <InStock />
        
      </DashboardContext.Provider>
    </div>
  );
}
