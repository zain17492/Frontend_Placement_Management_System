import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewStudent() {
  
  const [student, setStudent] = useState({
    studentname:"",
    collegename:"",
	  year:"",
    rollno:"",
    course:"",
    qualification:"",
    certificate:"",
    hallticketno:"",
  });

  const { id } = useParams();

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:8080/student/${id}`);
    setStudent(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">View Student Details</h2>

          <div className="card">
            <div className="card-header"> 
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>Student Id :- </b>
                  {student.id}
                </li>
                <li className="list-group-item">
                  <b>Student Name :- </b>
                  {student.studentname}
                </li>

                <li className="list-group-item">
                  <b>College Name :- </b>
                  {student.collegename}
                </li>

                <li className="list-group-item">
                  <b>Roll No :- </b>
                  {student.rollno}
                </li>

                <li className="list-group-item">
                  <b>Qualification :- </b>
                  {student.qualification}
                </li>

                <li className="list-group-item">
                  <b>Hall Ticket Number :- </b>
                  {student.hallticketno}
                </li>

                <li className="list-group-item">
                  <b>Course :- </b>
                  {student.course}
                </li>

                <li className="list-group-item">
                  <b>Certificate :- </b>
                  {student.certificate}
                </li>

                <li className="list-group-item">
                  <b>Year :- </b>
                  {student. year}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/student"}>
            Back 
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ViewStudent;