import "../styles/trial.css";
import MainDisplayContainer from "../components/MainDisplayContainer";
import { useNavigate, NavLink, Outlet } from "react-router-dom";
import {
  FiBook,
  FiClock,
  FiBell,
  FiUser,
  FiLogOut,
  FiHome,
  FiMenu,
  FiSettings,
  FiBriefcase,
  FiPackage,
  FiBarChart2,
} from "react-icons/fi";

export default function Trial() {
  const userRole = JSON.parse(localStorage.getItem("library-user"));
  if (userRole) {
    const role = userRole.role;
  }
  window.location.href = "/register";
  return (
    <div className="home-main-content-wrapper-container">
      <div className="home-main-content-wrapper-container-header">
        <div className="account">
          <FiUser fontSize={"23px"} />
        </div>

        <div className="home-main-content-wrapper-container-header-navs">
          <FiBell fontSize={"20px"} />
          <FiSettings fontSize={"20px"} />
        </div>
      </div>

      <MainDisplayContainer />
      <div className="home-main-content-wrapper-container-bottom-nav">
        {role === "admin" ? (
          <>
            <div className="fi-home">
              <FiHome />
            </div>
            <div>
              <FiMenu />
            </div>
            <div>
              <FiBook />
            </div>
            <div>
              <FiBriefcase />
            </div>
            <div>
              <FiClock />
            </div>
            <div>
              <FiPackage />
            </div>
            <div>
              <FiBarChart2 />
            </div>
          </>
        ) : role === "user" ? (
          <>
            <div className="fi-home">
              <FiHome />
            </div>
            <div>
              <FiMenu />
            </div>
            <div>
              <FiBook />
            </div>
            <div>
              <FiBriefcase />
            </div>
            <div>
              <FiClock />
            </div>
            <div>
              <FiPackage />
            </div>
          </>
        ) : (
          <>
            <div className="fi-home">
              <FiHome />
            </div>
            <div>
              <FiMenu />
            </div>
            <div>
              <FiBook />
            </div>
            <div>
              <FiBriefcase />
            </div>
            <div>
              <FiClock />
            </div>
            <div>
              <FiPackage />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
