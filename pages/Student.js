
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Student() {
  const [students, setStudents]= useState([]);

  const { id } = useParams();
  useEffect(()=> {
    loadStudents();
  }, []);

  const loadStudents=async()=>{
    const result =await axios.get("http://localhost:8080/students");
    setStudents(result.data);
  };
  const deleteStudent =async (id)=>{
    await axios.delete(`http://localhost:8080/student/${id}`)
    .then ((result)=>{
      loadStudents();
    })
    .catch(()=>{
      alert(`Error in the code`);
    });
  };
  return (
    <div className='container'>
      <div className="py-4">
      <p className="h3 center-success">Students Details
      <Link to={'/addstudent'} className ="btn btn-primary ms-2"> 
      <i className="fa fa-plus-circle me-2 "/>New</Link>
       </p>
                               
      <table className="table border shadow mt-5 ">
  <thead>
    <tr>
      <th scope="col">S.N</th>
      <th scope="col">Students Name</th>
      <th scope="col ms-4">Action</th>
    </tr>
  </thead>
  <tbody>
    {students.map((student,index)=>(
       <tr>
          <th scope="row" key={index}>{index+1}</th>
          <td>{student.studentname}</td>
          <td>
          <Link to={`/viewstudent/${student.id}`} className="btn btn-warning ms-4">
              <i className="fa fa-eye my-2 me-2"/>View</Link>

          <Link to={`/updatestudent/${student.id}`}  className="btn btn-primary  ms-4">
              <i className="fa fa-pen my-2 me-2 "/>Edit</Link>

              <button style={{height:"45px", width:"100px"}} className="btn btn-danger ms-4" 
          onClick={()=>{
            const confirmBox = window.confirm(
              "Do you really want to delete the details of " +  student.studentname
            )
            if (confirmBox===true){
              deleteStudent(student.id)
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
export default Student;





