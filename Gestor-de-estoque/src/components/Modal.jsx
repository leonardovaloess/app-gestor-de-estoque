import { useContext, useState } from "react";
import ProductContext from "../../contexts/ProductContext";
import axios from "axios";

export default function Modal({ product }) {
  const { fetchProducts } = useContext(ProductContext);

  const [updateProduct, setUpdateProduct] = useState(product);

  const editProduct = async () => {
    console.log("Produto a ser editado:", updateProduct); // Imprime o estado do produto
    if (
      updateProduct.name === "" ||
      updateProduct.description === "" ||
      updateProduct.price === "" ||
      updateProduct.inStock === "" ||
      updateProduct.imageUrl === ""
    ) {
      alert("Preencha todos os campos");
    } else if (isNaN(updateProduct.price) || isNaN(updateProduct.inStock)) {
      alert("Preço ou estoque devem ser números");
    } else {
      try {
        await axios.put(
          `${import.meta.env.VITE_API_BASE_URL}/${updateProduct._id}`,
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
      id={`edit-modal-${product._id}`}
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
                value={updateProduct.name}
                onChange={(ev) => updateFormField("name", ev.target.value)}
              />
            </div>
            <div className="input-container modal-form-input">
              <label>Preço:</label>
              <input
                type="text"
                value={updateProduct.price}
                onChange={(ev) =>
                  updateFormField("price", parseFloat(ev.target.value))
                }
              />
            </div>
            <div className="input-container modal-form-input">
              <label>Estoque:</label>
              <input
                type="text"
                value={updateProduct.inStock}
                onChange={(ev) =>
                  updateFormField("inStock", parseFloat(ev.target.value))
                }
              />
            </div>
            <div className="input-container modal-form-input">
              <label>Url da imagem:</label>
              <input
                type="text"
                value={updateProduct.imageUrl}
                onChange={(ev) => updateFormField("imageUrl", ev.target.value)}
              />
            </div>
            <div className="input-container modal-form-input">
              <label>Description:</label>
              <textarea
                name="description"
                value={updateProduct.description}
                onChange={(ev) =>
                  updateFormField("description", ev.target.value)
                }
                rows={10}
              />
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
              onClick={editProduct}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
