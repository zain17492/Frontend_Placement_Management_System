
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function College() {
  const [colleges, setColleges]= useState([]);

  const { id } = useParams();
  useEffect(()=> {
    loadColleges();
  }, []);

  const loadColleges=async()=>{
    const result =await axios.get("http://localhost:8080/colleges");
    setColleges(result.data);
  };
  const deleteCollege =async (id)=>{
    await axios.delete(`http://localhost:8080/college/${id}`)
    .then ((result)=>{
      loadColleges();
    })
    .catch(()=>{
      alert(`Error in the code`);
    });
  };
  return (
    <div className='container'>
      <div className="py-4">
      <p className="h3 align item center">Colleges Details
      <Link to={'/addcollege'} className ="btn btn-primary ms-2"> 
      <i className="fa fa-plus-circle me-2 "/>New</Link></p>
      <table className="table border shadow mt-5">
  <thead>
    <tr>
      <th scope="col">S.N</th>
      <th scope="col">College Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {colleges.map((college,index)=>(
       <tr>
          <th scope="row" key={index}>{index+1}</th>
          <td>{college.collegename}</td>
          <td>
          <Link to={`/viewcollege/${college.id}`} className="btn btn-warning ms-4">
              <i className="fa fa-eye my-2 me-2"/>View</Link>

          <Link to={`/updatecollege/${college.id}`} className="btn btn-primary  ms-4">
              <i className="fa fa-pen my-2 me-2 "/>Edit</Link>

              <button style={{height:"45px", width:"100px"}} className="btn btn-danger ms-4" 
          onClick={()=>{
            const confirmBox = window.confirm(
              "Do you really want to delete the details of " +  college.collegename
            )
            if (confirmBox===true){
              deleteCollege(college.id)
            }
          }}>
          <i className="fa fa-trash my-2 me-2"/>Delete</button>
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
export default College;





