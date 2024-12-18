import React, { useState } from 'react';
import './DashboardAdmin.css';
import { Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHome, 
    faBriefcase, 
    faCalendarCheck, 
    faBars, 
    faBell, 
    faGlobe, 
    faCog, 
    faSearch, 
    faSignOut,
    faTrash, 
    faPlus 
  } from '@fortawesome/free-solid-svg-icons';
const DashboardAdmin = () => {
    const [employees, setEmployees] = useState([
        { id: 1, name: 'Reyhan Angka', salary: 'Rp 35.000', role: 'CEO' },
        { id: 2, name: 'Rana Andara', salary: 'Rp 70.000', role: 'Sekertry' },
        { id: 3, name: 'wawan Antan', salary: 'Rp 65.000', role: 'Disigner' },
        { id: 4, name: 'Soni Sumarga', salary: 'Rp 65.000', role: 'Disigner' },
        { id: 5, name: 'Doni Sumarga', salary: 'Rp 65.000', role: 'Disigner' },
        { id: 6, name: 'Doni Sumarga', salary: 'Rp 65.000', role: 'Disigner' },
    ]);
    const handleLogout = () => {
        
        // Perform any logout actions here (e.g., clearing local storage, resetting state)
      
        return <Navigate to="/home" replace />;
         // Remove user data from local storage
        // Redirect to the landing page
        
    };

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const deleteRow = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id));
    };

    const addNew = () => {
        const newId = employees.length + 1;
        const newEmployee = {
            id: newId,
            name: `Employee ${newId}`,
            salary: 'Rp 30.000',
            role: 'Staff'
        };
        setEmployees([...employees, newEmployee]);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                <nav className="col-md-3 col-lg-2 d-md-block sidebar p-3">
                    <h4 className="fw-bold mb-4 text-primary">KANTORKU</h4>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><FontAwesomeIcon icon={faHome} className="me-2" /> Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#"> <FontAwesomeIcon icon={faBriefcase} className="me-2" />  Management</a>
                            <ul className="nav flex-column ps-3">
                                <li><a href="#" className="nav-link">Employees</a></li>
                                <li><a href="#" className="nav-link">Roles</a></li>
                                <li><a href="#" className="nav-link">Performance</a></li>
                                <li><a href="#" className="nav-link active text-primary">Salary</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">   <FontAwesomeIcon icon={faCalendarCheck} className="me-2" />Attendance</a>
                            <ul className="nav flex-column ps-3">
                                <li><a href="#" className="nav-link">Routine</a></li>
                                <li><a href="#" className="nav-link">Overtime</a></li>
                                <li><a href="#" className="nav-link">One-time</a></li>
                                <li><a href="#" className="nav-link">Holiday</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                {/* Main Content */}
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
                    {/* Top Menu */}
                    <div className="d-flex justify-content-between align-items-center top-menu p-3">
                        <div>
                            <button className="btn btn-outline-secondary d-md-none" id="menuToggle">
                            <FontAwesomeIcon icon={faBars} />
                            </button>
                            <span className="fs-5 fw-bold">Management</span>
                        </div>
                        <div className="d-flex align-items-center">
                         <FontAwesomeIcon icon={faBell} className="fa-lg me-3" />
                            <FontAwesomeIcon icon={faGlobe} className="fa-lg me-3" />
                            <FontAwesomeIcon icon={faCog} className="fa-lg me-3" />
                          
                            <FontAwesomeIcon 
                                icon={faSignOut} 
                                className="logout-icon" 
                                onClick={handleLogout}
                            />
                            <img src="img/admin.jpeg" className="profile-img ms-3" alt="Profile" />
                        </div>
                    </div>
                    {/* Header Banner */}
                    <div className="header-banner mb-4 d-flex justify-content-between">
                        <div>
                            <h4 className="fw-bold mb-0">Salary</h4>
                            <small className="text-muted">Management • Salary</small>
                        </div>
                        <div>
                        <FontAwesomeIcon icon={faPlus} /> New
                        </div>
                    </div>
                    {/* Search and Table */}
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <input type="text" id="search" className="form-control" placeholder="Search Here" value={searchTerm} onChange={handleSearch} />
                                <button id="addNew" className="btn btn-success" onClick={addNew}>
                                <FontAwesomeIcon icon={faPlus} /> New
                                </button>
                            </div>
                            <table className="table align-middle">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Employee</th>
                                        <th scope="col">Salary/hour</th>
                                        <th scope="col">Roles</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody id="salaryTable">
                                    {filteredEmployees.map(employee => (
                                        <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>
                                                <img src="img/user.jpeg" className="employee-img me-2" alt="Avatar" />
                                                {employee.name}
                                            </td>
                                            <td>{employee.salary}</td>
                                            <td>
                                                <span className="role-badge">{employee.role}</span>
                                            </td>
                                            <td>
                                               
                                                <FontAwesomeIcon 
                                                    icon={faTrash} 
                                                    className="icon-delete" 
                                                    onClick={() => deleteRow(employee.id)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardAdmin;
