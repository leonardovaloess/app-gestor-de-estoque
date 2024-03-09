import { useContext, useEffect, useState } from "react";
import DashboardContext from "../../contexts/DashboardContext";
import DashboardTable from "./DashboardTable";
import { array } from "prop-types";

export default function InStock() {
  const { products } = useContext(DashboardContext);
  const [activeTable, setActiveTable] = useState(null);

  const toggleTable = (tableName) => {
    // Se a tabela atual for clicada novamente, fecha-a
    if (activeTable === tableName) {
      setActiveTable(null);
    } else {
      setActiveTable(tableName);
    }
  };

  const hardwareProducts = products.filter(
    (product) => product.tipo === "hardware"
  );
  const perifericoProducts = products.filter(
    (product) => product.tipo === "periférico"
  );
  const acessoriosProducts = products.filter(
    (product) => product.tipo === "acessorios"
  );
  const esgotandoProducts = products.filter((product) => product.estoque < 10);
  const muitosProducts = products.filter((product) => product.estoque > 10);

  return (
    <div>
      <div className="instock-container">
        <div onClick={() => toggleTable("total")}>
          <p>Total em Estoque:</p>
          <p className="number-detail">{products.length}</p>
        </div>
        <div onClick={() => toggleTable("hardware")}>
          <p>Hardwares em Estoque:</p>
          <p className="number-detail">{hardwareProducts.length}</p>
        </div>
        <div onClick={() => toggleTable("acessorios")}>
          <p>Acessorios em Estoque:</p>
          <p className="number-detail">{acessoriosProducts.length}</p>
        </div>
        <div onClick={() => toggleTable("perifericos")}>
          <p>Periféricos em Estoque:</p>
          <p className="number-detail">{perifericoProducts.length}</p>
        </div>
        <div onClick={() => toggleTable("esgotando")}>
          <p>Produtos esgotando:</p>
          <p className="number-detail">{esgotandoProducts.length}</p>
        </div>
        <div onClick={() => toggleTable("muitos")}>
          <p>Produtos com grande quantidade:</p>
          <p className="number-detail">{muitosProducts.length}</p>
        </div>
      </div>

      <div className="table-container details-container">
        {activeTable === "total" ? (
          <DashboardTable array={products} />
        ) : activeTable === "hardware" ? (
          <DashboardTable array={hardwareProducts} />
        ) : activeTable === "acessorios" ? (
          <DashboardTable array={acessoriosProducts} />
        ) : activeTable === "perifericos" ? (
          <DashboardTable array={perifericoProducts} />
        ) : activeTable === "esgotando" ? (
          <DashboardTable array={esgotandoProducts} />
        ) : activeTable === "muitos" ? (
          <DashboardTable array={muitosProducts} />
        ) : null}
      </div>
    </div>
  );
}
