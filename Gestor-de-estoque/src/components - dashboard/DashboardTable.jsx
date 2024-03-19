export default function DashboardTable({ array }) {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Preco</th>
          <th scope="col">Estoque</th>
        </tr>
      </thead>
      <tbody>
        {array.map((product) => (
          <tr key={product._id}>
            <td>{product.name}</td>
            <td>R$ {product.price}</td>
            <td>{product.inStock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
