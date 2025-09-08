import React, { useState, useEffect } from "react";
import API from "../api";  // Ensure your API instance is correctly configured

export default function ReferrerConnections() {
  const [connections, setConnections] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch connections for the Referrer
  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const res = await API.get("/connections/referrer");
        setConnections(res.data);
      } catch (err) {
        setMessage("Error fetching connections");
      }
    };

    fetchConnections();
  }, []);  // Run on component mount

  const handleAccept = async (seekerId) => {
    try {
      const res = await API.put("/connections/accept", { seekerId });
      setMessage(res.data.message);

      // Update the UI by setting the connection status to "Accepted"
      setConnections(prevConnections =>
        prevConnections.map(conn => 
          conn.seekerId._id === seekerId ? { ...conn, status: "accepted" } : conn
        )
      );
    } catch (err) {
      setMessage("Error accepting the connection");
    }
  };

  const handleReject = async (seekerId) => {
    try {
      const res = await API.put("/connections/reject", { seekerId });
      setMessage(res.data.message);

      // Remove the rejected connection from the list
      setConnections(connections.filter((conn) => conn.seekerId._id !== seekerId));
    } catch (err) {
      setMessage("Error rejecting the connection");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Pending Connection Requests</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <div className="row">
        {connections.map((connection) => (
          <div key={connection.seekerId._id} className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5>{connection.seekerId.fullName}</h5>
                <p>{connection.seekerId.email}</p>
                {connection.status === "pending" && (
                  <>
                    <button className="btn btn-success" onClick={() => handleAccept(connection.seekerId._id)}>
                      Accept
                    </button>
                    <button className="btn btn-danger ms-2" onClick={() => handleReject(connection.seekerId._id)}>
                      Reject
                    </button>
                  </>
                )}
                {connection.status === "accepted" && <button className="btn btn-secondary">Connected</button>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
