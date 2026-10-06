import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const token = "eflksdnklsdnskl";

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      setLoading(true);
      setError("");
      const res = axios.post(
        "http://localhost:3001/api/auth/login",
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
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
          <input type="password" id="password" name="password" />
        </div>

        <button type="submit"> {loading ? "logging in..." : "Login"}</button>
        {error && <div>Error: {error}</div>}
      </form>
    </div>
  );
};

export default Login;
