import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams ,} from "react-router-dom";


function UpdateCollege() {
  let history = useHistory()

  const {id}= useParams()
  
  const [college,setCollege]=useState({
    collegename:"",
    collegeadmin:"",
    location:""
  })

  const{collegename,collegeadmin,location}=college;

  const onInputChange=(e)=>{
    setCollege({...college,[e.target.name]:e.target.value});
  };

  useEffect(()=>{
    loadCollege()
  },[]);

  const updatecollege= async (e)=>{
     e.preventDefault();
     await axios.put(`http://localhost:8080/college/${id}`,college)
     history.push("/college");
  };

  const loadCollege = async() =>{
    const result=await axios.get(`http://localhost:8080/college/${id}`)
    setCollege(result.data)
  }
  
  return(

      
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-8 offset-2  x-auto shadow p-5">
               <h2 className="text-center mb-4 ">Update  College Detail</h2>
               <h5 className="text">College ID :{college.id}</h5>
               <div className="form-group mb-2">
  <label for="Name" className="form-label"> College Name</label>
    <input type={"text"} className="form-control" placeholder="Enter  Your College Name"
    name="collegename" value={collegename} onChange={(e)=>onInputChange(e)}/>
  </div>

  <div className=" form -group mb-2">
  <label for="Name" className="form-label">College Admin </label>
    <input type={"text"} className="form-control" placeholder="Enter College Admin"
    name="collegeadmin" value={collegeadmin} onChange={(e)=>onInputChange(e)}/>
  </div>

  <div className=" form -group mb-2">
  <label for="Name" className="form-label">Location </label>
    <input type={"text"} className="form-control" placeholder="Enter Location"
    name="locaton" value={location} onChange={(e)=>onInputChange(e)}/>
  </div>

  <div className="col">
  <button onClick={updatecollege} style={{height:"45px", width:"100px"}}
      className="btn btn-success mt-3  mb-3 ">Update</button>
        <Link to ="/college"> 
    <button  style={{height:"45px", width:"100px"}} className="btn btn-dark mt-3 mb-3 ms-5" >Back</button></Link>
    
</div>
    

              </div>
             </div>
        </div>
       
    
);
};
export default UpdateCollege;
