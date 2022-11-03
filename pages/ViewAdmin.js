import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewAdmin() {
  
  const [admin, setAdmin] = useState({
    adminname:"",
	password:"",
  });

  const { id } = useParams();

  useEffect(() => {
    loadAdmin();
  }, []);

  const loadAdmin = async () => {
    const result = await axios.get(`http://localhost:8080/admin/${id}`);
    setAdmin(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">View Admin Details</h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>Admin Id :- </b>
                  {admin.id}
                </li>
                <li className="list-group-item">
                  <b>Admin Name :- </b>
                  {admin.adminname}
                </li>
                <li className="list-group-item">
                  <b>Password :- </b>
                  {admin.password}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/admin"}>
            Back 
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ViewAdmin;