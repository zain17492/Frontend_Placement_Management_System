import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory ,} from "react-router-dom";

function AddStudent() {
  let history = useHistory()
  
  const [student,setStudent]=useState({
   studentname:"",
   collegename:"",
	 rollno:"",
   qualification:"",
	 course:"",
   certificate:"",
	 year:"",
	 hallticketno:"",
  })

  const{studentname,collegename,rollno,qualification,course,year,certificate,hallticketno}=student;

  const onInputChange=(e)=>{
    setStudent({...student,[e.target.name]:e.target.value});
  };

  const addstudent= async (e)=>{
     e.preventDefault();
     await axios.post("http://localhost:8080/student",student)
     history.push("/student")
  };
  return(
<React.Fragment>
  <div className="container">
    <div className="row">
      <div className="col-md-8 offset-md-2 border rounded p-3 mt-2 shadow">
        <h2 className="text-center m-4 ">Enter Student Details</h2>
            <div className="mb-2">
              <label for="name" className="form-label">Student Name</label>
              <input type={"studentname"} className="form-control" placeholder="Enter Your  Name"
              name="studentname" value={studentname} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-2">
              <label for="Name" className="form-label">College Name</label>
              <input type={"collegename"} className="form-control" placeholder="Enter Your College Name"
              name="collegename" value={collegename} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-2">
              <label for="Name" className="form-label">Roll No</label>
              <input type={"number"} className="form-control" placeholder="Enter Your Roll Number"
              name="rollno" value={rollno} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-2">
              <label for="Name" className="form-label">Qualification</label>
              <input type={"qualification"} className="form-control" placeholder="Enter Your Qualification"
              name="qualification" value={qualification} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-2">
              <label for="Name" className="form-label">Course</label>
              <input type={"course"} className="form-control" placeholder="Enter Course"
              name="course" value={course} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-2">
              <label for="Name" className="form-label">Certificate</label>
              <input type={"certificate"} className="form-control" placeholder="Enter Certificate"
              name="certificate" value={certificate} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-2">
              <label for="Name" className="form-label">Hall Ticket Number</label>
              <input type={"hallticketno"} className="form-control" placeholder="Enter Your Hall Ticket Number"
              name="hallticketno" value={hallticketno} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-2">
              <label for="Year" className="form-label">Year </label>
              <input type={"number"} className="form-control" placeholder="Enter Year"
              name="year" value={year} onChange={(e)=>onInputChange(e)}/>
            </div>

            <div className="col">
      <button onClick={addstudent} style={{height:"45px", width:"100px"}}
      className="btn btn-success mt-3  mb-3 ">Add</button>
        <Link to ="/student"> 
    <button  style={{height:"45px", width:"100px"}} 
    className="btn btn-dark mt-3 mb-3 ms-5" >Back</button></Link>
</div>
           
      </div>
    </div>
  </div>
</React.Fragment>
)};
export default AddStudent;