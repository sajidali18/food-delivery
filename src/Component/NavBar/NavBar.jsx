import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <header className="d-flex flex-wrap container-width  justify-content-center  py-3 mb-4 border-bottom bg-dark">
      <div className="col-md-3 mb-2 mb-md-0 logo">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          <img className="pb-1" src="	https://themewagon.gitlab.io/restaurant/assets/img/logo.png" alt="logo" />
        </a>
      </div>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 linktext">
        <li><a href="#" className="nav-link px-4  text-light">Home</a></li>
        <li><a href="#" className="nav-link px-4  text-light">Page</a></li>
        <li><a href="#" className="nav-link px-4  text-light">Menu</a></li>
        <li><a href="#" className="nav-link px-4  text-light">Components</a></li>
        <li><a href="#" className="nav-link px-4  text-light">Utilities</a></li>
        <li><a href="#" className="nav-link px-4  text-light">Plugins</a></li>
      </ul>
      <ul className="nav col-12 col-md-auto mx-5 butn">
        <li className="nav-item">
          <button className="btn btn-outline-primary reserved"><span className="d-none d-xl-inline">Make a </span>Reservation</button>
        </li>
      </ul>
    </header>

  )
}

export default NavBar