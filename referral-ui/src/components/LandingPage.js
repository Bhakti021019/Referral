import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";  // Custom styling

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to ReferralApp!</h1>
          <p>Your go-to platform for job referrals and professional connections.</p>
          <Link to="/signup" className="cta-btn">Get Started</Link>
        </div>
        <div className="hero-image">
          <img src="https://cdn.dribbble.com/userupload/15045987/file/original-5c00349c5bfd098d549dbada6a9edaa6.jpg?format=webp&resize=640x480&vertical=center" alt="Referral App Hero" /> {/* Update image */}
        </div>
      </section>

      {/* Features Section */}
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

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Success Stories</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"ReferralApp helped me land my dream job within weeks!"</p>
            <p>- John Doe, Successful Job Seeker</p>
          </div>
          <div className="testimonial">
            <p>"I found a network of amazing professionals who supported my growth."</p>
            <p>- Sarah Lee, Referrer</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Boost Your Career?</h2>
        <Link to="/signup" className="cta-btn">Join ReferralApp Now</Link>
      </section>
    </div>
  );
}
