import React from "react"
import "../Login/Login.css"
import backButtonimg from "../../assets/img/back_login.png"
import { Link } from 'react-router-dom'


function Login() {
  return (
    <>
      <div className="container">
        <Link to="/">
        <div className="arrowButton">
          <img src={backButtonimg} />
        </div>
        </Link>
        <div className="loginCard">
          <div className="content">
            <div className="title">
              <p><b>Log In</b></p>
            </div>
            <form className="form">
              <div className="email">
                <label><b>Email:</b></label><br></br>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                ></input>
              </div>
              <div className="password">
                <label><b>Password:</b></label><br></br>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                ></input> <br></br>
              </div>
            </form>
          </div>
          <Link to="/app">
          <button className="loginButton">
            <b>Log In</b>
          </button>
          </Link>
        </div>
        <div className="noAccount">
          <p>
            <b>
              Don't have an account:
            </b>
          </p>
          <Link to="/signup">
          <button className="singUpBotton">
            <b>Sign Up</b>
          </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Login