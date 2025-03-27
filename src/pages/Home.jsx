import "../styles/home.css";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate, NavLink, Outlet } from "react-router-dom";
import {
  FiBook,
  FiClock,
  FiBell,
  FiUser,
  FiLogOut,
  FiHome,
} from "react-icons/fi";

export default function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const libraryUser = localStorage.getItem("library-user");
    if (!libraryUser) {
      navigate("/register");
    }
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) return <div className="loading">Loading...</div>;

  return (
    <div className="dashboard-container">
      <nav className={`sidebar ${mobileMenuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Library</h2>
          <p>{user?.role === "admin" ? "Administrator" : "Patron"}</p>
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/home" end>
              <FiHome /> Dashboard
            </NavLink>
          </li>

          {user?.role === "user" && (
            <>
              <li>
                <NavLink to="/home/borrowed">
                  <FiBook /> My Books
                </NavLink>
              </li>
              <li>
                <NavLink to="/home/requests">
                  <FiClock /> Requests
                </NavLink>
              </li>
              <li>
                <NavLink to="/home/notifications">
                  <FiBell /> Notifications
                </NavLink>
              </li>
            </>
          )}

          {user?.role === "admin" && (
            <>
              <li>
                <NavLink to="/home/users">
                  <FiUser /> Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/home/books">
                  <FiBook /> Manage Books
                </NavLink>
              </li>
            </>
          )}
        </ul>

        <button className="logout-btn" onClick={handleLogout}>
          <FiLogOut /> Sign Out
        </button>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Mobile Header */}
        <header className="mobile-header">
          <button
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          ></button>
          <h3>Welcome, {user?.name || user?.email}</h3>
        </header>

        {/* Dashboard Content */}
        <div className="content-wrapper">
          <Outlet />

          {window.location.pathname === "/home" && (
            <div className="welcome-message">
              <h2>
                Welcome {user?.name || user?.email}
                <span className="role-badge">{user?.role}</span>
              </h2>
              <p>
                {user?.role === "admin"
                  ? "Library Management Dashboard"
                  : "Your Personal Library Portal"}
              </p>

              {user?.role === "user" && (
                <div className="quick-stats">
                  <div className="stat-card">
                    <h3>Borrowed Books</h3>
                    <p>5</p>
                  </div>
                  <div className="stat-card">
                    <h3>Pending Requests</h3>
                    <p>2</p>
                  </div>
                  <div className="stat-card">
                    <h3>Notifications</h3>
                    <p>3</p>
                  </div>
                </div>
              )}

              {user?.role === "admin" && (
                <div className="admin-quick-actions">
                  <button>Add New Book</button>
                  <button>Manage Users</button>
                  <button>View Reports</button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
