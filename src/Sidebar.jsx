import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-light p-3" style={{ width: "250px", minHeight: "100vh" }}>
      <h5 className="fw-bold mb-4">Dashboard</h5>
      <ul className="nav flex-column">
        <li className="nav-item"><a className="nav-link" href="#management">Management</a></li>
        <li className="nav-item"><a className="nav-link" href="#employees">Employees</a></li>
        <li className="nav-item"><a className="nav-link" href="#roles">Roles</a></li>
        <li className="nav-item"><a className="nav-link" href="#salary">Salary</a></li>
        <li className="nav-item"><a className="nav-link" href="#attendance">Attendance</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
