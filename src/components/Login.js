import React,{useState} from "react";
import { Link,useHistory } from "react-router-dom";
import {auth} from "../firebase";
import "../CSS/login.css";

function Login() {
  const history = useHistory();
  const [email,setEmail]=useState(' ');
  const[password,setPassword]=useState('');

  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then( auth =>{
      if(auth){
      history.push('/')
    }
    })
    .catch(error => alert(error.message))
  }

  const register = e =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth) => {
      if(auth){
        history.push('/')
      }
    })
    .catch( error => alert(error.message))
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt="Amazon-Logo"
        />
      </Link>
      <div className="login-container">
        <h1>Login</h1>
        <form className="login-form">
          <label for="email"> Email </label>
          <input type="email" id="email" value={email} onChange={ (e) => setEmail(e.target.value)} />
          <label for="password"> Password </label>
          <input type="password" id="password" value={password} onChange={ (e) => setPassword(e.target.value)} />
          <button onClick={signIn} className="login-button">Login </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Fake Clone Conditions of Use and
          Privacy Notice.
        </p>
      </div>
      <div className="register-container">
        <p className="new">New to Amazon?</p>
        <button onClick={register} className="register"> Create your Amazon Account </button>
      </div>
    </div>
  );
}

export default Login;
