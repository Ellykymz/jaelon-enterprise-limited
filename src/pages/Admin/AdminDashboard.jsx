import React from "react";

const AdminDashboard = () => {
  return (
    <div>
      <h1>Welcome to the Jaelon Enterprise Limited Admin Dashboard</h1>
      {/* Display relevant information and actions */}
      <div>
        <h2>Statistics</h2>
        {/* Display relevant statistics */}
        <p>Total Users: 100</p>
        <p>Total Sales: $1,000,000</p>
        <p>Active Loans: 50</p>
      </div>
      <div>
        <h2>User Management</h2>
        {/* Display user management options */}
        <button>View Users</button>
        <button>Add User</button>
        <button>Remove User</button>
      </div>
      <div>
        <h2>Loan Management</h2>
        {/* Display loan management options */}
        <button>View Loans</button>
        <button>Approve Loan</button>
        <button>Reject Loan</button>
      </div>
      <div>
        <h2>Reports</h2>
        {/* Display reporting options */}
        <button>Generate Sales Report</button>
        <button>Generate User Report</button>
        <button>Generate Loan Report</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
