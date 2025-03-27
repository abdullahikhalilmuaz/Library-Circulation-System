import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { showSuccessToast, showErrorToast } from "../utils/toast";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("library-user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Unified login function
  const login = async (email, password, isAdmin = false) => {
    try {
      const endpoint = isAdmin ? "/api/auth/admin/login" : "/api/auth/login";
      const response = await fetch(`http://localhost:3000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const userData = {
          token: data.token,
          role: data.user.role, // Make sure to include the role
          email: data.user.email,
          name: data.user.name,
          id: data.user.id, // Include other fields you might need
        };
        localStorage.setItem("library-user", JSON.stringify(userData));
        setUser(userData);
        showSuccessToast(`Welcome back, ${userData.name || userData.email}!`);
        navigate("/home");
        return { success: true };
      } else {
        showErrorToast(data.message || "Login failed");
        return { success: false, message: data.message };
      }
    } catch (error) {
      showErrorToast("Network error");
      return { success: false, message: "Network error" };
    }
  };

  // Unified signup function
  const signup = async (name, email, password, isAdmin = false) => {
    try {
      const endpoint = isAdmin ? "/api/auth/admin/signup" : "/api/auth/signup";
      const response = await fetch(`http://localhost:3000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        showSuccessToast("Registration successful! Please login.");
        return { success: true };
      } else {
        showErrorToast(data.message || "Signup failed");
        return { success: false, message: data.message };
      }
    } catch (error) {
      showErrorToast("Network error");
      return { success: false, message: "Network error" };
    }
  };

  // Password reset function
  const resetPassword = async (email) => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/reset-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        showSuccessToast("Password reset link sent to your email!");
      } else {
        showErrorToast(data.message || "Failed to send reset link");
      }
      return data;
    } catch (error) {
      showErrorToast("Network error");
      return { success: false, message: "Network error" };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("library-user");
    setUser(null);
    showSuccessToast("Logged out successfully");
    navigate("/");
    window.location.reload();
  };

  return (
    <AuthContext.Provider
      value={{ user, login, signup, logout, resetPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
