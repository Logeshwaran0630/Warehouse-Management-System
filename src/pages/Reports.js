import React, { useState } from "react";
import "./Reports.css";

function Reports() {
  // Sample Data
  const [reports] = useState([
    { id: 1, name: "Total Orders", value: "150", icon: "📦" },
    { id: 2, name: "Revenue", value: "$12,500", icon: "💰" },
    { id: 3, name: "Pending Orders", value: "10", icon: "⏳" },
    { id: 4, name: "Stock Low", value: "5 Products", icon: "⚠️" },
  ]);

  return (
    <div className="reports-container">
      <h2>📊 Business Reports</h2>

      <div className="report-cards">
        {reports.map((report) => (
          <div key={report.id} className="report-card">
            <span className="report-icon">{report.icon}</span>
            <h3>{report.name}</h3>
            <p>{report.value}</p>
          </div>
        ))}
      </div>

      {/* Revenue Chart Placeholder */}
      <div className="chart-container">
        <h3>📈 Revenue Growth</h3>
        <p>(Graph Placeholder - Can be replaced with a chart library)</p>
        <div className="chart-placeholder">📊 Graph Coming Soon</div>
      </div>
    </div>
  );
}

export default Reports;
