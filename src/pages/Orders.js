import React, { useState } from "react";
import "./Orders.css";

function Orders() {
  // Sample Extended Order Data
  const [orders, setOrders] = useState([
    { id: 101, customer: "John Doe", status: "Pending", amount: "$250" },
    { id: 102, customer: "Alice Smith", status: "Shipped", amount: "$150" },
    { id: 103, customer: "Michael Brown", status: "Delivered", amount: "$300" },
    { id: 104, customer: "Sophia Wilson", status: "Cancelled", amount: "$100" },
    { id: 105, customer: "David Johnson", status: "Shipped", amount: "$450" },
    { id: 106, customer: "Emma Williams", status: "Pending", amount: "$600" },
    { id: 107, customer: "James Anderson", status: "Delivered", amount: "$120" },
    { id: 108, customer: "Olivia Martinez", status: "Pending", amount: "$320" },
    { id: 109, customer: "Liam Taylor", status: "Shipped", amount: "$410" },
    { id: 110, customer: "Isabella Thomas", status: "Delivered", amount: "$275" },
    { id: 111, customer: "Ethan White", status: "Pending", amount: "$350" },
    { id: 112, customer: "Charlotte Harris", status: "Cancelled", amount: "$90" },
  ]);

  const [filterStatus, setFilterStatus] = useState("All");

  // Function to update order status
  const updateStatus = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  // Function to filter orders based on status
  const filteredOrders =
    filterStatus === "All"
      ? orders
      : orders.filter((order) => order.status === filterStatus);

  return (
    <div className="orders-container">
      <h2>📦 Orders Management</h2>

      {/* Filter Dropdown */}
      <div className="filter-container">
        <label>Filter by Status: </label>
        <select
          className="filter-dropdown"
          onChange={(e) => setFilterStatus(e.target.value)}
          value={filterStatus}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {/* Orders Table */}
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
              <td>{order.amount}</td>
              <td>
                <select
                  className="status-dropdown"
                  onChange={(e) => updateStatus(order.id, e.target.value)}
                  value={order.status}
                >
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
