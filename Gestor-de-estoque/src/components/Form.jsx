import ProductContext from "../../contexts/ProductContext";
import { useContext, useState } from "react";
import axios from "axios";

export default function Form() {
  const { fetchProducts } = useContext(ProductContext);

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
    inStock: 0,
  });

  const updateFormField = (field, value) => {
    setProduct((currentProduct) => ({
      ...currentProduct,
      [field]: value,
    }));
  };

  const createProduct = async () => {
    console.log("Produto a ser criado:", product); // Imprime o estado do produto

    if (
      product.name === "" ||
      product.imageUrl === "" ||
      product.price === "" ||
      product.inStock === ""
    ) {
      alert("Preencha todos os campos");
    } else if (isNaN(product.price) || isNaN(product.inStock)) {
      alert("Preço ou estoque devem ser números");
    } else {
      try {
        await axios.post(import.meta.env.VITE_API_BASE_URL, product);
        fetchProducts();
        setProduct({
          name: "",
          price: 0,
          inStock: 0,
          imageUrl: "",
          description: "",
        });
      } catch (error) {
        console.log("erro ao criar produto: ", error);
      }
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    createProduct();
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-container">
        <label>Nome do produto:</label>
        <input
          type="text"
          value={product.name}
          onChange={(ev) => updateFormField("name", ev.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Preço:</label>
        <input
          type="text"
          value={product.price}
          onChange={(ev) =>
            updateFormField("price", parseFloat(ev.target.value))
          }
        />
      </div>
      <div className="input-container">
        <label>Estoque:</label>
        <input
          type="text"
          value={product.inStock}
          onChange={(ev) =>
            updateFormField("inStock", parseFloat(ev.target.value))
          }
        />
      </div>
      <div className="input-container">
        <label>Url da imagem:</label>
        <input
          type="text"
          value={product.imageUrl}
          onChange={(ev) => updateFormField("imageUrl", ev.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Descrição:</label>
        <textarea
          name="description"
          value={product.description}
          onChange={(ev) => updateFormField("description", ev.target.value)}
          rows={4}
          cols={40}
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}
