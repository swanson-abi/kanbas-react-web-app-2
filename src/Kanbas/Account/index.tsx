import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import Profile from "./Profile";
import Signin from "./Signin";
import Users from "./Users";
import "./account-style.css";
import Signup from "./Signup";
import { useSelector } from "react-redux";

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div>
      <h2>Account</h2>
      <div className="d-flex"> 
        <div className="account-nav ms-auto"> 
          <AccountNavigation />
        </div>
        <div className="account-content">
          <Routes>
          <Route path="/" element={<Navigate to={ currentUser ? "/Kanbas/Account/Profile" : "/Kanbas/Account/Signin" }/>}/>
            <Route path="Signin" element={<Signin />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Users/:uid" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
