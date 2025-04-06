import React, { useState } from "react";
import "./Staff.css";

function Staff() {
  const [staffList, setStaffList] = useState([
    { id: 1, name: "John Doe", role: "Manager", email: "john@example.com", phone: "(123) 456-7890", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Inventory Supervisor", email: "jane@example.com", phone: "(987) 654-3210", status: "Inactive" },
    { id: 3, name: "Michael Johnson", role: "Order Handler", email: "michael@example.com", phone: "(555) 123-4567", status: "Active" },
    { id: 4, name: "Emily Davis", role: "Warehouse Associate", email: "emily@example.com", phone: "(222) 333-4444", status: "Active" },
    { id: 5, name: "Robert Brown", role: "Logistics Coordinator", email: "robert@example.com", phone: "(777) 888-9999", status: "Inactive" },
    { id: 6, name: "Sophia Wilson", role: "Stock Controller", email: "sophia@example.com", phone: "(444) 555-6666", status: "Active" },
    { id: 7, name: "David Martinez", role: "Forklift Operator", email: "david@example.com", phone: "(111) 222-3333", status: "Inactive" },
    { id: 8, name: "Olivia Taylor", role: "Shipping Coordinator", email: "olivia@example.com", phone: "(666) 777-8888", status: "Active" },
  ]);

  const [newStaff, setNewStaff] = useState({ name: "", role: "", email: "", phone: "", status: "Active" });

  const addStaff = () => {
    if (!newStaff.name || !newStaff.role || !newStaff.email || !newStaff.phone) return;
    setStaffList([...staffList, { ...newStaff, id: staffList.length + 1 }]);
    setNewStaff({ name: "", role: "", email: "", phone: "", status: "Active" });
  };

  const removeStaff = (id) => {
    setStaffList(staffList.filter((staff) => staff.id !== id));
  };

  return (
    <div className="staff-container">
      <h2>Staff Management</h2>
      <div className="add-staff-form">
        <input type="text" placeholder="Name" value={newStaff.name} onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })} />
        <input type="text" placeholder="Role" value={newStaff.role} onChange={(e) => setNewStaff({ ...newStaff, role: e.target.value })} />
        <input type="email" placeholder="Email" value={newStaff.email} onChange={(e) => setNewStaff({ ...newStaff, email: e.target.value })} />
        <input type="text" placeholder="Phone" value={newStaff.phone} onChange={(e) => setNewStaff({ ...newStaff, phone: e.target.value })} />
        <button onClick={addStaff} className="add-btn">Add Staff</button>
      </div>
      <table className="staff-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {staffList.map((staff) => (
            <tr key={staff.id} className={staff.status === "Active" ? "active" : "inactive"}>
              <td>{staff.id}</td>
              <td>{staff.name}</td>
              <td>{staff.role}</td>
              <td>{staff.email}</td>
              <td>{staff.phone}</td>
              <td>{staff.status}</td>
              <td>
                <button onClick={() => removeStaff(staff.id)} className="delete-btn">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Staff;
