import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewCertificate() {
  
  const [certificate, setCertificate] = useState({
    collegename:"",
    year:"",
  });

  const { id } = useParams();

  useEffect(() => {
    loadCertificate();
  }, []);

  const loadCertificate = async () => {
    const result = await axios.get(`http://localhost:8080/certificate/${id}`);
    setCertificate(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">View Certificate Details</h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>Certificate Id :- </b>
                  {certificate.id}
                </li>
                <li className="list-group-item">
                  <b>College Name :- </b>
                  {certificate.collegename}
                </li>

                <li className="list-group-item">
                  <b>Year :- </b>
                  {certificate.year}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/certificate"}>
            Back 
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ViewCertificate;