// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import BorrowedBooks from "./BorrowedBooks";
// import PendingRequests from "./PendingRequests";
// import Notifications from "./Notifications";

// const UserDashboard = () => {
//   const [tabValue, setTabValue] = useState(0);
//   const [dashboardData, setDashboardData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const response = await axios.get("/api/user/dashboard");
//         setDashboardData(response.data);
//       } catch (err) {
//         setError(err.response?.data?.message || "Failed to load dashboard");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   const handleTabChange = (newValue) => {
//     setTabValue(newValue);
//   };

//   if (loading) {
//     return (
//       <div
//         style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
//       >
//         <div className="spinner"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div style={{ marginTop: "1rem" }}>
//         <div className="error-message">{error}</div>
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: "1.5rem" }}>
//       <h1 style={{ marginBottom: "1rem" }}>My Account</h1>

//       <div className="tabs">
//         <button
//           onClick={() => handleTabChange(0)}
//           className={tabValue === 0 ? "active" : ""}
//         >
//           Borrowed Books
//         </button>
//         <button
//           onClick={() => handleTabChange(1)}
//           className={tabValue === 1 ? "active" : ""}
//         >
//           Pending Requests
//         </button>
//         <button
//           onClick={() => handleTabChange(2)}
//           className={tabValue === 2 ? "active" : ""}
//         >
//           Notifications
//         </button>
//       </div>

//       <div style={{ marginTop: "1.5rem" }}>
//         {tabValue === 0 && (
//           <BorrowedBooks books={dashboardData?.borrowedBooks || []} />
//         )}
//         {tabValue === 1 && (
//           <PendingRequests requests={dashboardData?.pendingRequests || []} />
//         )}
//         {tabValue === 2 && (
//           <Notifications notifications={dashboardData?.notifications || []} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;

export default function UserDashboard() {
  return (
    <div>
      <h1>Hello and welcome, this is the User Dashboard component</h1>
    </div>
  );
}
