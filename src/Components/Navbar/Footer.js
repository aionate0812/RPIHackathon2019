import React from 'react'
const Footer = () => {
  return (<>
    <footer className="navbar navbar-expand navbar-light" style={{ "backgroundColor": "#A44A3F", "bottom": "0px", "position": "fixed", "width": "100%" }}>
      <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="https://www.hackrpi.com/">RPI Hackathon 2019</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="https://github.com/aionate0812/RPIHackathon2019">GitHub</a>
          </li>
        </ul>
      </div>
    </footer>
  </>)
}

export default Footer