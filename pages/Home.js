import React from "react";
import BannerImage from "../assets/head.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Placement Management System </h1>
      <p>Placement management software allows to plan placements, train the students as per relevant market requirements, organize recruitment drives and let companies recruit students. </p>

    <p>Students can register for placements online without help from the college placement management team each time they need to do so. The relevant details and documents can all be turned in online.
    Process of Placement Management software
    The process is relatively simple.
    <hr/>
    </p> 
        
      </div>
    </div>
  );
}

export default Home;