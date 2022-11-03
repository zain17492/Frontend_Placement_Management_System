import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams} from "react-router-dom";


function UpdateAdmin() {
  let history = useHistory()

  const {id}= useParams()
  
  const [admin,setAdmin]=useState({
    adminname:"",
    password:""
  })

  const{adminname,password}=admin;

  const onInputChange=(e)=>{
    setAdmin({...admin,[e.target.name]:e.target.value});
  };

  useEffect(()=>{
    loadAdmin()
  },[]);

  const updateadmin= async (e)=>{
     e.preventDefault();
     await axios.put(`http://localhost:8080/admin/${id}`,admin)
     history.push("/admin");
  };

  const loadAdmin = async() =>{
    const result=await axios.get(`http://localhost:8080/admin/${id}`)
    setAdmin(result.data)
  }
  
  return(

      
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-8 offset-2  x-auto shadow p-5">
               <h2 className="text-center mb-4 ">Update Admin Detail</h2>
               <h5 className="text">Admin ID :{admin.id}</h5>

               <div className="form-group mb-2">
  <label for="Adminname" className="form-label"> Admin Name</label>
    <input type={"name"} className="form-control" placeholder="Enter Admin Name"
    name="adminname" value={adminname} onChange={(e)=>onInputChange(e)}/>
  </div>

  <div className=" form -group mb-2">
  <label for="Password" className="form-label">Password </label>
    <input type={"password"} className="form-control" placeholder="Enter Your Password"
    name="password" value={password} onChange={(e)=>onInputChange(e)}/>
  </div>


  <div className="col">
<button onClick={updateadmin} style={{height:"45px", width:"100px"}}
className="btn btn-success mt-3  mb-3 ">Update</button>
    <Link to ="/admin"> 
    <button  style={{height:"45px", width:"100px"}}
     className="btn btn-dark mt-3 mb-3 ms-5" >Back</button></Link>
</div>
              </div>
             </div>
        </div>
       
    
);
};
export default UpdateAdmin;