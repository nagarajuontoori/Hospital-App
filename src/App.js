import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Login from "./Components/Login";

import Home from "./Components/Home";

import Ward from "./Components/Ward";

import Nav from "./Components/Nav";

import Doctors from "./Components/Doctors";

import Doctorform from "./doctorregform/Doctorform";
import Newmodal from "./Components/Newmodal";


const App = () => {


  const [user, setUser] = useState('');

  const handleusername = (name) => {

    setUser(name);
    console.log(name)
  }




  return (
    <div className="App">
      <Router>

        <Route exact path="/" render={() => <Login handlename={(username) => handleusername(username)} />} ></Route>
        <Nav user={user} />
        <Switch>


          <Route path="/Home" render={() => <Home user={user} />} />

          <Route path="/Ward" render={() => <Ward user={user} />} />

          <Route path="/Doctors" component={Doctors} />

          <Route path="/Doctorform" component={Doctorform} />

          <Route path="/Doctorform/doctor:id" component={Doctorform} />

          <Route path="/Newmodal" component={Newmodal} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
