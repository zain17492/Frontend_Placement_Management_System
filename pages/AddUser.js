import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory ,} from "react-router-dom";

function AddUser() {
  let history = useHistory()
  
  const [user,setUser]=useState({
    username:"",
    usertype:"",
    password:""
  })

  const{username,usertype,password}=user;

  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  };

  const adduser= async (e)=>{
     e.preventDefault();
     await axios.post("http://localhost:8080/user",user)
     history.push("/user")
  };
  return(
<React.Fragment>
  <div className="container">
    <div className="row">
      <div className="col-md-8 offset-md-2 border rounded p-3 mt-2 shadow">
        <h2 className="text-center m-4 ">Enter User Details</h2>
            <div className="mb-2">
              <label for="Name" className="form-label">User Name</label>
              <input type={"username"} className="form-control" placeholder="Enter User Name"
              name="username" value={username} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-2">
              <label for="Name" className="form-label">User Type</label>
              <input type={"usertype"} className="form-control" placeholder="Enter User Type"
              name="usertype" value={usertype} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-2">
              <label for="Password" className="form-label">Password </label>
              <input type={"password"} className="form-control" placeholder="Enter Your Password"
              name="password" value={password} onChange={(e)=>onInputChange(e)}/>
            </div>

            <div className="col">
      <button onClick={adduser} style={{height:"45px", width:"100px"}}
      className="btn btn-success mt-3  mb-3 ">Add</button>

        <Link to ="/user"> 
    <button  style={{height:"45px", width:"100px"}} 
        className="btn btn-dark mt-3 mb-3 ms-5" >Back</button></Link>
        </div>
      </div>
    </div>
  </div>
</React.Fragment>
)};
export default AddUser;