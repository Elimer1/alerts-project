import axios from "axios";
import React, { useState } from "react";
import type { Alert } from "./Alerts";

const AddAlert = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const handleAddAlert = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    try {
      setLoading(true);
      setError("");
      const res = await axios.post("http://localhost:3001/api/alerts", {
        displayName: formData.get("displayName"),
        description: formData.get("description"),
        priority: formData.get("priority"),
        arena: formData.get("arena"),
        status: formData.get("status"),
        lon: Number(formData.get("lon")),
        lat: Number(formData.get("lat")),
      });
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
      <form onSubmit={handleAddAlert}>
        <div className="displayName-input input-container">
          <label htmlFor="displayName">Display Name</label>
          <input
            type="displayName"
            name="displayName"
            id="displayName"
            required
          />
        </div>

        <div className="description-input input-container">
          <label htmlFor="description">Description</label>
          <input
            type="description"
            id="description"
            name="description"
            required
          />
        </div>

        <div className="priority-input input-container">
          <label htmlFor="priority">Priority</label>
          <select name="priority" id="priority" required>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="arena">Arena</label>
          <select name="arena" id="arena" required>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="Center">Center</option>
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="status">Status</label>
          <select name="status" id="status" required>
            <option value="Active">Active</option>
            <option value="Handled">Handled</option>
          </select>
        </div>

        <div className="lon-input input-container">
          <label htmlFor="lon">Longitude</label>
          <input type="number" name="lon" id="lon" required />
        </div>

        <div className="lat-input input-container">
          <label htmlFor="lat">Latitude</label>
          <input type="number" name="lat" id="lat" required />
        </div>

        <button className="submit-add-alert input-container" type="submit">
          Add Alert
        </button>
      </form>
    </>
  );
};

export default AddAlert;
