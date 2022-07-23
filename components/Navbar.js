import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = (props) => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link href='/'><a className="navbar-brand" >Dream Project</a></Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href='/'><a className="nav-link active" aria-current="page">Home</a></Link>

              </li>
              <li className="nav-item">
                <Link href='/about'><a className="nav-link">About</a></Link>

              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            
            <Link href='/contact'>
              <a className="nav-link ms-2">Contact</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* to display content */}
      
    </div >
  )
}


export default Navbar