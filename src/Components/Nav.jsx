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

            <span className="text-primary   m-2 "></span>



          </div>

          <div className="dropdown mx-5">
            <a class="text-light dropdown-toggle mx-5" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <b className="text-light"> Hii, {props.user}</b>
            </a>

            <div className="dropdown-menu text-light" aria-labelledby="dropdownMenu">
              <Link className="dropdown-item bg-light " to="./">signout</Link>
            </div>
          </div>

        </div>
      </nav>
    </div>

  )

}


export default Nav;