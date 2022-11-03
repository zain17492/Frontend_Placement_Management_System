import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewUser() {
  
  const [user, setUser] = useState({
    username:"",
    usertype:"",
	  password:"",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">View User Details</h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>User Id :- </b>
                  {user.id}
                </li>
                <li className="list-group-item">
                  <b>User Name :- </b>
                  {user.username}
                </li>

                <li className="list-group-item">
                  <b>User Type :- </b>
                  {user.usertype}
                </li>

                <li className="list-group-item">
                  <b>Password :- </b>
                  {user.password}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/user"}>
            Back 
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ViewUser;