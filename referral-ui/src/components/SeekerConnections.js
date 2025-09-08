import React, { useState, useEffect } from "react";
import API from "../api";  // Ensure your API instance is correctly configured

export default function SeekerConnections() {
  const [connections, setConnections] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch Seeker's connections
  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const res = await API.get("/connections");  // Adjust endpoint as needed
        setConnections(res.data);
      } catch (err) {
        setMessage("Error fetching connections");
      }
    };

    fetchConnections();
  }, []);  // Fetch on component mount

  const renderConnectionStatus = (status) => {
    switch (status) {
      case "pending":
        return <button className="btn btn-warning">Pending</button>;
      case "accepted":
        return <button className="btn btn-success">Connected</button>;  // Display "Connected" if status is "accepted"
      default:
        return <button className="btn btn-primary">Connect</button>;  // If no request has been sent
    }
  };

  return (
    <div className="container mt-5">
      <h2>Your Connections</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <div className="row">
        {connections.map((connection) => (
          <div key={connection.seekerId._id}>
            <h3>{connection.seekerId.fullName}</h3>
            <p>{connection.seekerId.email}</p>
            {renderConnectionStatus(connection.status)}  {/* Display status */}
          </div>
        ))}
      </div>
    </div>
  );
}
