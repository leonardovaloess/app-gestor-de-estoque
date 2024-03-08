import ProductContext from "../../contexts/ProductContext";
import { useContext, useState } from "react";
import axios from "axios";

export default function Form() {
  const { fetchProducts } = useContext(ProductContext);

  const [product, setProduct] = useState({
    nome: "",
    preco: "",
    estoque: "",
    tipo: "",
  });
  // Criando produto

  const updateFormField = (field, value) => {
    setProduct((currentProduct) => ({
      ...currentProduct,
      [field]: value,
    }));
  };

  const createProduct = async () => {
    // OBJETO DO PRODUTO
    if (
      product.nome === "" ||
      product.tipo === "" ||
      product.preco === "" ||
      product.estoque === ""
    ) {
      alert("Preencha todos os campos");
    } else if (isNaN(product.preco) || isNaN(product.estoque)) {
      alert("Preço ou estoque devem ser números");
    } else {
      try {
        await axios.post("http://localhost:3000/products", product);
        fetchProducts();
        setProduct({ nome: "", preco: "", estoque: "", tipo: "" });
      } catch (error) {
        console.log("erro ao criar produto: ", error);
      }
    }
    console.log(product);
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
          value={product.nome}
          onChange={(ev) => updateFormField("nome", ev.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Preço:</label>
        <input
          type="text"
          value={product.preco}
          onChange={(ev) => updateFormField("preco", ev.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Estoque:</label>
        <input
          type="text"
          value={product.estoque}
          onChange={(ev) => updateFormField("estoque", ev.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Tipo:</label>
        <select
          name="categoria"
          value={product.tipo}
          onChange={(ev) => updateFormField("tipo", ev.target.value)}
        >
          <option value="">Selecione...</option>
          <option value="periférico">periférico</option>
          <option value="acessorios">acessorios</option>
          <option value="hardware">hardware</option>
        </select>
      </div>

      <button>Enviar</button>
    </form>
  );
}
