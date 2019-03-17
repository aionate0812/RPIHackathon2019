import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () =>{
  return (<>
  <nav className="navbar navbar-expand-lg navbar-light" style={{"backgroundColor":"#D4E09B"}}>
  <a className="navbar-brand" href="https://www.hackrpi.com/">RPI Hackathon 2019</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
    <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
    <Link className="nav-link" to="/ifelse">If/Else</Link>
      </li>
      <li className="nav-item">
    <Link className="nav-link" to="/loops">Loops</Link>
      </li>
      <li className="nav-item">
    <Link className="nav-link" to="/apicalls">API</Link>
      </li>
    </ul>
  </div>
</nav>
  </>)
}

export default Navbar