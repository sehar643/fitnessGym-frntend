import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "../style/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:7000/api/auth/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { token, user } = response.data; // Assume response contains token and user object
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/users");
    } catch (error) {
      setError("Invalid email or password");
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className="text-primary text-center text-bolder my-4">Login page</h2>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-group mb-0">
              <div className="card p-4">
                <div className="card-body">
                  <h1>Login</h1>
                  <p className="text-muted">Sign In to your account</p>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className="input-group mb-3">
                    <span className="input-group-addon">
                      <i className="fa fa-user" />
                    </span>
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      className="form-control"
                      placeholder="User email"
                    />
                  </div>
                  <div className="input-group mb-4">
                    <span className="input-group-addon">
                      <i className="fa fa-lock" />
                    </span>
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      name="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button
                        onClick={loginUser}
                        type="button"
                        className="btn btn-primary px-4"
                      >
                        Login
                      </button>
                    </div>
                    <div className="col-6 text-right">
                      <button type="button" className="btn btn-link px-0">
                        Forgot password?
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <div className="card-body text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link
                      to="/register"
                      type="button"
                      className="btn btn-primary active mt-3"
                    >
                      Register Now!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios';

// import '../style/login.css'

// const Login = () => {

//   const[email, setEmail] = useState('');
//   const[password, setPassword] = useState('');

//   const[userData, setUserData] = useState('')

//   let navigate = useNavigate()

//   const loginUser = async(e) =>{

//     e.preventDefault();

//       let result = await axios.post("http://localhost:7000/api/v1/auth/login", {
//         email, password,
//         headers:{
//             "Content-Type": "application/json"
//         }
//       })
//       let usersList = result.data
//       localStorage.setItem("user", JSON.stringify(usersList))
//       navigate("/users")

//   }

//   return (
//     <div>
//         <h2 className='text-primary text-center text-bolder my-4'>Login page</h2>
//         <div className="container">
//   <div className="row justify-content-center">
//     <div className="col-md-8">
//       <div className="card-group mb-0">
//         <div className="card p-4">
//           <div className="card-body">
//             <h1>Login</h1>
//             <p className="text-muted">Sign In to your account</p>
//             <div className="input-group mb-3">
//               <span className="input-group-addon"><i className="fa fa-user" /></span>
//               <input type="email" onChange={(e)=>setEmail(e.target.value)} name="email" className="form-control" placeholder="User email" />
//             </div>
//             <div className="input-group mb-4">
//               <span className="input-group-addon"><i className="fa fa-lock" /></span>
//               <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" className="form-control" placeholder="Password" />
//             </div>
//             <div className="row">
//               <div className="col-6">
//                 <button onClick={loginUser} type="button" className="btn btn-primary px-4">Login</button>
//               </div>
//               <div className="col-6 text-right">
//                 <button type="button" className="btn btn-link px-0">Forgot password?</button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="card text-white bg-primary py-5 d-md-down-none" style={{width: '44%'}}>
//           <div className="card-body text-center">
//             <div>
//               <h2>Sign up</h2>
//               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//               <Link to="/register" type="button" className="btn btn-primary active mt-3">Register Now!</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//     </div>
//   )
// }

// export default Login
