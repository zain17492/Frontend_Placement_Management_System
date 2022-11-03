import React from "react";
import "./App.css";
import { BrowserRouter  , Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import Placement from "./pages/Placement";
import AddPlacement from "./pages/AddPlacement";
import UpdatePlacement from "./pages/UpdatePlacement";
import ViewPlacement from "./pages/ViewPlacement";

import Student from "./pages/Student";
import AddStudent from "./pages/AddStudent";
import UpdateStudent from  "./pages/UpdateStudent";
import ViewStudent from "./pages/ViewStudent";

import College from "./pages/College";
import AddCollege from "./pages/AddCollege";
import UpdateCollege from  "./pages/UpdateCollege";
import ViewCollege from "./pages/ViewCollege";

import Certificate from "./pages/Certificate";
import AddCertificate from "./pages/AddCertificate";
import UpdateCertificate from  "./pages/UpdateCertificate";
import ViewCertificate from "./pages/ViewCertificate";

import User from "./pages/User";
import AddUser from "./pages/AddUser";
import UpdateUser from  "./pages/UpdateUser";
import ViewUser from "./pages/ViewUser";

import Admin from "./pages/Admin";
import AddAdmin from "./pages/AddAdmin";
import UpdateAdmin from  "./pages/UpdateAdmin";
import ViewAdmin from "./pages/ViewAdmin";



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}></Route>

        <Route path="/placement" component={Placement}></Route>
        <Route path="/addplacement" component={AddPlacement}></Route>
        <Route path="/updateplacement/:id" component={UpdatePlacement}></Route>
        <Route path="/viewplacement/:id" component={ViewPlacement}></Route>

        <Route path="/student" component={Student}></Route>
        <Route path="/addstudent" component={AddStudent}></Route>
        <Route path="/updatestudent/:id" component={UpdateStudent}></Route>
        <Route path="/viewStudent/:id" component={ViewStudent}></Route>

        <Route path="/college" component={College}></Route>
        <Route path="/addcollege" component={AddCollege}></Route>
        <Route path="/updatecollege/:id" component={UpdateCollege}></Route>
        <Route path="/viewcollege/:id" component={ViewCollege}></Route>

        <Route path="/certificate" component={Certificate}></Route>
        <Route path="/addcertificate" component={AddCertificate}></Route>
        <Route path="/updatecertificate/:id" component={UpdateCertificate}></Route>
        <Route path="/viewcertificate/:id" component={ViewCertificate}></Route>

        <Route path="/user" component={User}></Route>
        <Route path="/adduser" component={AddUser}></Route>
        <Route path="/updateuser/:id" component={UpdateUser}></Route>
        <Route path="/viewuser/:id" component={ViewUser}></Route>

        <Route path="/admin" component={Admin}></Route>
        <Route path="/addadmin" component={AddAdmin}></Route>
        <Route path="/updateadmin/:id" component={UpdateAdmin}></Route>
        <Route path="/viewadmin/:id" component={ViewAdmin}></Route>

        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/login" component={Login}></Route>
        
      </Switch>
      
      </BrowserRouter></>
  );
}

export default App;