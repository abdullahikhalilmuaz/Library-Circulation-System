import "../styles/mainDisplay.css";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
export default function MainDisplayContainer() {
  const userRole = JSON.parse(localStorage.getItem("library-user"));
  const role = userRole.role;

  return (
    <div className="home-main-content-container">
      {role === "admin" ? (
        <AdminDashboard />
      ) : role === "user" ? (
        <UserDashboard />
      ) : (
        <>
          <h1>You are expected to login bro!</h1>
        </>
      )}
    </div>
  );
}
