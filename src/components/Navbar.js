import React from 'react';
import PropTypes from 'prop-types'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
// Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min"

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    {/* <img src="src\images\my.jpg" width="30" height="30" className="d-inline-block align-top" alt=""/> */}
                    {props.firstcolumn}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">{props.secondcolumn}</a>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about">{props.thirdcolumn}</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        Fresher Software Developer 2023 Gaduated<br></br>
                        Skilled in Java, C++, HTML, CSS, JavaScript, Mongodb 
                    </span>
                    <div className={`form-check form-switch text-${props.mode === 'light'?'dark' : 'light'}`}>
                        <input className="form-check-input" onClick= {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                    
                </div>
            </div>
        </nav>
        
    )
}

Navbar.propTypes = {
    firstcolumn: PropTypes.string
}