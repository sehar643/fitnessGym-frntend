import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import '../style/signup.css'



const Register = () => {

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[file, setFile] = useState('');

  const[userData, setUserData] = useState('')

  let navigate = useNavigate()

  const registerUser = async(e) =>{

    e.preventDefault();

    const formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)
    formData.append("password", password)
    formData.append("photo", file)

    const config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }

      let result = await axios.post("http://localhost:7000/api/v1/auth/register", formData, config)
      let usersList = result.data
      
      // localStorage.setItem("user", JSON.stringify(usersList))
      navigate("/login")
      toast.success(usersList.Message);
      
          
  }



  // let auth = localStorage.setItem("user", JSON.stringify(resp.data))
  // let auth = localStorage.getItem("user", JSON.stringify(resp.data))
  // let auth = localStorage.clear("user", JSON.stringify(resp.data))


  return (
    <div>
        <h2 className='text-primary text-center text-bolder my-4'>Sign-up / Register Page</h2>
<div id="main-wrapper" className="container">
  <div className="row justify-content-center">
    <div className="col-xl-10">
      <div className="card border-0">
        <div className="card-body p-0">
          <div className="row no-gutters">
            <div className="col-lg-6">
              <div className="p-5 bgLeftSide">
                <div className="mb-5">
                  <h3 className="h4 font-weight-bold text-theme">Register</h3>
                </div>
                <h6 className="h5 mb-0">Just Do Register.</h6>
                <p className="text-muted mt-2 mb-5">If You Really Want To Know, Look In The Register.</p>
                <form encType="multipart/form-data">
                  <div className="form-group">
                    <label htmlFor="yourName">Your name</label>
                    <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="yourName" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" />
                  </div>
                  <div className="form-group mb-5">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="form-group mb-5">
                    <label htmlFor="userPhoto">User Photo:</label>
                    <input type="file" name='photo' onChange={(e)=>setFile(e.target.files[0])} className="form-control" id="userPhoto" />
                  </div>
                  <button onClick={registerUser} type="submit" className="col-lg-6 btn btn-primary">Register</button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-inline-block">
              <div className="account-block rounded-right">
                  
                <div className="overlay customBackground rounded-right" />
                <div className="account-testimonial">
                <img src='https://mycareerconnect.com/wp-content/uploads/2022/06/iStock-1332378618.jpg' width={300} height={300} />
                  <h4 className="text-white mb-4">This beautiful theme yours!</h4>
                  <p className="lead text-white">"Best investment i made for a long time. Can only recommend it for other users."</p>
                  {/* <p>- Admin User</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end card-body */}
      </div>
      {/* end card */}
      <p className="text-muted text-center mt-3 mb-0">Already have an account? 
      <Link to="/login" className="text-primary ml-1">login</Link>
      
      </p>
      {/* end row */}
    </div>
    {/* end col */}
  </div>
  {/* Row */}
</div>
<Toaster />
    </div>
  )
}

export default Register
