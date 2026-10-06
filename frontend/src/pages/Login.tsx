import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Register from "./Register";
//import { useUserStore } from "../useHooks/useUserStore.js";

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  //const setToken = useUserStore((state) => state.setToken);

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      setLoading(true);
      setError("");
      const email = formData.get("email");
      const password = String(formData.get("password"));
      const res = await axios.post("http://localhost:3001/api/auth/login", {
        email,
        password,
      });
      const token = res.data.token;
      localStorage.setItem("token", token);
      navigate("/users/register");
    } catch (error) {
      setError(String(error));
    } finally {
      setLoading(false);
      //go to me page ?
    }
  };
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div className="login-input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
          />
        </div>

        <div className="login-input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="my password"
          />
        </div>

        <button type="submit"> {loading ? "logging in..." : "Login"}</button>
        {error && <div>Error: {error}</div>}
      </form>
    </div>
  );
};

export default Login;
