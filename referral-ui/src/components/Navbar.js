// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     localStorage.removeItem("userId");
//     navigate("/login");
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         <Link className="navbar-brand" to="/">ReferralApp</Link>
//         <div>
//           <ul className="navbar-nav">
//             {!token ? (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/signup">Signup</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/login">Login</Link>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/profile">Profile</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/referrals">Referrals</Link>
//                 </li>
                
//                 {role === "Referrer" && (
//                   <>
//                     <li className="nav-item">
//                       <Link className="nav-link" to="/post-referral">Post Referral</Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link className="nav-link" to="/referrer-connections">View Connection Requests</Link>  {/* Referrer Connection Link */}
//                     </li>
//                   </>
//                 )}
                
//                 {role === "Seeker" && (
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/connect">Connect with Referrers</Link>  {/* Seeker Connect Link */}
//                   </li>
//                 )}
                
//                 <li className="nav-item">
//                   <button onClick={handleLogout} className="btn btn-danger btn-sm ms-2">
//                     Logout
//                   </button>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }



import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");

    // Redirect to Landing Page (root route)
    navigate("/");  // This will redirect to the Landing Page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">ReferralApp</Link>
        <div>
          <ul className="navbar-nav">
            {!token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/referrals">Referrals</Link>
                </li>
                
                {role === "Referrer" && (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/post-referral">Post Referral</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/referrer-connections">View Connection Requests</Link>
                    </li>
                  </>
                )}
                
                {role === "Seeker" && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/connect">Connect with Referrers</Link>
                  </li>
                )}
                
                <li className="nav-item">
                  <button onClick={handleLogout} className="btn btn-danger btn-sm ms-2">
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
