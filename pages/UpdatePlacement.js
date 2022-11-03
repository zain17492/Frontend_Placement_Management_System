import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams ,} from "react-router-dom";


function UpdatePlacement() {
  let history = useHistory()

  const {id}= useParams()
  
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

  useEffect(()=>{
    loadPlacement()
  },[]);

  const updateplacement= async (e)=>{
     e.preventDefault();
     await axios.put(`http://localhost:8080/placement/${id}`,placement)
     history.push("/placement");
  };

  const loadPlacement = async() =>{
    const result=await axios.get(`http://localhost:8080/placement/${id}`)
    setPlacement(result.data)
  }
  
  return(

      
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-8 offset-2  x-auto shadow p-5">
               <h2 className="text-center mb-4 ">Update Placement Detail</h2>
               <h5 className="text">Placement ID :{placement.id}</h5>
               
              

  <div className=" form -group mb-2">
  <label for="Name" className="form-label">Placement Name </label>
    <input type={"text"} className="form-control" placeholder="Enter Placement Name"
    name="name" value={name} onChange={(e)=>onInputChange(e)}/>
  </div>

  <div className="form-group mb-2">
  <label for="Name" className="form-label"> College Name</label>
    <input type={"text"} className="form-control" placeholder="Enter  Your College Name"
    name="collegename" value={collegename} onChange={(e)=>onInputChange(e)}/>
  </div>

  <div className=" form -group mb-2">
  <label for="exampleDate" className="form-label">Date</label>
    <input type={"date"} className="form-control" placeholder="Enter Date"
    name="date" value={date} onChange={(e)=>onInputChange(e)}/>
  </div>

  <div className=" form -group mb-2">
  <label for="exampleQualification" className="form-label">Qualification</label>
    <input type={"text"} className="form-control" placeholder="Enter Your Qualification"
    name="qualification" value={qualification} onChange={(e)=>onInputChange(e)}/>
  </div>

  <div className=" form -group mb-2">
  <label for="exampleYear" className="form-label">Passing Year </label>
    <input type={"number"} className="form-control" placeholder="Enter Your Passing Year"
    name="year" value={year} onChange={(e)=>onInputChange(e)}/>
  </div>

  <div className="col">
      <button onClick={updateplacement} style={{height:"45px", width:"100px"}}
      className="btn btn-success mt-3  mb-3 ">Update</button>
        <Link to ="/placement"> 
    <button  style={{height:"45px", width:"100px"}} className="btn btn-dark mt-3 mb-3 ms-5" >Back</button></Link>
</div>
              </div>
             </div>
        </div>
       
    
);
};
export default UpdatePlacement;