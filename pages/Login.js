import React from "react";
import { Link} from "react-router-dom";
import profile from "../assets/a.png";
import "../styles/Login.css";

function Login() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
           </div>
         </div>
         <div>
           <h1>Login Page</h1>

           <div className="form-group mb-2">
             <label for="Username" className="form-label fw-bold">User Name</label>
             <input type={"username"} className="form-control" placeholder="Enter Your Username" />
           </div>

           <div className="form-group mb-2">
             <label for="Password" className="form-label fw-bold">User Password</label>
             <input type={"password"} className="form-control" placeholder="Enter Your Password" />
           </div>

          <div className="login-button">
          <button  style={{height:"45px", width:"200px"}} className="btn btn-primary" >Login</button>
          <Link to ="/"> 
           <button  style={{height:"45px", width:"200px"}}
            className="btn btn-dark mt-3 mb-3 ms-5" >Back</button></Link>
          </div>
           
            <p className="link mt-3">
              <a href="#">Forgot password ?</a> Or <a href="#">Sign up</a>
            </p>
         </div>
       </div>
     </div>
    </div>
  );
}
export default Login;