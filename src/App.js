import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Login from "./Components/Login";

import Home from "./Components/Home";

import Ward from "./Components/Ward";

import Doctors from "./Components/Doctors";

import Doctorform from "./doctorregform/Doctorform";


const App = () => {


  const [user, setUser] = useState('');

  const handleusername = (name) => {

    setUser(name);
    console.log("called")
  }




  return (
    <div className="App">
      <Router>

        <Switch>

          <Route exact path="/" render={() => <Login handlename={(username) => handleusername(username)} />} />

          <Route path="/Home" render={() => <Home user={user} />} />

          <Route path="/Ward" render={() => <Ward user={user} />} />

          <Route path="/Doctors" component={Doctors} />

          <Route path="/Doctorform" component={Doctorform} />

          <Route path="/Doctorform/doctor:id" component={Doctorform} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
