
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function User() {
  const [users, setAdmins]= useState([]);

  const { id } = useParams();
  useEffect(()=> {
    loadUsers();
  }, []);

  const loadUsers=async()=>{
    const result =await axios.get("http://localhost:8080/users");
    setAdmins(result.data);
  };
  const deleteUser=async (id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };
  return (
    <div className='container'>
      <div className="py-4">
      <p className="h3 align item center">Users Details</p>
      <Link to={'/adduser'} className ="btn btn-primary ms-2"> 
                                <i className="fa fa-plus-circle me-2"/>New</Link>
      <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">S.N</th>
      <th scope="col">Admin Name</th>
      <th scope="col">Admin Type</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user,index)=>(
       <tr>
          <th scope="row" key={index}>{index+1}</th>
          <td>{user.username}</td>
          <td>{user.usertype}</td>
          <td>{user.password}</td>
          <td>
          <Link to={`/viewuser/${user.id}`} className="btn btn-warning">
              <i className="fa fa-eye"/></Link>

          <Link to={`/updateuser/${user.id}`} className="btn btn-primary">
              <i className="fa fa-pen"/></Link>

          <button className="btn btn-danger my-1" onClick={()=>deleteUser(user.id)}>
              <i className="fa fa-trash"/></button>
          </td>
       </tr>
    ))}
  </tbody>
  
</table>
<Link to={`/`} className= "btn btn-dark">
    Back
  </Link>
      </div>
    </div>
  );
}
export default User;





