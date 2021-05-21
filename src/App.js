import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";
import Home from "./screen/Home";
import Login from "./screen/Login";
import Registration from "./screen/Registration";
import Contact from "./screen/Contact";
import TeacherSignup from "./screen/TeacherSignup";
import TeacherLogin from "./screen/TeacherLogin";
import StudentSignup from "./screen/StudentSignup";
import StudentLogin from "./screen/StudentLogin";
import Navbar from "./components/Navbar";
import UploadQuestion from './screen/UploadQuestion';

const App =()=>{
  return(
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/registration'>
          <Registration />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/teacherSignup'>
          <TeacherSignup />
        </Route>
        <Route exact path='/studentSignup'>
          <StudentSignup />
        </Route>
        <Route exact path='/teacherLogin'>
          <TeacherLogin />
        </Route>
        <Route exact path='/studentLogin'>
          <StudentLogin />
        </Route>
        <Route exact path = "/uploadQuestion">
          <UploadQuestion />
        </Route>
      </Switch>
    </div>
  );
}

export default App;