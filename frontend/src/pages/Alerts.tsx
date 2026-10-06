import { useEffect, useState } from "react";
import axios from "axios";
import UpdateAlert from "./UpdateAlert";
import { useNavigate } from "react-router-dom";

export type Alert = {
  _id: string;
  displayName: string;
  description: string;
  priority: string;
  arena: string;
  status: string;
  lon: number;
  lat: number;
};

const Alerts = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const [editId, setEditId] = useState<String>("");
  const navigate = useNavigate();

  useEffect(() => {
    const getAlerts = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await axios.get("http://localhost:3001/api/alerts");
        setAlerts(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        setError(String(error));
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getAlerts();
  }, []);

  const handleDelete = async (id: String) => {
    try {
      setLoading(true);
      setError("");
      await axios.delete(`http://localhost:3001/api/alerts/${id}`);
    } catch (error) {
      setError(String(error));
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {/* {showAdd && <AddAlert />}
      {!showAdd && <button onClick={() => setShowAdd(true)}>+Add Alert</button>}
      {editId && <UpdateAlert id={editId} />} */}
      <ul>
        {alerts.map((alert: Alert) => (
          <li key={alert._id}>
            <h3>Name: {alert.displayName}</h3>
            <p>Description: {alert.description}</p>
            <p>Priority: {alert.priority}</p>
            <p>Arena: {alert.arena}</p>
            <p>Status:{alert.status}</p>
            <button
              className="delete-alert-btn"
              onClick={() => handleDelete(alert._id)}
            >
              Delete Alert
            </button>

            <button onClick={() => setEditId(String(alert._id))}>
              Edit Alert
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Alerts;
