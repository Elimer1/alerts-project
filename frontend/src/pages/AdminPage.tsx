import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type User = {
  _id: string;
  username: string;
  password: string;
  email: string;
  role: string;
  assignedArena: string;
};

const AdminPage = () => {
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await axios.get("http://localhost:3001/api/auth/users", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        setUsers(res.data.users);
      } catch (error) {
        setError(String(error));
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, [users]);

  const handleDeleteUser = async (id: string) => {
    try {
      setLoading(true);
      setError("");
      await axios.delete(`http://localhost:3001/api/auth/users/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      setUsers((prev) => [...prev.filter((user) => user._id !== id)]);
    } catch (error) {
      setError(String(error));
    }
  };

  const handleLogout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("username", "");
    localStorage.setItem("role", "");
    navigate("/");
  };

  return (
    <div className="admin-page">
      <h1>Username: {username}</h1>
      <p>Role: {role}</p>
      <button onClick={handleLogout}>Log Out</button>
      <div className="users-container">
        <h3>User</h3>
        <ul className="user-list">
          {users.map((user) => (
            <li key={user._id}>
              <h5>Username: {user.username}</h5>
              <p>Role: {user.role}</p>
              <p>Assigned Area: {user.assignedArena}</p>
              <button
                className="delete-user"
                onClick={() => handleDeleteUser(user._id)}
              >
                Delete User
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
