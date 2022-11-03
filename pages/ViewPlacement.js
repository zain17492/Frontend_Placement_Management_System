import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewPlacement() {
  
  const [placement, setPlacement] = useState({
    name:"",
	collegename:"",
	 date:"",
	  qualification:"",
	 year:"",
  });

  const { id } = useParams();

  useEffect(() => {
    loadPlacement();
  }, []);

  const loadPlacement = async () => {
    const result = await axios.get(`http://localhost:8080/placement/${id}`);
    setPlacement(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">View Placement Details</h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>Placement Id :- </b>
                  {placement.id}
                </li>
                <li className="list-group-item">
                  <b>Placement Name :- </b>
                  {placement.name}
                </li>
                <li className="list-group-item">
                  <b>College Name :- </b>
                  {placement.collegename}
                </li>
                <li className="list-group-item">
                  <b>Date :- </b>
                  {placement.date}
                </li>
                <li className="list-group-item">
                  <b>Qualification :- </b>
                  {placement.qualification}
                </li>
                <li className="list-group-item">
                  <b>Year :- </b>
                  {placement.year}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/placement"}>
            Back 
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ViewPlacement;