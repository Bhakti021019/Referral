# ReferralApp

ReferralApp is a platform designed to connect job seekers with referrers, enabling users to create professional connections, find job opportunities, and build a strong network. 

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Installation Guide](#installation-guide)
5. [Running the Application](#running-the-application)
6. [Contributing](#contributing)
7. [License](#license)

## Project Overview

ReferralApp allows users to sign up as seekers or referrers and connect with each other to get job referrals and share job opportunities. Users can manage their profiles, search for job listings, and send/receive connection requests for professional networking.

## Tech Stack

The project uses the following technologies:

- **Frontend:**
  - React.js
  - React Router
  - Bootstrap
  - Framer Motion (for animations)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose for data modeling)

- **Other Tools:**
  - Axios (for API calls)
  - dotenv (for environment variables)

## Features

- **User Registration & Login:** Users can sign up and log in to create an account.
- **User Roles:** Users can choose between two roles:
  - **Seeker:** Search for jobs and connect with referrers.
  - **Referrer:** Post job opportunities and refer seekers.
- **Profile Management:** Users can manage their profiles, including their personal information, work experience, and educational background.
- **Connection Requests:** Seekers can send connection requests to referrers and vice versa.
- **Dashboard:** Users can view job referrals, connection requests, and their profiles.

## Installation Guide

Follow these steps to set up the project locally:

### Clone the Repository

```bash
git clone https://github.com/your-username/referral-app.git
cd referral-app


Backend Setup

Install dependencies:

cd backend
npm install


Create a .env file in the root directory with the following variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000


Run the backend server:

npm start


The backend will run on http://localhost:5000.

Frontend Setup

Install dependencies:

cd frontend
npm install


Run the frontend server:

npm start


The frontend will run on http://localhost:3000.

MongoDB

Ensure that MongoDB is set up and running on your local machine or use a cloud-based MongoDB service like MongoDB Atlas
.

Running the Application

Make sure the backend server is running at http://localhost:5000.

Make sure the frontend server is running at http://localhost:3000.

Visit http://localhost:3000 in your browser to start using the application.