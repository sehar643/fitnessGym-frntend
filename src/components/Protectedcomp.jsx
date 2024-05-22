import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
const Protectedcomp = () => {

   let auth = localStorage.getItem("user")

  return (
    <div>
        {auth ? <Outlet /> :  <Navigate to="/login" />}
    </div>
  )
}

export default Protectedcomp
