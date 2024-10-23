import "./account-style.css";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input id="wd-username" placeholder="username" 
      className="form-control mb-2"/> 
      <input id="wd-password" placeholder="password" type="password" className="form-control mb-2" /> 
      <input id="wd-password" placeholder="verify password" type="password" className="form-control mb-2" /> 
      <Link  id="wd-signin-btn" to="/Kanbas/Account/Profile"
            className="btn btn-primary w-100"> Sign in </Link> 
      <Link to="/Kanbas/Account/Signin" >Sign in</Link>
    </div>
);}
