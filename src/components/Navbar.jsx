import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm fixed-top bg-white">
      <div className="container my-2">
        <a href="/" className="navbar-brand text-dark font-weight-bold"
          >Prakash Reddy</a
        >

        <button className="btn btn-outline-success ml-auto">Contact Me</button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fas fa-bars text-dark"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
          <div className="navbar-nav">
            <a
              href="#"
              className="nav-item nav-link text-dark h6 font-weight-bold mx-3"
              >Projects</a
            >
          </div>
          {/* <div className="navbar-nav">
            <a
              href="#"
              className="nav-item nav-link text-dark h6 font-weight-bold mx-3"
              >Blogs</a
            >
          </div> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
