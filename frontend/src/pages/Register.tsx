import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const token = "slslknklsvns";

  const handleRegister = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      setLoading(true);
      setError("");
      const res = axios.post(
        "http://localhost:3001/api/auth/register",
        { formData },
        {
          headers: {
            Authorization: "Bearer" + token,
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
              <option value="north">North</option>
              <option value="south">South</option>
              <option value="center">Center</option>
            </select>
          </div>

          <button className="regsiter-submit-btn" type="submit">
            {loading ? "Regsitering..." : "Register"}
          </button>
          {error && <div>Error: {error}</div>}
        </form>
      </div>
    </>
  );
};

export default Register;
