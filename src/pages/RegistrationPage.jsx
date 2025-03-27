import { useState } from "react";
import "../styles/registrationpage.css";
import UserFormLogin from "../components/userFormLogin";
import UserFormSignup from "../components/UserFormSignup";
export default function RegisterPage() {
  const [userRegister, setUserRegister] = useState("");
  const [isAdmin, setIsAdmin] = useState("user");

  const userUser = localStorage.getItem("user-user");
  const userAdmin = localStorage.getItem("user-admin");

  const handleHomeLink = () => {
    window.location.href = "/home";
  };

  const handleSignup = () => {
    setUserRegister("signup");
  };
  const handleLogin = () => {
    setUserRegister("login");
  };

  const handleAdmin = () => {
    setIsAdmin("admin");
  };


  const handleUser = () => {
    setIsAdmin("user");
  };
  return (
    <div className="landing-page-container">
      <div className="landing-page-header">
        <div className="register">
          <button onClick={handleSignup}>signup</button>
          <button onClick={handleLogin}>login</button>
        </div>
        {userUser || userAdmin ? (
          <div className="navigate-home">
            <button onClick={handleHomeLink}>home</button>
          </div>
        ) : (
          <div className="register2">
            <button onClick={handleAdmin}>admin</button>
            <button onClick={handleUser}>user</button>
          </div>
        )}
      </div>

      {isAdmin === "admin" ? (
        <div className="admin-form">
          <h3
            style={{
              color: "red",
              fontStyle: "italic",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            Admin already sign up, Login with valid credentials!
          </h3>
          {userRegister === "login" ? (
            <UserFormLogin />
          ) : userRegister === "signup" ? (
            <UserFormSignup />
          ) : (
            <UserFormSignup />
          )}
        </div>
      ) : isAdmin === "user" ? (
        <>
          <br />
          <div className="user-form">
            <h3
              style={{
                color: "red",
                fontStyle: "italic",
                fontSize: "12px",
                textAlign: "center",
              }}
            >
              Fill out valid credentials!
            </h3>
            {userRegister === "login" ? (
              <UserFormLogin />
            ) : userRegister === "signup" ? (
              <UserFormSignup />
            ) : (
              <UserFormSignup />
            )}
          </div>
        </>
      ) : (
        <div>
          <h3
            style={{
              color: "red",
              fontStyle: "italic",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            Login with valid credentials!
          </h3>
          {userRegister === "login" ? (
            <UserFormLogin />
          ) : userRegister === "signup" ? (
            <UserFormSignup />
          ) : (
            <UserFormSignup />
          )}
        </div>
      )}
    </div>
  );
}
