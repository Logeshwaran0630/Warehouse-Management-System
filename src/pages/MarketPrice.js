import React, { useState, useEffect } from "react";
import "./MarketPriceTracking.css";

function MarketPriceTracking() {
  const [products, setProducts] = useState([
    { id: 1, name: "Wireless Mouse", warehousePrice: 15, marketPrice: 18 },
    { id: 2, name: "Gaming Keyboard", warehousePrice: 50, marketPrice: 55 },
    { id: 3, name: "Laptop Stand", warehousePrice: 25, marketPrice: 22 },
    { id: 4, name: "Smartphone", warehousePrice: 300, marketPrice: 320 },
    { id: 5, name: "Headphones", warehousePrice: 80, marketPrice: 85 },
    { id: 6, name: "Monitor", warehousePrice: 200, marketPrice: 220 },
    { id: 7, name: "USB Hub", warehousePrice: 30, marketPrice: 35 },
    { id: 8, name: "External Hard Drive", warehousePrice: 100, marketPrice: 105 },
    { id: 9, name: "Mechanical Keyboard", warehousePrice: 75, marketPrice: 80 },
    { id: 10, name: "Graphics Card", warehousePrice: 500, marketPrice: 520 },
    { id: 11, name: "Power Bank", warehousePrice: 40, marketPrice: 42 },
    { id: 12, name: "Smart Watch", warehousePrice: 120, marketPrice: 125 },
    { id: 13, name: "Tablet", warehousePrice: 250, marketPrice: 260 },
    { id: 14, name: "VR Headset", warehousePrice: 350, marketPrice: 370 },
    { id: 15, name: "Bluetooth Speaker", warehousePrice: 60, marketPrice: 65 },
    { id: 16, name: "Router", warehousePrice: 45, marketPrice: 50 },
    { id: 17, name: "Portable SSD", warehousePrice: 90, marketPrice: 95 },
    { id: 18, name: "Gaming Chair", warehousePrice: 180, marketPrice: 190 },
    { id: 19, name: "Projector", warehousePrice: 400, marketPrice: 420 },
    { id: 20, name: "Microphone", warehousePrice: 110, marketPrice: 115 },
  ]);

  const [alerts, setAlerts] = useState([]);
  const [isAIEnabled, setIsAIEnabled] = useState(false);

  useEffect(() => {
    const checkPriceAlerts = () => {
      const newAlerts = products.map((product) => {
        if (product.marketPrice > product.warehousePrice) {
          return `${product.name}: Market price is higher! Consider selling at a higher price.`;
        } else if (product.marketPrice < product.warehousePrice) {
          return `${product.name}: Competitor has lowered the price! Consider adjusting your pricing.`;
        }
        return null;
      }).filter(alert => alert !== null);
      setAlerts(newAlerts);
    };
    checkPriceAlerts();
  }, [products]);

  const toggleAI = () => {
    setIsAIEnabled(!isAIEnabled);
  };

  return (
    <div className="market-price-tracking">
      <h2>Market Price Tracking</h2>
      <div className="ai-toggle">
        <label>
          <input type="checkbox" checked={isAIEnabled} onChange={toggleAI} />
          Enable AI-Based Price Optimization
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Warehouse Price ($)</th>
            <th>Market Price ($)</th>
            <th>Suggested Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.warehousePrice}</td>
              <td>{product.marketPrice}</td>
              <td>
                {product.marketPrice > product.warehousePrice ? (
                  <span className="sell-high">Increase Selling Price</span>
                ) : (
                  <span className="adjust-price">Review Pricing Strategy</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="price-alerts">
        <h3>Price Alerts</h3>
        {alerts.length > 0 ? (
          <ul>
            {alerts.map((alert, index) => (
              <li key={index}>{alert}</li>
            ))}
          </ul>
        ) : (
          <p>No price alerts at the moment.</p>
        )}
      </div>
      <div className="price-flowchart">
        <h3>Product Pricing Flowchart</h3>
        <p>Coming soon: Interactive flowchart showing the product pricing lifecycle.</p>
      </div>
    </div>
  );
}

export default MarketPriceTracking;