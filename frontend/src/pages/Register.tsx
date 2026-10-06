import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AdminPage from "./AdminPage";
//import { useUserStore } from "../useHooks/useUserStore.js";

const Register = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  //const token = useUserStore((state) => state.token);
  //const setToken = useUserStore((state) => state.setToken);
  //const setRole = useUserStore((state) => state.setRole);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleRegister = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      setLoading(true);
      setError("");
      const res = await axios.post(
        "http://localhost:3001/api/auth/register",
        {
          username: String(formData.get("username")),
          email: String(formData.get("email")),
          password: String(formData.get("username")),
          role: String(formData.get("role")),
          assignedArena: String(formData.get("assignedArena")),
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        },
      );
    } catch (error) {
      setError(String(error));
    } finally {
      setLoading(false);
      //go to me page ?
    }
  };

  const handleLogout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("username", "");
    localStorage.setItem("role", "");
    navigate("/");
  };

  return (
    <>
      <div className="register-page">
        <h1 className="register-header">Register a new user</h1>
        <form className="register-form" onSubmit={handleRegister}>
          <div className="register-input-container">
            <label htmlFor="username">Username</label>
            <input
              className="register-input"
              type="text"
              id="username"
              name="username"
              required
            />
          </div>

          <div className="register-input-container">
            <label htmlFor="email">Email</label>
            <input
              className="register-input"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="register-input-container">
            <label htmlFor="password">Password</label>
            <input
              className="register-input"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>

          <div className="register-input-container">
            <label htmlFor="role">Role</label>
            <select
              className="register-input"
              name="role"
              id="role"
              defaultValue={"arena_user"}
            >
              <option value="arena_user">Arena User</option>
              <option value="general_user">General User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="register-input-container">
            <label htmlFor="assignedArena">Assigned Arena</label>
            <select
              className="register-input"
              name="assignedArena"
              id="assignedArena"
            >
              <option value="North">North</option>
              <option value="South">South</option>
              <option value="Center">Center</option>
            </select>
          </div>

          <button className="regsiter-submit-btn" type="submit">
            {loading ? "Registering..." : "Register User"}
          </button>
          {error && <div>Error: {error}</div>}
        </form>

        <div className="admin-options">
          <button onClick={handleLogout} className="logout-btn">
            {loading ? "logging out" : "Log Out"}
          </button>

          <NavLink to={"/users/admin-page"}>Go to admin page</NavLink>
        </div>
      </div>
    </>
  );
};

export default Register;
