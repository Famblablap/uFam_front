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

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onLogin();
    }
  };

  async function onLogin() {
    try {
      const loginResponse = await login({ email, password })
      if (loginResponse.token) {
        localStorage.setItem("token", loginResponse.token)
        localStorage.setItem("id", loginResponse.id)
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
              <p><b style={{ fontSize: "35px" }}>Log In</b></p>
            </div>
            <form className="formLogin" onKeyDown={handleKeyPress}>
              <div className="emailLogin">
                <label><b style={{ fontSize: "18px" }}>Email:</b></label><br></br>
                <input
                  id="emailLogin"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => { setEmail(e.target.value); setErrorMessage(false) }}
                ></input>
              </div>
              <div className="passwordLogin">
                <label><b style={{ fontSize: "18px" }}>Password:</b></label><br></br>
                <input
                  id="passwordLogin"
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => { setPassword(e.target.value); setErrorMessage(false) }}
                ></input> <br></br>
              </div>
            </form>
          </div>
          {errorMessage && <h4 style={{ fontSize: "20px" }} className="creds">Ups! Your creds are wrong. Try again!</h4>}
          <button onClick={() => onLogin()} className="loginButtonLogin">
            <b style={{ fontSize: "20px" }}>Log In</b>
          </button>
        </div>
        <div className="noAccountLogin">
          <p><b style={{ fontSize: "20px" }}>Don't have an account:</b></p>
          <Link to="/signup">
            <button className="singUpBottonLogin">
              <b style={{ fontSize: "20px" }}>Sign Up</b>
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Login