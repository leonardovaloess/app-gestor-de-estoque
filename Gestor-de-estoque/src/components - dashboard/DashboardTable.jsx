

export default function DashboardTable ({ array }){
    return (
        <table>
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Preco</th>
              <th scope="col">Estoque</th>
              <th scope="col">tipo</th>
            </tr>
          </thead>
          <tbody>
            {array.map((product) => (
              <tr key={product.id}>
                <td>{product.nome}</td>
                <td>R$ {product.preco}</td>
                <td>{product.estoque}</td>
                <td>{product.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
}