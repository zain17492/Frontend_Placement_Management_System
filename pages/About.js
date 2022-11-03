import React from "react";
import down from "../assets/down.png";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${down})` }}>
        </div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        The major goal of the Placement Management System 
        to construct Training and Placement Management Systems 
        is to eliminate human errors and create a computerized system. 
        There are several sorts of modules accessible in this project 
        to manage the application, company, and placement.
        </p>
      </div>
    </div>
  );
}
export default About;