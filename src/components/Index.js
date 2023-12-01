import React from 'react'
import { Link } from 'react-router-dom'
import noteimg from '../image/inotebook.jpg'
import DisplayNote from './DisplayNotes';
import Footer from './Footer';


const Index = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-5">
                    <h1 className="display-1 pt-3 ps-5 respo"><span style={{ color: "#9C27B0" }}>i</span>Notebook</h1>
                    <p className="ps-5 respo" style={{ fontSize: "1.7rem", fontWeight: "bold" }}>Your notebook on cloud - safe and secure</p>
                    <p className="ps-5 mt-3 respo" style={{ fontSize: "1.1rem" }}>An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee. For more info you can checkout our <Link to="/about" className='badge badge-success'>About Page</Link>  </p>
                    <div className="d-flex justify-content-center">
                        <Link className='btn btn-info' to='/' style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Create New Note</Link>
                    </div>
                </div>
                <div className="col-md-7 d-flex flex-column align-items-center">
                    <img className="img-fluid" src={noteimg} alt="iNotebook" />
                </div>
            </div>
            {!localStorage.getItem('token') ? <Footer/>: <DisplayNote/>}
        </div>
    )
}

export default Index
