import React from 'react'
import { Link } from 'react-router-dom'
import awesome from '../image/about.png'
import log from '../image/about2.jpg'

export const About = () => {
  return (
    <div>
      <div className="text-white aboutImg text-center">
        <div className="note-img">
          <h1 className="display-4">Empowering  Students</h1>
          <p>An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee</p>
        </div>
      </div>

      <div className="container mt-5 ">
        <div className='shadow-lg p-3 mb-5 rounded'>
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Make something <span style={{ color: "#9C27B0" }}>Awesome</span> </h2>
              <p>iNotebook is made from the pain of writing all the things in notebook which is very hectic :(, So we mad an online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee.
                you can also access your notes anywhere in your world, at anytime time . So dont forget to Create note because creating anything is always important
              </p>
              <div className="d-flex justify-content-center mt-3">
                <Link className='btn btn-info' to='/' style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Create New Note</Link>
              </div>
            </div>
            <div className="col-md-6">
              <img className="img-fluid awesome" src={awesome} alt="about-awesome" />
            </div>
          </div>
        </div>
        <div className='shadow-lg p-3 mb-5 rounded'>
          <div className="row login mt-5 mb-5 p-5 ">
            <div className="col-md-6">
              <img className="img-fluid" src={log} alt="about-awesome" />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Powering the <span style={{ color: "#9C27B0" }}>internet’s visuals</span> </h2>
              <p>
                How we started? The concept was simple. iNotebook was born from the pain of writing all the things in notebook which is very hectic :( .
                An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee
              </p>
              <div className="d-flex justify-content-center mt-3">
                {!localStorage.getItem('token') ? <Link className='btn btn-warning' to='/signup' style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Create Account Now</Link> : <form className="d-flex">
                  <Link className="" to="/index" role="button"></Link>
                </form>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
