import { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";
import DeleteButton from "./DeleteButton";
import Modal from "./Modal";


export default function Table() {
  const { products } = useContext(ProductContext);

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Preco</th>
          <th scope="col">Estoque</th>

          <th scope="col">Deletar</th>
          <th scope="col">Editar</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id}>
            <td>{product.name}</td>
            <td>R$ {product.price}</td>
            <td>{product.inStock}</td>

            <td>
              <DeleteButton id_to_delete={product._id} />
            </td>
            <td>
              <button
                data-bs-toggle="modal"
                className="icons-btn"
                data-bs-target={`#edit-modal-${product._id}`}
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
