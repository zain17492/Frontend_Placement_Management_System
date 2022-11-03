import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory ,} from "react-router-dom";


function AddAdmin() {
  let history = useHistory()
  
  const [admin,setAdmin]=useState({
    adminname:"",
    password:""
  })

  const{adminname,password}=admin;

  const onInputChange=(e)=>{
    setAdmin({...admin,[e.target.name]:e.target.value});

  };
  const addadmin= async (e)=>{
     e.preventDefault();
     await axios.post("http://localhost:8080/admin",admin)
     history.push("/admin")

  };
  
  return(
<React.Fragment>
      
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 border rounded p-3 mt-2 shadow">
               <h2 className="text-center m-4 ">Enter Admin Details</h2>
               <div className="mb-2">
  <label for="Adminname" className="form-label">Admin Name</label>
    <input type={"adminname"} className="form-control" placeholder="Enter Admin Name"
    name="adminname" value={adminname} onChange={(e)=>onInputChange(e)}/>
  </div>
  
  <div className="mb-2">
  <label for="Password" className="form-label">Password </label>
    <input type={"password"} className="form-control" placeholder="Enter Your Password"
    name="password" value={password} onChange={(e)=>onInputChange(e)}/>
  </div>

<div className="col">
<button onClick={addadmin} style={{height:"45px", width:"100px"}}
className="btn btn-success mt-3  mb-3 ">Add</button>
    <Link to ="/admin"> 
    <button  style={{height:"45px", width:"100px"}}
     className="btn btn-dark mt-3 mb-3 ms-5" >Back</button></Link>
</div>
  

              </div>
             </div>
        </div>
       
    </React.Fragment>
)};
export default AddAdmin;