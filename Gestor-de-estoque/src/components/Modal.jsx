import { useContext, useState } from "react";
import ProductContext from "../../contexts/ProductContext";
import axios from "axios";

export default function Modal({ product }) {
  const { fetchProducts } = useContext(ProductContext);

  const [updateProduct, setUpdateProduct] = useState(product);

  const editProduct = async () => {
    if (
      updateProduct.nome === "" ||
      updateProduct.tipo === "" ||
      updateProduct.preco === "" ||
      updateProduct.estoque === ""
    ) {
      alert("Preencha todos os campos");
    } else if (isNaN(updateProduct.preco) || isNaN(updateProduct.estoque)) {
      alert("Preço ou estoque devem ser números");
    } else {
      try {
        await axios.put(
          `http://localhost:3000/products/${updateProduct.id}`,
          updateProduct
        );
        fetchProducts();
      } catch (error) {
        console.log("erro ao editar produto: ", error);
      }
    }
  };

  const updateFormField = (field, value) => {
    setUpdateProduct((currentProduct) => ({
      ...currentProduct,
      [field]: value,
    }));
  };
  return (
    <div
      className="modal fade modalEdit"
      id={`edit-modal-${product.id}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-edit-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Editar
            </h1>
            
          </div>
          <div className="modal-body modal-form-container">
            <div className="input-container modal-form-input ">
              <label>Nome:</label>
              <input
                type="text"
                value={updateProduct.nome}
                onChange={(ev) => updateFormField("nome", ev.target.value)}
              />
            </div>
            <div className="input-container modal-form-input">
              <label>Preço:</label>
              <input
                type="text"
                value={updateProduct.preco}
                onChange={(ev) => updateFormField("preco", ev.target.value)}
              />
            </div>
            <div className="input-container modal-form-input">
              <label>Estoque:</label>
              <input
                type="text"
                value={updateProduct.estoque}
                onChange={(ev) => updateFormField("estoque", ev.target.value)}
              />
            </div>
            <div className="input-container modal-form-input">
              <label>Tipo:</label>
              <select
                name="categoria"
                value={updateProduct.tipo}
                onChange={(ev) => updateFormField("tipo", ev.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="periférico">periférico</option>
                <option value="acessorios">acessorios</option>
                <option value="hardware">hardware</option>
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => editProduct(product.id)}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
