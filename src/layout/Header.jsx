
import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'; 

export default function Header() {

$(document).ready(() => {
  $(document).scroll(() => {
    $('header').addClass('sticky')
    // if(document.scroll > 0) {
    //   alert('')
    // }
   })
})


  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand logo " href="#"><span className='logo-m'>M</span><span>Dandriyal</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="header-logo mb-4">
            <a className="navbar-brand  logo" href="#"><span className='logo-m'>M</span><span>Dandriyal</span></a>

              </div>
              <ul className="navbar-nav gap-4 ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a href='#home' className="nav-link active">Home</a>
                </li>

                <li className="nav-item">
                <a className="nav-link active" href="#about">About</a>
                </li>

                <li className="nav-item">
                <a href='#resume' className="nav-link active">Resume</a>
                </li>

                <li className="nav-item">
                  <a href='#skill' className="nav-link active">Skills</a>
                </li>

                <li className="nav-item">
                  <a href='#project' className="nav-link active">Project</a>
                </li>

                <li className="nav-item">
                  <a href='#contact' className="nav-link active">Contact </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
