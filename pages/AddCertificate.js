import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory ,} from "react-router-dom";

function AddCertificate() {
  let history = useHistory()
  
  const [certificate,setCertificate]=useState({
    collegename:"",
    year:"",
  })

  const{collegename,year}=certificate;

  const onInputChange=(e)=>{
    setCertificate({...certificate,[e.target.name]:e.target.value});

  };
  const addcertificate= async (e)=>{
     e.preventDefault();
     await axios.post("http://localhost:8080/certificate",certificate)
     history.push("/certificate")
  };
  return(
<React.Fragment>
  <div className="container">
    <div className="row">
      <div className="col-md-8 offset-md-2 border rounded p-3 mt-2 shadow">
        <h2 className="text-center m-4 ">Enter Certificate Details</h2>
          
            <div className="mb-2">
              <label for="Name" className="form-label">College Name</label>
              <input type={"collegename"} className="form-control" placeholder="Enter Your College Name"
                name="collegename" value={collegename} onChange={(e)=>onInputChange(e)}/>
             </div>
  
            <div className="mb-2">
              <label for="Year" className="form-label">Year </label>
              <input type={"number"} className="form-control" placeholder="Enter Year"
              name="year" value={year} onChange={(e)=>onInputChange(e)}/>
            </div>

            <div className="col">
      <button onClick={addcertificate} style={{height:"45px", width:"100px"}}
      className="btn btn-success mt-3  mb-3 ">Add</button>
      
        <Link to ="/certificate"> 
    <button  style={{height:"45px", width:"100px"}} 
        className="btn btn-dark mt-3 mb-3 ms-5" >Back</button></Link>
</div>
      </div>
    </div>
  </div>
</React.Fragment>
)};
export default AddCertificate;