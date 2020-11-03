import React from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import "../CSS/navbar.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import {auth} from '../firebase';

function Navbar() {
  const [{ cart,user }, dispatch] = useStateValue();

  const handleAuthentication = () =>{
    if(user){
    auth.signOut();
  }
}
  return (
    <div className="navbar">
      <a href="/">
        <img
          className="logo"
          src="https://www.pinclipart.com/picdir/big/358-3584545_amazon-web-services-logo-png-transparent-svg-vector.png"
          alt="Logo"
        />
      </a>
      <div className="navbar-search">
        <input className="navbar-search-input" type="text" />
        <SearchRoundedIcon className="search-icon" />
      </div>
      <div className="navbar-menu">
      <Link to={!user && '/login'}>
        <div  onClick={handleAuthentication} className="navbar-options">
          <span className="line-one"> Hello,{user?user.email : 'Guest' } </span>
          <span className="line-two">{user ? 'Sign Out' : 'Sign In'} </span>
        </div>
        </Link>
        <Link to='/orders'>
        <div className="navbar-options">
          <span className="line-one">Returns </span>
          <span className="line-two"> & Orders </span>
        </div>
        </Link>
        <div className="navbar-options">
          <span className="line-one"> Your</span>
          <span className="line-two">Prime </span>
        </div>
        <Link to="/checkout">
          <div className="navbar-options">
            <span className="line-one">
              <img
                className="cart-logo"
                src="https://www.pinclipart.com/picdir/big/140-1402959_white-shopping-cart-icon-amazon-shopping-cart-icon.png"
                alt="Cart-Logo"
              />
              <p>{cart?.length}</p>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
