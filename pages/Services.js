
import React from "react";
import { Link } from "react-router-dom";
import {Card,CardHeader,ListGroup,ListGroupItem } from "reactstrap";



function Services() {
  return (
    <React.Fragment>
      <section className="pms">
      <div className="container">
      <div className="row">
      <div className="col">
      <p className="h3 text-success fw-bold mt-2" >Placement Management System</p>
      </div>
      </div>
      <div className="row">
              
              <Card style={{width: '18rem'}}>
  <CardHeader className="h5 fw-bold  " style={{ backgroundColor: `dark` }} >
    Add Operation
  </CardHeader>
  <ListGroup flush>
    <div className="mb-2">
    <Link to ="/addstudent"> 
    <ListGroupItem>
      Student List
    </ListGroupItem></Link>
    </div>
    
    <div className="mb-2">
    <Link to ="/addcollege"> 
    <ListGroupItem>
      College List
    </ListGroupItem></Link>
    </div>

    <div className="mb-2">
    <Link to ="/addplacement"> 
    <ListGroupItem>
      Placement List
    </ListGroupItem></Link>
    </div>

    <div className="mb-2">
    <Link to ="/addcertificate"> 
    <ListGroupItem>
      Certificate List
    </ListGroupItem></Link>
    </div>

    <div className="mb-2">
    <Link to ="/userlist"> 
    <ListGroupItem>
      User List
    </ListGroupItem></Link>
    </div>

    <div className="mb-2">
    <Link to ="/addadmin"> 
    <ListGroupItem>
      Admin List
    </ListGroupItem></Link>
    </div>
  </ListGroup>

  <div  className="mt-2 mb-2">
    <Link to ="/"> 
    <button className="btn btn-dark " >Back</button></Link>
  </div>
</Card>

                </div>
              </div>
      
      </section>
    </React.Fragment>
    
  );
}

export default Services;





