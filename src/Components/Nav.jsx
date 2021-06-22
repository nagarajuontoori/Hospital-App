import React from "react";
import { Link } from "react-router-dom";






const Nav = (props) => {
  return (

    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="d-flex container-fluid ">
          <div className="d-flex font-monospace font-weight-bold ">
            <Link to="/Home" className="mx-4 text-decoration-none " data-bs-toggle="tooltip" data-bs-placement="left" title="Hospital"><h2>Hospital</h2></Link>


            <div className="vertical"></div>

            <Link to="/Ward" className="m-6  text-decoration-none "><h2>Ward</h2></Link>



            <div className="vertical1"></div>

            <Link to="/Doctors" className="m-6 px-4  text-decoration-none " ><h2>Doctors</h2></Link>

            <span className="text-primary   m-2 ">{props.user1}</span>

          </div>
        </div>
      </nav>
    </div>

  )

}


export default Nav;