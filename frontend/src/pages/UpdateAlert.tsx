import axios from "axios";
import React, { useState } from "react";

const UpdateAlert = (id: String) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const handleUpdateAlert = async (e: React.SubmitEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);

    try {
      setLoading(true);
      setError("");
      await axios.put(`http://localhost:3001/api/alerts/${id}`, formData);
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
      <form onSubmit={handleUpdateAlert}>
        <div className="displayName-input input-container">
          <label htmlFor="displayName">Display Name</label>
          <input type="displayName" name="displayName" id="displayName" />
        </div>

        <div className="description-input input-container">
          <label htmlFor="description">Description</label>
          <input type="description" id="description" name="description" />
        </div>

        <div className="priority-input input-container">
          <label htmlFor="priority">Priority</label>
          <select name="priority" id="priority">
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="arena">Arena</label>
          <select name="arena" id="arena">
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="Center">Center</option>
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="status">Status</label>
          <select name="status" id="status">
            <option value="Active">Active</option>
            <option value="Handled">Handled</option>
          </select>
        </div>

        <button className=" input-container" type="submit">
          Update Alert
        </button>
      </form>
    </>
  );
};

export default UpdateAlert;
