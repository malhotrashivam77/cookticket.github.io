import React from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = ({ isAdmin }) => {
  const navigate = useNavigate();

  // Redirect to login if not an admin
  if (!isAdmin) {
    navigate("/admin/login");
    return null;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Admin Panel</h1>
      <p>Welcome to the admin dashboard. Here, you can manage tickets, users, and other settings.</p>
      <div style={{ marginBottom: "1rem" }}>
        <button
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "rgb(241, 140, 74)",
            color: "white",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
          onClick={() => navigate("/admin/manage-users")}
        >
          Manage Users
        </button>
        <button
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "rgb(241, 140, 74)",
            color: "white",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            marginLeft: "1rem",
          }}
          onClick={() => navigate("/admin/manage-tickets")}
        >
          Manage Tickets
        </button>
      </div>
      <button
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "rgb(74, 140, 241)",
          color: "white",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
        }}
        onClick={() => navigate("/admin/upload-package")}
      >
        Create Package
      </button>
    </div>
  );
};

export default AdminPanel;
