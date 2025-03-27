import "../styles/admin.css"
import { useAuth } from "../context/AuthContext";

export default function AdminDashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <p>Welcome {user?.name || user?.email}</p>
      <button onClick={logout}>Logout</button>
      
      <div className="admin-content">
        <h3>Admin-only features will appear here</h3>
      </div>
    </div>
  );
}