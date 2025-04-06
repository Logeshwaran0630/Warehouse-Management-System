import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [businessName, setBusinessName] = useState("");

  useEffect(() => {
    const checkSession = () => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        navigate("/login");
      } else {
        setBusinessName(user.businessName.toUpperCase());
      }
    };

    checkSession();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <h2>Warehouse Manager</h2>
        <Link to="/">Dashboard</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/staff">Staff</Link>
        <Link to="/marketprice">Market Price</Link>
        <Link to="/discounts">Discounts</Link>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <div className="business-name">WELCOME {businessName || "N/A"}</div>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="content">
          {/* Staff Section */}
          <div className="widget">
            <h3>Staff Absent Today</h3>
            <p>3 Staff Members are on leave: John, Sarah, and David.</p>
          </div>

          {/* Orders Section */}
          <div className="widget">
            <h3>Big Orders Alert</h3>
            <p>🚀 Large order received: 2000 units of Laptops for XYZ Corp.</p>
          </div>

          {/* Low Stock Section */}
          <div className="widget">
            <h3>Low Stock Alert</h3>
            <ul>
              <li>⚠️ Wireless Mouse - 5 left</li>
              <li>⚠️ SSD Drives - 3 left</li>
              <li>⚠️ Power Banks - 2 left</li>
            </ul>
          </div>

          {/* Discount Announcement */}
          <div className="widget">
            <h3>Upcoming Discount Sale</h3>
            <p>🔥 20% OFF on all electronic accessories starting next week! Prepare stock accordingly.</p>
          </div>

          {/* Top Selling Products */}
          <div className="widget">
            <h3>Top Selling Products</h3>
            <ol>
              <li>📌 Gaming Keyboard - 500 units sold</li>
              <li>📌 Wireless Headphones - 350 units sold</li>
              <li>📌 Smartwatches - 300 units sold</li>
            </ol>
          </div>

          {/* Recent Orders */}
          <div className="widget">
            <h3>Recent Orders</h3>
            <ul>
              <li>📦 Order #3021 - 5 Laptops - Delivered</li>
              <li>📦 Order #3022 - 10 Monitors - In Transit</li>
              <li>📦 Order #3023 - 3 Smartphones - Pending</li>
            </ul>
          </div>

          {/* Employee Performance */}
          <div className="widget">
            <h3>Employee Performance</h3>
            <p>📊 Top Performer: Mark - Processed 200 orders this week!</p>
          </div>

          {/* Warehouse Alerts */}
          <div className="widget">
            <h3>Warehouse Alerts</h3>
            <p>❗ Fire drill scheduled for tomorrow at 3 PM.</p>
          </div>

          {/* Supplier Updates */}
          <div className="widget">
            <h3>Supplier Updates</h3>
            <p>📢 Shipment from Tech Supplier arriving in 2 days.</p>
          </div>

          {/* Upcoming Deliveries */}
          <div className="widget">
            <h3>Upcoming Deliveries</h3>
            <ul>
              <li>🚚 500 SSDs arriving in 3 days</li>
              <li>🚚 200 Monitors arriving next week</li>
            </ul>
          </div>

          {/* Chat Bar */}
          <div className="chat-bar">
            <h3>Live Chat</h3>
            <div className="chat-box">
              <div className="message user">Hey, is the stock updated?</div>
              <div className="message bot">Yes, we updated it this morning.</div>
              <div className="message user">Great! What about new shipments?</div>
              <div className="message bot">Expected arrival is in 2 days.</div>
              <div className="message user">Nice! Any discounts coming?</div>
              <div className="message bot">Yes! 20% OFF next week.</div>
              <div className="message user">Sounds great! Thanks.</div>
            </div>
            <input type="text" className="chat-input" placeholder="Type a message..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
