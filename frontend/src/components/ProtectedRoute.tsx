import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
//import { useUserStore } from "../useHooks/useUserStore.js";
import Alerts from "../pages/Alerts.js";
import Login from "../pages/Login.js";
import Register from "../pages/Register.js";

const ProtectedRoute = () => {
  //const token = localStorage.getItem("token");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  //const token = useUserStore((state) => state.token);
  //const role = useUserStore((state) => state.role);
  //const setRole = useUserStore((state) => state.setRole);
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/");
  }

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await axios.get("http://localhost:3001/api/auth/me", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        const user = res.data.user;
        localStorage.setItem("username", user.username);
        localStorage.setItem("role", user.role);
        localStorage.setItem("user_arena", user.assignedArena);
        const role = user.role;

        if (role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        setError(String(error));
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);
  return isAdmin ? <Outlet /> : <Alerts />;
};

export default ProtectedRoute;
