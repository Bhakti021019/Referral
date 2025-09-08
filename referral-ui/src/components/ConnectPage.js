import { useEffect, useState } from "react";
import API from "../api";

export default function ConnectPage() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch all Seekers and Referrers
    API.get("/connections")
      .then((res) => {
        console.log("Users fetched: ", res.data);  // Log the response to verify data
        setUsers(res.data);
      })
      .catch((err) => {
        console.error("Error fetching users: ", err);  // Log error if data fetch fails
        setMessage("Error loading users");
      });
  }, []);

  const handleConnect = async (referrerId) => {
    try {
      const res = await API.post("/connections/connect", { referrerId });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error connecting");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Seekers and Referrers</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <div className="row">
        {users.map((user) => (
          user.role === "Referrer" && (  // Only show users with the role "Referrer"
            <div key={user._id} className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h5>{user.fullName}</h5>
                  <p>{user.email}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleConnect(user._id)}
                  >
                    Connect
                  </button>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
