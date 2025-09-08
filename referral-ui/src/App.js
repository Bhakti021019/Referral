// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Import components
// import Navbar from "./components/Navbar";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Profile from "./components/Profile";
// import Referrals from "./components/Referrals";
// import PostReferral from "./components/PostReferral";
// import ConnectPage from "./components/ConnectPage";
// import ReferrerConnections from "./components/ReferrerConnections";
// import SeekerConnections from "./components/SeekerConnections";
// import Dashboard from "./components/Dashboard";
// import LandingPage from "./components/LandingPage";  // Import the Landing Page component

// function App() {
//   return (
//     <Router>
//       {/* Navbar is outside Routes, so it's always visible */}
//       <Navbar />
      
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<LandingPage />} />  {/* Landing page as the default route */}
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />

//         {/* Protected Routes: Dashboard and its child routes */}
//         <Route path="/dashboard" element={<Dashboard />}>
//           <Route path="profile" element={<Profile />} />
//           <Route path="referrals" element={<Referrals />} />
//           <Route path="post-referral" element={<PostReferral />} />
//           <Route path="connect" element={<ConnectPage />} />
//           <Route path="referrer-connections" element={<ReferrerConnections />} />
//           <Route path="seeker-connections" element={<SeekerConnections />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Referrals from "./components/Referrals";
import PostReferral from "./components/PostReferral";
import ConnectPage from "./components/ConnectPage";
import ReferrerConnections from "./components/ReferrerConnections";
import SeekerConnections from "./components/SeekerConnections";
import LandingPage from "./components/LandingPage";  // Import the Landing Page component
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      {/* Navbar is always visible */}
      <Navbar />
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />  {/* Landing page as the default route */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Direct Routes for Profile and others */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/referrals" element={<Referrals />} />
        <Route path="/post-referral" element={<PostReferral />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/referrer-connections" element={<ReferrerConnections />} />
        <Route path="/seeker-connections" element={<SeekerConnections />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
