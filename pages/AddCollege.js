import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory ,} from "react-router-dom";

function AddCollege() {
  let history = useHistory()
  
  const [college,setCollege]=useState({
    collegeadmin:"",
    collegename:"",
    location:"",
  })

  const{collegename,collegeadmin,location}=college;

  const onInputChange=(e)=>{
    setCollege({...college,[e.target.name]:e.target.value});

  };
  const addcollege= async (e)=>{
     e.preventDefault();
     await axios.post("http://localhost:8080/college",college)
     history.push("/college")
  };
  return(
<React.Fragment>
  <div className="container">
    <div className="row">
      <div className="col-md-8 offset-md-2 border rounded p-3 mt-2 shadow">
        <h2 className="text-center m-4 ">Enter College Details</h2>
          
            <div className="mb-2">
              <label for="Name" className="form-label">College Name</label>
              <input type={"collegename"} className="form-control" placeholder="Enter Your College Name"
              name="collegename" value={collegename} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-2">
              <label for="CollegeName" className="form-label">College Admin</label>
              <input type={"collegeadmin"} className="form-control" placeholder="Enter  College Admin"
              name="collegeadmin" value={collegeadmin} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-2">
              <label for="Location" className="form-label">Location</label>
              <input type={"location"} className="form-control" placeholder="Enter College Location"    
              name="location" value={location} onChange={(e)=>onInputChange(e)}/>
           </div>
           
    <div className="col">
      <button onClick={addcollege} style={{height:"45px", width:"100px"}}
      className="btn btn-success mt-3  mb-3 ">Add</button>
        <Link to ="/college"> 
    <button  style={{height:"45px", width:"100px"}} className="btn btn-dark mt-3 mb-3 ms-5" >Back</button></Link>
    
</div>
           



        
      </div>
    </div>
  </div>
</React.Fragment>
)};
export default AddCollege;