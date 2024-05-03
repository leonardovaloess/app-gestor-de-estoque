import { useContext, useEffect, useState } from "react";
import DashboardContext from "../../contexts/DashboardContext";
import DashboardTable from "./DashboardTable";

export default function InStock() {
  const { products } = useContext(DashboardContext);
  const [activeTable, setActiveTable] = useState(null);

  const toggleTable = (tableName) => {
    // Se a tabela atual for clicada novamente, fecha-a
    setActiveTable(activeTable === tableName ? null : tableName);
  };

  const iphones = products.filter((product) =>
    product.name && product.name.toLowerCase().includes("iphone")
  );
  const macs = products.filter((product) =>
    product.name && product.name.toLowerCase().includes("mac")
  );
  const watches = products.filter((product) =>
    product.name && product.name.toLowerCase().includes("watch")
  );
  const ipads = products.filter((product) =>
    product.name && product.name.toLowerCase().includes("ipad")
  );

  const esgotandoProducts = products.filter((product) => product.inStock < 10);
  const muitosProducts = products.filter((product) => product.inStock > 10);

  return (
    <div>
      <div className="instock-container">
        <div onClick={() => toggleTable("total")}>
          <p>Total em Estoque:</p>
          <p className="number-detail">{products.length}</p>
        </div>
        <div onClick={() => toggleTable("iphones")}>
          <p>Iphones em Estoque:</p>
          <p className="number-detail">{iphones.length}</p>
        </div>
        <div onClick={() => toggleTable("macs")}>
          <p>Mac/macbooks em Estoque:</p>
          <p className="number-detail">{macs.length}</p>
        </div>
        <div onClick={() => toggleTable("watches")}>
          <p>Watches em Estoque:</p>
          <p className="number-detail">{watches.length}</p>
        </div>
        <div onClick={() => toggleTable("ipads")}>
          <p>Ipads em Estoque:</p>
          <p className="number-detail">{ipads.length}</p>
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
        {activeTable === "total" && <DashboardTable array={products} />}
        {activeTable === "iphones" && <DashboardTable array={iphones} />}
        {activeTable === "macs" && <DashboardTable array={macs} />}
        {activeTable === "esgotando" && <DashboardTable array={esgotandoProducts} />}
        {activeTable === "muitos" && <DashboardTable array={muitosProducts} />}
        {activeTable === "watches" && <DashboardTable array={watches} />}
        {activeTable === "ipads" && <DashboardTable array={ipads} />}
      </div>
    </div>
  );
}
