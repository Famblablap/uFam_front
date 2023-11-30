import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../Login/Login.css"
import arrowButtonLogin from "../../assets/img/back_login.png"
import { Link } from 'react-router-dom'
import { login } from "../../Services/auth"



function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(false)

  const navigate = useNavigate()

  async function onLogin() {
    try {
      const loginResponse = await login({ email, password })
      if (loginResponse.token) {
        localStorage.setItem("token", loginResponse.token)
        navigate("/app")
      } 
    } catch (error) {
      setErrorMessage(true)
      console.error("Credenciales incorrectas", error)
    }
  }

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
                  onChange={(e) => {setEmail(e.target.value); setErrorMessage(false)}}
                ></input>
              </div>
              <div className="passwordLogin">
                <label><b>Password:</b></label><br></br>
                <input
                  id="passwordLogin"
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => {setPassword(e.target.value); setErrorMessage(false)}}
                ></input> <br></br>
              </div>
            </form>
          </div>
          {errorMessage && <h4 className="creds">Ups! Your creds are wrong. Try again!</h4>}
          <button onClick={() => onLogin()} className="loginButtonLogin">
            <b>Log In</b>
          </button>
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