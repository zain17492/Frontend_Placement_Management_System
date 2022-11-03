import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams ,} from "react-router-dom";


function UpdateCertificate() {
  let history = useHistory()

  const {id}= useParams()
  
  const [certificate,setCertificate]=useState({
    collegename:"",
    year:""
  })

  const{collegename,year}=certificate;

  const onInputChange=(e)=>{
    setCertificate({...certificate,[e.target.name]:e.target.value});
  };

  useEffect(()=>{
    loadCertificate()
  },[]);

  const updatecertificate= async (e)=>{
     e.preventDefault();
     await axios.put(`http://localhost:8080/certificate/${id}`,certificate)
     history.push("/certificate");
  };

  const loadCertificate = async() =>{
    const result=await axios.get(`http://localhost:8080/certificate/${id}`)
    setCertificate(result.data)
  }
  
  return(

      
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-8 offset-2  x-auto shadow p-5">
               <h2 className="text-center mb-4 ">Update Certificate Detail</h2>
               <h5 className="text">Certificate ID :{certificate.id}</h5>

               <div className="form-group mb-2">
  <label for="Name" className="form-label"> College Name</label>
    <input type={"text"} className="form-control" placeholder="Enter College Name"
    name="collegename" value={collegename} onChange={(e)=>onInputChange(e)}/>
  </div>

  <div className=" form -group mb-2">
  <label for="Password" className="form-label">Year </label>
    <input type={"number"} className="form-control" placeholder="Enter Year"
    name="year" value={year} onChange={(e)=>onInputChange(e)}/>
  </div>

  <div className="col">
      <button onClick={updatecertificate} style={{height:"45px", width:"100px"}}
      className="btn btn-success mt-3  mb-3 ">Update</button>
      
        <Link to ="/certificate"> 
    <button  style={{height:"45px", width:"100px"}} 
        className="btn btn-dark mt-3 mb-3 ms-5" >Back</button></Link>
</div>
   

              </div>
             </div>
        </div>
       
    
);
};
export default UpdateCertificate;