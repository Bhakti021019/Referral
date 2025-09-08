import { useState, useEffect } from "react";
import API from "../api";
import { motion } from "framer-motion"; // For smooth animation
import './Profile.css'

export default function Profile() {
  const [user, setUser] = useState(null);
  const [editable, setEditable] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    dob: "",
    contactNumber: "",
    address: "",
    currentCompany: "",
    currentJobTitle: "",
    workExperience: "",
    skills: "",
    highestQualification: "",
    university: "",
    graduationYear: "",
  });

  useEffect(() => {
    // Fetch user profile data from backend
    API.get("/users/me")
      .then((res) => {
        setUser(res.data);
        setForm(res.data);
      })
      .catch(() => setUser(null));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await API.put("/users/update", form);
      setUser(updatedUser.data);
      setEditable(false);  // Disable edit mode after save
    } catch (err) {
      console.error("Error updating profile", err);
    }
  };

  return (
    <div className="container mt-5">
      <motion.h2 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="text-center mb-4">
        Profile
      </motion.h2>
      
      {user ? (
        <>
          {editable ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="form-container"
            >
              <div className="form-group mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  className="form-control"
                  value={form.dob}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Contact Number</label>
                <input
                  type="text"
                  name="contactNumber"
                  className="form-control"
                  value={form.contactNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  value={form.address}
                  onChange={handleChange}
                />
              </div>

              <h5 className="mt-4">Employment</h5>
              <div className="form-group mb-3">
                <label className="form-label">Current Company</label>
                <input
                  type="text"
                  name="currentCompany"
                  className="form-control"
                  value={form.currentCompany}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Current Job Title</label>
                <input
                  type="text"
                  name="currentJobTitle"
                  className="form-control"
                  value={form.currentJobTitle}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Work Experience</label>
                <textarea
                  name="workExperience"
                  className="form-control"
                  value={form.workExperience}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Skills</label>
                <input
                  type="text"
                  name="skills"
                  className="form-control"
                  value={form.skills}
                  onChange={handleChange}
                />
              </div>

              <h5 className="mt-4">Education</h5>
              <div className="form-group mb-3">
                <label className="form-label">Highest Qualification</label>
                <input
                  type="text"
                  name="highestQualification"
                  className="form-control"
                  value={form.highestQualification}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">University</label>
                <input
                  type="text"
                  name="university"
                  className="form-control"
                  value={form.university}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Year of Graduation</label>
                <input
                  type="text"
                  name="graduationYear"
                  className="form-control"
                  value={form.graduationYear}
                  onChange={handleChange}
                />
              </div>

              <div className="button-group mt-4">
                <button type="submit" className="btn btn-success">Save</button>
                <button type="button" className="btn btn-danger ms-2" onClick={() => setEditable(false)}>
                  Cancel
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              className="card p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p><strong>Name:</strong> {user.fullName}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Role:</strong> {user.role}</p>
              <p><strong>Date of Birth:</strong> {user.dob}</p>
              <p><strong>Contact Number:</strong> {user.contactNumber}</p>
              <p><strong>Address:</strong> {user.address}</p>

              <h5>Employment</h5>
              <p><strong>Company:</strong> {user.currentCompany}</p>
              <p><strong>Job Title:</strong> {user.currentJobTitle}</p>
              <p><strong>Experience:</strong> {user.workExperience}</p>
              <p><strong>Skills:</strong> {user.skills?.join(", ")}</p>

              <h5>Education</h5>
              <p><strong>Qualification:</strong> {user.highestQualification}</p>
              <p><strong>University:</strong> {user.university}</p>
              <p><strong>Graduation Year:</strong> {user.graduationYear}</p>

              <button className="btn btn-primary" onClick={() => setEditable(true)}>
                Edit Profile
              </button>
            </motion.div>
          )}
        </>
      ) : (
        <p className="text-danger">Not logged in</p>
      )}
    </div>
  );
}
