import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams ,} from "react-router-dom";


function UpdateUser() {
  let history = useHistory()

  const {id}= useParams()
  
  const [user,setUser]=useState({
    username:"",
    usertype:"",
    password:""
  })

  const{username,usertype,password}=user;

  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});

  };

  useEffect(()=>{
    loadUser()
  },[]);

  

  const updateuser= async (e)=>{
     e.preventDefault();
     await axios.put(`http://localhost:8080/user/${id}`,user)
     history.push("/user");
  };

  const loadUser = async() =>{
    const result=await axios.get(`http://localhost:8080/user/${id}`)
    setUser(result.data)
  }
  
  return(

      
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-8 offset-2  x-auto shadow p-5">
               <h2 className="text-center mb-4 ">Update User Detail</h2>
               <h5 className="text">User ID :{user.id}</h5>
               
              

  <div className=" form -group mb-2">
  <label for="Username" className="form-label">User Name</label>
    <input type={"name"} className="form-control" placeholder="Enter User Name"
    name="username" value={username} onChange={(e)=>onInputChange(e)}/>
  </div>

  <div className="form-group mb-2">
  <label for="Usertype" className="form-label">User Type</label>
    <input type={"text"} className="form-control" placeholder="Enter User Type"
    name="usertype" value={usertype} onChange={(e)=>onInputChange(e)}/>
  </div>

  <div className=" form -group mb-2">
  <label for="Password" className="form-label">Password </label>
    <input type={"password"} className="form-control" placeholder="Enter Your Password"
    name="password" value={password} onChange={(e)=>onInputChange(e)}/>
  </div>


  <div className="col">
      <button onClick={updateuser} style={{height:"45px", width:"100px"}}
      className="btn btn-success mt-3  mb-3 ">Update</button>

        <Link to ="/user"> 
    <button  style={{height:"45px", width:"100px"}} 
        className="btn btn-dark mt-3 mb-3 ms-5" >Back</button></Link>
        </div>
              </div>
             </div>
        </div>
       
    
);
};

export default UpdateUser;