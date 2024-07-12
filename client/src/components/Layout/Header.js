import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import {GiShoppingBag } from 'react-icons/gi'
import { useAuth } from '../../context/auth'
import  {toast}  from 'react-toastify'

const Header = () => {
  const [auth,setAuth] = useAuth()
  const handleLogout=()=>{
    setAuth({
      ...auth,
      user:null,
      token:''
    })
    localStorage.removeItem('auth');
    toast.success('Logout Successfully');
  }
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to="/" className="navbar-brand" ><GiShoppingBag/>Technoland</Link >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link " >Home</NavLink >
        </li>
        {
          !auth.user ? (<>
          <li className="nav-item">
          <NavLink to="/register" className="nav-link" >Register</NavLink >
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link " aria-disabled="true">Login</NavLink>
        </li>
          </>) : (<>
            <li className="nav-item">
          <NavLink onClick={handleLogout} to="/login" className="nav-link " aria-disabled="true">Logout</NavLink>
        </li>
          </>)
        }
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link " aria-disabled="true">Cart</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}

export default Header
