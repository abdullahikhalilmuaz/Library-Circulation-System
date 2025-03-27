// import { useAuth } from "../context/AuthContext";
// import { Navigate, Outlet } from "react-router-dom";

// export default function ProtectedRoute({ roles = [] }) {
//   const { user } = useAuth();

//   if (!user) {
//     return <Navigate to="/" replace />;
//   }

//   if (roles.length > 0 && !roles.includes(user.role)) {
//     return <Navigate to="/home" replace />;
//   }

//   return <Outlet />;
// }
export default function ProtectedRoute() {
  return <div> Protected Route Component</div>;
}
