import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { FaCartShopping } from "react-icons/fa6";
import productContext from '../context/productContext';

const Navbar = (props) => {
    const context = useContext(productContext);
    const {
      state: { cart },
    } = context;
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active"> 
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">Sign Up</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Profile">Profile</Link>
      </li>
      <li className="nav-item">
                <Link className="nav-link position-relative" to="/cartitems">
                  <FaCartShopping />
                  <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link>
              </li>
    </ul>
   
    <button type="button" className="btn btn-success btnnav" onClick={props.toggleMode} >{props.btn}</button>
    <ToastContainer style={{ marginTop: "50px" }} />
  </div>
</nav>
    </div>
  )
}

export default Navbar
