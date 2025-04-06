import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Inventory.css";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    sku: "",
    quantity: "",
    price: "",
    reorderLevel: "",
  });

  // ✅ Fetch only the logged-in user's products
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/products", { withCredentials: true });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  

  useEffect(() => {
    fetchProducts(); // Load user's products on page load
  }, []);

  // ✅ Handle input change
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // ✅ Handle product submission for the logged-in user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/products", product, { withCredentials: true });
      alert("Product added successfully!");
      setProduct({ name: "", sku: "", quantity: "", price: "", reorderLevel: "" });
      fetchProducts(); // Refresh product list
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="inventory">
      <h1>Inventory Management</h1>

      {/* ✅ Product Form */}
      <div className="inventory-form">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required />
          <input type="text" name="sku" placeholder="SKU" value={product.sku} onChange={handleChange} required />
          <input type="number" name="quantity" placeholder="Quantity" value={product.quantity} onChange={handleChange} required />
          <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
          <input type="number" name="reorderLevel" placeholder="Reorder Level" value={product.reorderLevel} onChange={handleChange} required />
          <button type="submit">Add Product</button>
        </form>
      </div>

      {/* ✅ Product List */}
      <div className="inventory-list">
        <h2>Warehouse Stock</h2>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>SKU</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Reorder Level</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.sku}</td>
                <td>{product.quantity}</td>
                <td>${product.price}</td>
                <td>{product.reorderLevel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
