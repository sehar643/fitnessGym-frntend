import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.png";

const MainNavbar = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");

  let user = localStorage.getItem("user");

  useEffect(() => {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    if (user?.role == "admin") {
      setRole("admin");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };
  return (
    <>
      <div>
        {role == "user" ? (
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="image" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products">
                      Exercise
                    </Link>
                  </li>
                  {/* <li className="nav-item">
          <Link className="nav-link" to="/users">My Activities</Link>
        </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/user-list">
                      My Activities
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/gallery">
                      Gallery
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                  {role === "admin" ? (
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin">
                        Admin
                      </Link>
                    </li>
                  ) : null}
                </ul>
                <form className="d-flex">
                  {user ? (
                    <button
                      onClick={logout}
                      className="btn btn-danger"
                      type="submit"
                    >
                      Logout
                    </button>
                  ) : (
                    <>
                      <Link to="/login" className="btn btn-dark" type="submit">
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="btn btn-danger mx-2"
                        type="submit"
                      >
                        Register
                      </Link>
                    </>
                  )}
                </form>
              </div>
            </div>
          </nav>
        ) : null}
      </div>
    </>
  );
};

export default MainNavbar;
