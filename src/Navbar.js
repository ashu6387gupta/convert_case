import React from "react";
import "./App.css";
import PropTypes from "prop-types";
export default function Navbar(propy) {
  const toggleColor = () =>
  {
   document.body.classList.toggle("body-color");
   if(document.body.classList.contains("body-color")){
    propy.showAlert("Dark mode enabled","Success");
   }
   else{
    propy.showAlert("Light mode enabled","Success");
   }
  }
  if(document.body.classList.contains('body-color'))
  {
    
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {propy.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {propy.aboutprops}
              </a>
            </li>
          </ul>
          <div className="form-check form-switch mx-2">
            <input type="checkbox" className="form-check-input" id="darkSwitch" onClick={toggleColor}/>
            <label className="custom-control-label text-dark" htmlFor="darkSwitch">Enable Dark Mode</label>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutprops: PropTypes.string,
};
