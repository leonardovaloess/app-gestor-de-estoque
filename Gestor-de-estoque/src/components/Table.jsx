import { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";
import DeleteButton from "./DeleteButton";
import Modal from "./Modal";
import { Link } from "react-router-dom";

export default function Table() {
  const { products } = useContext(ProductContext);

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Preco</th>
          <th scope="col">Estoque</th>
          <th scope="col">tipo</th>
          <th scope="col">Deletar</th>
          <th scope="col">Editar</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.nome}</td>
            <td>R$ {product.preco}</td>
            <td>{product.estoque}</td>
            <td>{product.tipo}</td>
            <td>
              <DeleteButton id_to_delete={product.id} />
            </td>
            <td>
              <button
                data-bs-toggle="modal"
                className="icons-btn"
                data-bs-target={`#edit-modal-${product.id}`}
              >
                <i className="bi bi-pencil-square"></i>
              </button>
              <Modal product={product} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
