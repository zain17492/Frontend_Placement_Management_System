import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory ,} from "react-router-dom";

function AddPlacement() {
  let history = useHistory()
  
  const [placement,setPlacement]=useState({
    name:"",
    collegename:"",
    qualification:"",
    date:"",
    year:""
  })

  const{name,collegename,qualification,date,year}=placement;

  const onInputChange=(e)=>{
    setPlacement({...placement,[e.target.name]:e.target.value});
  };

  const addplacement= async (e)=>{
     e.preventDefault();
     await axios.post("http://localhost:8080/placement",placement)
     history.push("/placement")
  };
  return(
<React.Fragment>
  <div className="container">
    <div className="row">
      <div className="col-md-8 offset-md-2 border rounded p-3 mt-2 shadow">
        <h2 className="text-center m-4 ">Enter Placement Details</h2>
          
            <div className="mb-2">
              <label for="Name" className="form-label">Name</label>
              <input type={"name"} className="form-control" placeholder="Enter Placement Name"
              name="name" value={name} onChange={(e)=>onInputChange(e)}/>
            </div>

             <div className="mb-2">
              <label for="exampleCollegeName" className="form-label">College Name</label>
              <input type={"text"} className="form-control" placeholder="Enter Your College Name"
              name="collegename" value={collegename} onChange={(e)=>onInputChange(e)}/>
            </div>

            <div className="mb-2">
              <label for="exampleDate" className="form-label">Date</label>
              <input type={"date"} className="form-control" placeholder="Enter Date"
              name="date" value={date} onChange={(e)=>onInputChange(e)}/>
            </div>

            <div className="mb-2">
              <label for="exampleQualification" className="form-label">Qualification</label>
              <input type={"text"} className="form-control" placeholder="Enter Your Qualification"
              name="qualification" value={qualification} onChange={(e)=>onInputChange(e)}/>
            </div>
  
            <div className="mb-2">
              <label for="exampleYear" className="form-label">Passing Year </label>
              <input type={"number"} className="form-control" placeholder="Enter Your Passing Year"
              name="year" value={year} onChange={(e)=>onInputChange(e)}/>
            </div>

            <div className="col">
      <button onClick={addplacement} style={{height:"45px", width:"100px"}}
      className="btn btn-success mt-3  mb-3 ">Add</button>
        <Link to ="/placement"> 
    <button  style={{height:"45px", width:"100px"}} className="btn btn-dark mt-3 mb-3 ms-5" >Back</button></Link>
    
</div>

            
          
      </div>
    </div>
  </div>
</React.Fragment>
)};
export default AddPlacement;