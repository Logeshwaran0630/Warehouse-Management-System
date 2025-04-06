import React, { useEffect, useState } from "react";
import { fetchData } from "../services/api";
import "./WarehouseList.css";

function WarehouseList() {
  const [warehouses, setWarehouses] = useState([]);
  const [search, setSearch] = useState(""); // Search query

  useEffect(() => {
    fetchData().then(setWarehouses).catch(console.error);
  }, []);

  const filteredWarehouses = warehouses.filter((warehouse) =>
    warehouse.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="warehouse-container">
      <h2>Warehouse Inventory</h2>
      <input
        type="text"
        placeholder="Search warehouse..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      {filteredWarehouses.length > 0 ? (
        <table className="warehouse-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {filteredWarehouses.map((warehouse) => (
              <tr key={warehouse.id}>
                <td>{warehouse.id}</td>
                <td>{warehouse.name}</td>
                <td>{warehouse.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default WarehouseList;
