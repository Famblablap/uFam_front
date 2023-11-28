import React from "react"
import "../Login/Login.css"
import arrowButtonLogin from "../../assets/img/back_login.png"
import { Link } from 'react-router-dom'


function Login() {
  return (
    <>
      <div className="containerLogin">
        <Link to="/">
          <div className="arrowButtonLogin">
            <img src={arrowButtonLogin} />
          </div>
        </Link>
        <div className="loginCard">
          <div>
            <div className="loginTitle">
              <p><b>Log In</b></p>
            </div>
            <form className="formLogin">
              <div className="emailLogin">
                <label><b>Email:</b></label><br></br>
                <input
                  id="emailLogin"
                  type="email"
                  placeholder="Enter your email"
                ></input>
              </div>
              <div className="passwordLogin">
                <label><b>Password:</b></label><br></br>
                <input
                  id="passwordLogin"
                  type="password"
                  placeholder="Enter your password"
                ></input> <br></br>
              </div>
            </form>
          </div>
          <Link to="/app">
            <button className="loginButtonLogin">
              <b>Log In</b>
            </button>
          </Link>
        </div>
        <div className="noAccountLogin">
          <p>
            <b>
              Don't have an account:
            </b>
          </p>
          <Link to="/signup">
            <button className="singUpBottonLogin">
              <b>Sign Up</b>
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Login