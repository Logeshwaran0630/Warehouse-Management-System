import React, { useState, useEffect } from "react";
import "./Discounts.css";

function Discounts() {
  const [flashSale, setFlashSale] = useState(false);
  const [bulkDiscount, setBulkDiscount] = useState(5); // Default 5% discount
  const [discountCode, setDiscountCode] = useState("");
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    generateDiscountCode();
  }, []);

  const generateDiscountCode = () => {
    const code = "DISCOUNT" + Math.floor(Math.random() * 10000);
    setDiscountCode(code);
  };

  const handleFlashSaleToggle = () => {
    setFlashSale(!flashSale);
  };

  const handleBulkDiscountChange = (e) => {
    setBulkDiscount(e.target.value);
  };

  const applyDiscount = () => {
    const newDiscount = {
      type: flashSale ? "Flash Sale" : "Bulk Discount",
      percentage: bulkDiscount,
      code: discountCode,
    };
    setDiscounts([...discounts, newDiscount]);
    generateDiscountCode();
  };

  return (
    <div className="discount-container">
      <h2>Dynamic Discount Strategies</h2>

      <div className="discount-options">
        {/* Flash Sale Toggle */}
        <div className="flash-sale">
          <label>Enable Flash Sale:</label>
          <input type="checkbox" checked={flashSale} onChange={handleFlashSaleToggle} />
        </div>

        {/* Bulk Purchase Discount */}
        <div className="bulk-discount">
          <label>Bulk Discount (%):</label>
          <input type="number" value={bulkDiscount} onChange={handleBulkDiscountChange} min="1" max="50" />
        </div>
      </div>

      {/* Discount Code Display */}
      <div className="discount-code">
        <p>Auto-Generated Discount Code: <strong>{discountCode}</strong></p>
      </div>

      {/* Apply Discount Button */}
      <button className="apply-discount" onClick={applyDiscount}>Apply Discount</button>

      {/* Active Discounts List */}
      <div className="discount-list">
        <h3>Active Discounts</h3>
        <ul>
          {discounts.map((discount, index) => (
            <li key={index}>
              <strong>{discount.type}</strong> - {discount.percentage}% off (Code: {discount.code})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Discounts;
