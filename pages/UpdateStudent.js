import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams ,} from "react-router-dom";


function UpdateStudent() {
  let history = useHistory()

  const {id}= useParams()
  
  const [student,setStudent]=useState({
    studentname:"",
    collegename:"",
    year:"",
    qualification:"",
    certificate:"",
    course:"",
    rollno:"",
    hallticketno:"",
  })

  const{studentname,collegename,year,qualification,certificate,course,rollno,hallticketno}=student;


  const onInputChange=(e)=>{
    setStudent({...student,[e.target.name]:e.target.value});
  };

  useEffect(()=>{
    loadStudent()
  },[]);

  const updatestudent= async (e)=>{
     e.preventDefault();
     await axios.put(`http://localhost:8080/student/${id}`,student)
     history.push("/student");
  };

  const loadStudent = async() =>{
    const result=await axios.get(`http://localhost:8080/student/${id}`)
    setStudent(result.data)
  }
  
  return(

      
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-8 offset-2  x-auto shadow p-5">
               <h2 className="text-center mb-4 ">Update Student Detail</h2>
               <h5 className="text">Student ID :{student.id}</h5>
               
              

  <div className=" form -group mb-2">
  <label for="studentsname" className="form-label">Student Name</label>
    <input type={"studentname"} className="form-control" placeholder="Enter Your Name"
    name="studentname" value={studentname} onChange={(e)=>onInputChange(e)}/>
  </div>

  <div className="form-group mb-2">
  <label for="Name" className="form-label"> College Name</label>
    <input type={"text"} className="form-control" placeholder="Enter  Your College Name"
    name="collegename" value={collegename} onChange={(e)=>onInputChange(e)}/>
  </div>

  <div className=" form -group mb-2">
  <label for="rollno" className="form-label">Roll Number</label>
    <input type={"number"} className="form-control" placeholder="Enter Your Roll Number"
    name="rollno" value={rollno} onChange={(e)=>onInputChange(e)}/>
  </div>

  <div className=" form -group mb-2">
  <label for="exampleQualification" className="form-label">Qualification</label>
    <input type={"text"} className="form-control" placeholder="Enter Your Qualification"
    name="qualification" value={qualification} onChange={(e)=>onInputChange(e)}/>
  </div>

  <div className=" form -group mb-2">
  <label for="hallticketno" className="form-label">Hall Ticket Number</label>
    <input type={"text"} className="form-control" placeholder="Enter Your Hall ticket number"
    name="hallticketno" value={hallticketno} onChange={(e)=>onInputChange(e)}/>
  </div>

  <div className=" form -group mb-2">
  <label for="certifcate" className="form-label">Certificate</label>
    <input type={"name"} className="form-control" placeholder="Enter Certificate Name"
    name="certificate" value={certificate} onChange={(e)=>onInputChange(e)}/>
  </div>

  <div className=" form -group mb-2">
  <label for="course" className="form-label">Course</label>
    <input type={"name"} className="form-control" placeholder="Enter Course Name"
    name="course" value={course} onChange={(e)=>onInputChange(e)}/>
  </div>

  

  <div className=" form -group mb-2">
  <label for="exampleYear" className="form-label">Passing Year </label>
    <input type={"number"} className="form-control" placeholder="Enter Your Passing Year"
    name="year" value={year} onChange={(e)=>onInputChange(e)}/>
  </div>

   

    <div className="col">
    <button onClick={updatestudent} style={{height:"45px", width:"100px"}}
      className="btn btn-success mt-3  mb-3 ">Update</button>
        <Link to ="/student"> 
    <button  style={{height:"45px", width:"100px"}} 
    className="btn btn-dark mt-3 mb-3 ms-5" >Back</button></Link>
</div>
              </div>
             </div>
        </div>
       
    
);
};
export default UpdateStudent;