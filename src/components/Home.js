import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Streamline Your Warehouse with Smart WMS</h1>
          <p>Efficiently manage stock, track orders, and grow your business with ease.</p>
          <div className="hero-buttons">
            <Link to="/login" className="btn primary-btn">Login</Link>
            <Link to="/register" className="btn secondary-btn">Register</Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Powerful Features for Smart Warehousing</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>📦 Inventory Management</h3>
            <p>Track stock levels in real-time with automated updates.</p>
          </div>
          <div className="feature-card">
            <h3>🚀 Order Processing</h3>
            <p>Manage orders efficiently from pending to shipped status.</p>
          </div>
          <div className="feature-card">
            <h3>📊 Analytics & Reports</h3>
            <p>Gain insights into sales trends and warehouse performance.</p>
          </div>
          <div className="feature-card">
            <h3>🔔 Low Stock Alerts</h3>
            <p>Receive instant alerts when stock levels drop.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1️⃣ Register & Set Up</h3>
            <p>Sign up, add your warehouse, and configure inventory settings.</p>
          </div>
          <div className="step">
            <h3>2️⃣ Add & Track Orders</h3>
            <p>Manage incoming orders and update statuses in real time.</p>
          </div>
          <div className="step">
            <h3>3️⃣ Manage Stock</h3>
            <p>Keep track of inventory and get notified about low stock.</p>
          </div>
          <div className="step">
            <h3>4️⃣ Grow Your Business</h3>
            <p>Analyze reports and optimize your warehouse operations.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Simplify Your Warehouse Management?</h2>
        <Link to="/register" className="btn primary-btn">Get Started</Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Smart WMS. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
