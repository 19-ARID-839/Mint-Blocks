import React from 'react'
import logo  from '../Images/logo.png'
import './Header.css';
import {
  Link,
} from "react-router-dom";
const Header = () => {
  // render() {
  //   if (window.location.pathname === '/dashboard') return null;
    
    return (
        
<nav className=" navbar navbar-expand-lg" >
  <div className=" container-fluid d-flex">
    <Link className="navbar-brand " to="/">
      <img className="img-logo" height="50px" src={logo} alt="Mint Block Logo"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/explore">Explore</Link>
        </li>
        <li className="nav-item">
            
            {/* <Link className="nav-link" to="/newsfeed">News Feed</Link> */}
          </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/collections">Collections</Link>
        </li> */}
        <li className="nav-item">
            
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
            
      
          </li>

       
       

      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
    <Link to="/wallet">
    <button className="nav-link nav-btn btn btn-primary" type="button">
     Connect Wallet
     </button>
   </Link>
   
  </div>
</nav>
    )

}
// }


export default Header
