import { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";
import axios from "axios";
import PropTypes from "prop-types";

DeleteButton.propTypes = {
  id_to_delete: PropTypes.any
};

export default function DeleteButton({ id_to_delete }) {
  const { fetchProducts } = useContext(ProductContext);
  
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/${id}`);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return <button className="icons-btn deletebtn" onClick={() => deleteProduct(id_to_delete)}><i className="bi bi-trash3-fill"></i></button>
    
  
}