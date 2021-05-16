import React from "react";
import {Route } from "react-router-dom";
import Home from "./screen/Home";
import Login from "./screen/Login";
import Registration from "./screen/Registration";
import Contact from "./screen/Contact";
import TeacherSignup from "./screen/TeacherSignup";
import TeacherLogin from "./screen/TeacherLogin";
import StudentSignup from "./screen/StudentSignup";
import StudentLogin from "./screen/StudentLogin";
import Navbar from "../src/components/Navbar";

const App =()=>{
  return(
    <div>
      <Navbar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/registration'>
        <Registration />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
      <Route path='/teacherSignup'>
        <TeacherSignup />
      </Route>
      <Route path='/studentSignup'>
        <StudentSignup />
      </Route>
      <Route path='/teacherLogin'>
        <TeacherLogin />
      </Route>
      <Route path='/studentLogin'>
        <StudentLogin />
      </Route>
    </div>
  );
}

export default App;