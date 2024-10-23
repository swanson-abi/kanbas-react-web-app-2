import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import Profile from "./Profile";
import Signin from "./Signin";
import "./account-style.css";

import Signup from "./Signup";
export default function Account() {
  return (
    <div>
      <h2>Account</h2>
      <div className="d-flex"> 
        <div className="account-nav ms-auto"> 
          <AccountNavigation />
        </div>
        <div className="account-content">
          <Routes>
            <Route path="/" element={<Navigate to="Signin" />} />
            <Route path="Signin" element={<Signin />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
