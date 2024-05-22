import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const MainNavbar = () => {
    const navigate = useNavigate()

    let auth = localStorage.getItem("user")
  
  
    const logout = () =>{
      localStorage.clear("user")
      navigate("/login")
  
    }
  return (
    <div>
       {/* <nav  className="navbar navbar-expand-lg navbar-light sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"> <img src="./images/logo.png" alt="image" /> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon " />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link home active fw-bold text-danger" aria-current="page" to="/" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-link fw-bold" href="#">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/aboutUs" className="nav-link fw-bold" href="#">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/faQ" className="nav-link fw-bold" href="#">FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contactUs" className="nav-link fw-bold" href="#">Contact</Link>
                            </li>


                        </ul>
                        <Link to="/trackOrder"><button className="btn btn-danger" type="submit">Register</button></Link>

                    </div>
                </div>
            </nav> */}


<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src="./images/logo.png" alt="image" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Exercise</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/users">My Activities</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/gallery">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
     
     
      </ul>
      <form className="d-flex">     
        {
          auth ? 

          <button onClick={logout} className="btn btn-danger" type="submit">Logout</button>

          :
          <>
            <Link to="/login" className="btn btn-dark" type="submit">Login</Link>
            <Link to="/register" className="btn btn-danger mx-2" type="submit">Register</Link>
          </>
        }
        
        


        
      
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default MainNavbar
