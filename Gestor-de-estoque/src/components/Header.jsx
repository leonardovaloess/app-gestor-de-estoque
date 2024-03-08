import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>Gerenciador de estoque</h1>
      <div className="links">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p>Informações</p>
        </Link>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <p>Produtos</p>
        </Link>
      </div>
    </div>
  );
}
