import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";



// Lazy Loading Components
const Home = lazy(() => import("./components/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Inventory = lazy(() => import("./pages/Inventory"));
const Settings = lazy(() => import("./pages/Settings"));
const Reports = lazy(() => import("./pages/Reports"));
const Orders = lazy(() => import("./pages/Orders")); 
const Staff=lazy(()=> import("./pages/Staff"));
const MarketPrice=lazy(()=> import("./pages/MarketPrice"));
const Discounts=lazy(()=> import("./pages/Discounts"));


function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} /> {/* ✅ Only Settings Added */}
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/reports" element={<Reports />} /> {/* ✅ Added */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/Staff" element={<Staff />} />
            <Route path="/MarketPrice" element={<MarketPrice />} />
            <Route path="/Discounts" element={<Discounts />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
