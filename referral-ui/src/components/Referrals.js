import { useEffect, useState } from "react";
import API from "../api";

export default function Referrals() {
  const [referrals, setReferrals] = useState([]);

  useEffect(() => {
    API.get("/referrals")
      .then((res) => setReferrals(res.data))
      .catch(() => setReferrals([]));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Job Referrals</h2>
      <div className="row">
        {referrals.map((ref) => (
          <div key={ref._id} className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5>{ref.jobTitle} @ {ref.companyName}</h5>
                <p>{ref.location}</p>
                <p><strong>Deadline:</strong> {ref.applicationDeadline?.substring(0,10)}</p>
                <p><strong>Posted By:</strong> {ref.postedBy?.fullName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
