import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewCollege() {
  
  const [college, setCollege] = useState({
    collegename:"",
    collegeadmin:"",
	  location:"",
  });

  const { id } = useParams();

  useEffect(() => {
    loadCollege();
  }, []);

  const loadCollege = async () => {
    const result = await axios.get(`http://localhost:8080/college/${id}`);
    setCollege(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">View College Details</h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>College id :- </b>
                  {college.id}
                </li>
                <li className="list-group-item">
                  <b>College Name :- </b>
                  {college.collegename}
                </li>

                <li className="list-group-item">
                  <b>College Admin :- </b>
                  {college.collegeadmin}
                </li>

                <li className="list-group-item">
                  <b>Location :- </b>
                  {college.location}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/college"}>
            Back 
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ViewCollege;