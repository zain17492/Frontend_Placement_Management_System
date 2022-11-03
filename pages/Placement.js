
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Placement() {
  const [placements, setPlacements]= useState([]);

  const { id } = useParams();
  useEffect(()=> {
    loadPlacements();
  }, []);

  const loadPlacements=async()=>{
    const result =await axios.get("http://localhost:8080/placements");
    setPlacements(result.data);
  };
  const deletePlacement =async (id)=>{
    await axios.delete(`http://localhost:8080/placement/${id}`)
      .then ((result)=>{
        loadPlacements();
      })
      .catch(()=>{
        alert(`Error in the code`);
      });
    };
  return (
    <div className='container'>
      <div className="py-4">
      <p className="h3 align item center">Placements Details
       <Link to={'/addplacement'} className ="btn btn-primary ms-2"> 
        <i className="fa fa-plus-circle me-2"/> New</Link>
      </p>
      
      <table className="table border shadow mt-5">
  <thead>
    <tr>
      <th scope="col">S.N</th>
      <th scope="col">Placement Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {placements.map((placement,index)=>(
       <tr>
          <th scope="row" key={index}>{index+1}</th>
          <td>{placement.name}</td>
          <td>
          <Link to={`/viewplacement/${placement.id}`} className="btn btn-warning ms-4">
              <i className="fa fa-eye my-2 me-2"/>View</Link>

          <Link to={`/updateplacement/${placement.id}`} className="btn btn-primary  ms-4">
              <i className="fa fa-pen my-2 me-2 "/>Edit</Link>

              <button style={{height:"45px", width:"100px"}} className="btn btn-danger ms-4" 
          onClick={()=>{
            const confirmBox = window.confirm(
              "Do you really want to delete the details of " +  placement.name
            )
            if (confirmBox===true){
              deletePlacement(placement.id)
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
export default Placement;





