import { useState } from "react";
import API from "../api";

export default function PostReferral() {
  const [form, setForm] = useState({
    jobTitle: "",
    companyName: "",
    jobType: "",
    location: "",
    salaryRange: "",
    jobDescription: "",
    requiredSkills: "",
    referralContact: "",
    applicationDeadline: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/referrals", {
        ...form,
        requiredSkills: form.requiredSkills.split(",").map((s) => s.trim()),
      });
      setMsg("Referral Posted Successfully!");
      setForm({
        jobTitle: "",
        companyName: "",
        jobType: "",
        location: "",
        salaryRange: "",
        jobDescription: "",
        requiredSkills: "",
        referralContact: "",
        applicationDeadline: "",
      });
    } catch (err) {
      setMsg(err.response?.data?.message || "Error posting referral");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Post a Referral</h2>
      {msg && <div className="alert alert-info">{msg}</div>}
      <form onSubmit={handleSubmit} className="col-md-8">
        <div className="mb-3">
          <label>Job Title</label>
          <input type="text" name="jobTitle" className="form-control"
                 value={form.jobTitle} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Company Name</label>
          <input type="text" name="companyName" className="form-control"
                 value={form.companyName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Job Type</label>
          <input type="text" name="jobType" className="form-control"
                 value={form.jobType} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Location</label>
          <input type="text" name="location" className="form-control"
                 value={form.location} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Salary Range</label>
          <input type="text" name="salaryRange" className="form-control"
                 value={form.salaryRange} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Job Description</label>
          <textarea name="jobDescription" className="form-control"
                    value={form.jobDescription} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label>Required Skills (comma separated)</label>
          <input type="text" name="requiredSkills" className="form-control"
                 value={form.requiredSkills} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Referral Contact</label>
          <input type="text" name="referralContact" className="form-control"
                 value={form.referralContact} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Application Deadline</label>
          <input type="date" name="applicationDeadline" className="form-control"
                 value={form.applicationDeadline} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Post Referral</button>
      </form>
    </div>
  );
}
