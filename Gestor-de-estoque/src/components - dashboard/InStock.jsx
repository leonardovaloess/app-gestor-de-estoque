import { useContext, useEffect, useState } from "react";
import DashboardContext from "../../contexts/DashboardContext";

// PRODUTOS EM ESTOQUE, POR DIVISÕES
export default function InStock() {
  const { products } = useContext(DashboardContext);
  const hardwareProdcuts = products.filter(
    (product) => product.tipo === "hardware"
  );
  const perifericoProdcuts = products.filter(
    (product) => product.tipo === "periférico"
  );
  const acessoriosProducts = products.filter(
    (product) => product.tipo === "acessorios"
  );

  return (
    <div className="instock-container">
      <div>
        <p>Total em Estoque:{products.length}</p>
      </div>
      <div>
        <p>Hardwares em Estoque:{hardwareProdcuts.length}</p>
      </div>
      <div>
        <p>Acessorios em Estoque:{acessoriosProducts.length}</p>
      </div>
      <div>
        <p>Periféricos em Estoque:{perifericoProdcuts.length}</p>
      </div>
    </div>
  );
}
