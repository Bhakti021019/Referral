import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LandingPage.css"; // Custom styling

export default function LoggedInLandingPage() {
  const [role, setRole] = useState(null);  // Store user role
  const navigate = useNavigate();

  useEffect(() => {
    // Get the role from localStorage
    const userRole = localStorage.getItem("role");
    setRole(userRole);

    if (!userRole) {
      navigate("/login");  // Redirect to login if no role found
    }
  }, [navigate]);

  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome Back to ReferralApp!</h1>
          <p>Your personalized platform for job referrals and professional connections.</p>
          
          {role === "Seeker" ? (
            <p>Start exploring job opportunities and connecting with referrers.</p>
          ) : role === "Referrer" ? (
            <p>Post job opportunities and manage your referrals.</p>
          ) : null}

          <Link to={role === "Seeker" ? "/connect" : "/post-referral"} className="cta-btn">
            {role === "Seeker" ? "Explore Opportunities" : "Post a Referral"}
          </Link>
        </div>
        <div className="hero-image">
          <img src="path/to/hero-image.jpg" alt="Referral App Hero" /> {/* Update image */}
        </div>
      </section>

      <section className="features-section">
        <h2>How It Works</h2>
        <div className="features">
          <div className="feature-item">
            <h3>Find Job Opportunities</h3>
            <p>Explore job listings that match your skills and experience.</p>
          </div>
          <div className="feature-item">
            <h3>Connect with Referrers</h3>
            <p>Build your professional network and connect with industry experts.</p>
          </div>
          <div className="feature-item">
            <h3>Get Referred</h3>
            <p>Gain valuable referrals to accelerate your career growth.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
