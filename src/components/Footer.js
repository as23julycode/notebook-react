import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            {/* <!-- Footer --> */}
            <footer className="page-footer font-small teal pt-4">

                {/* <!-- Footer Text --> */}
                <div className="container-fluid text-center text-md-left">

                    {/* <!-- Grid row --> */}
                    <div className="row">

                        {/* <!-- Grid column --> */}
                        <div className="col-md-5 mt-md-0 mt-" style={{ color: "white" }}>

                            {/* <!-- Content --> */}
                            <h5 className="text-uppercase font-weight-bold"><span style={{ color: "#00ff00" }}>Cloud Notebook</span></h5>
                            <p>An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee</p>

                        </div>
                        {/* <!-- Grid column --> */}

                        <div className="col-md-1 mx-auto">

                            {/* <!-- Links --> */}
                            <h5 className="font-weight-bold text-uppercase mb-3">Links</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>

                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-1 mx-auto mt-0">
                        <h5 className="font-weight-bold text-uppercase mb-3">Links</h5>
                        <ul className="list-unstyled mx-3 d-grid gap-3">
                        <li> <Link to="/"><i className="fab fa-twitter fa-lg" style={{fontSize:'33px'}}></i></Link></li>
                        <li>  <Link to="/"><i className="fab fa-instagram fa-lg"  style={{fontSize:'33px'}}></i></Link></li>
                        <li>  <Link to="/"><i className="fab fa-linkedin-in fa-lg"  style={{fontSize:'33px'}}></i></Link></li>
                        
                            </ul>
                        </div>
                        {/* <!-- Grid column --> */}

                    </div>
                    {/* <!-- Grid row --> */}

                </div>
                {/* <!-- Footer Text --> */}

                {/* <!-- Copyright --> */}
                <div className="footer-copyright text-center py-3" style={{ color: "white" }}>© 2023 Copyright:
                    <a href="/" style={{ color: "yellow" }}> Aditya Singh</a>
                </div>
                {/* <!-- Copyright -->/ */}

            </footer>
            {/* <!-- Footer --> */}
        </div>
    )
}

export default Footer
