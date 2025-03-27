import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegistrationPage";
import NotFoundPage from "./pages/NotfoundPage";
import LandingPage from "./pages/LandingPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./components/AdminDashboard";
import PasswordResetRequest from "./components/PasswordResetRequest";
import UserDashboard from "./components/UserDashboard";

import "./styles/app.css";
// Import the nested route components
import BorrowedBooks from "./components/BorrowedBooks";
import PendingRequests from "./components/PendingRequests";
import Notifications from "./components/Notifications";
import ManageUsers from "./components/ManageUsers";
import ManageBooks from "./components/ManageBooks";
import Trial from "./pages/Trial";

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/trial" element={<Trial />} />

      {/* Protected User Routes */}
      <Route path="/home" element={<Home />}></Route>
      {/* <Route element={<ProtectedRoute />}>
      </Route> */}
      {/* 404 Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
