import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../Signup/Signup.css"
import backButtonimgSignup from "../../assets/img/back_sign_up.png"
import kidPhoto from "../../assets/img/little-girl-uses-laptop-while-sitting-room-with-neon-lighting.jpg"
import { Link } from "react-router-dom"
import { signup } from "../../Services/auth"
// import { Flag } from "@mui/icons-material"


function Signup() {
  const [family_name, setFamilyName] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [birthday, setBirthday] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(false)

  const navigate = useNavigate()

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSignUp();
      console.log("PRESS")
    }
  };

  function checkInfo(){
   if (
    family_name.length === 0 || 
    name.length === 0 || 
    surname.length === 0 || 
    birthday === 0 || 
    email.length === 0 ||
    password.length === 0 ||
    repeatPassword === 0){
    setErrorMessage(true)
    return false
   } return true
  }
  async function onSignUp() {
    if (checkInfo()) {
      try {
        const signUpResponse = await signup({
          family_name,
          name,
          surname,
          birthday,
          email,
          password,
          repeatPassword
        })
        if (signUpResponse) {
          navigate("/login")
        }
      } catch (error) {
        
        console.error("Profile incomplete", error)
      }
    }
  }

  return (
    <>
      <div className="containerSignup">
        <Link to="/">
          <div className="arrowButtonSignup">
            <img src={backButtonimgSignup} />
          </div>
        </Link>
        <div className="contentSignup" onKeyDown={handleKeyPress}>
          <div className="signupCard" >
            <div className="signupTitle" style={{marginTop: "20px"}}>
              <p><b style={{fontSize: "35px"}}>Sign Up</b></p>
            </div>
            <div className="secondTitleSignup">
              <p><b style={{fontSize: "22px"}}>Create your family admin account</b></p>
            </div>
            <form className="formSignup">
              <div className="familyNameSignup">
                <label><b style={{fontSize: "18px"}}>Family Name:</b></label><br></br>
                <input
                  id="familyNameSignup"
                  type="text"
                  placeholder="Enter your Family Name"
                  onChange={(e) => setFamilyName(e.target.value)}>
                </input>
              </div>
              <div className="nameSurnameLabelSignup">
                <label style={{ marginRight: "235px", marginTop: "5px" }}><b style={{fontSize: "18px"}}>Name:</b></label>
                <label style={{ marginTop: "5px"}}><b style={{fontSize: "18px"}}>Surname:</b></label>
              </div>
              <div className="nameSurnameImnpuSignup">
                <input style={{ marginRight: "50px" }}
                  id="nameSignup"
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e) => { setName(e.target.value); setErrorMessage(false) }}>
                </input>
                <input
                  id="surnameSignup"
                  type="text"
                  placeholder="Enter your surname"
                  onChange={(e) => { setSurname(e.target.value); setErrorMessage(false) }}>
                </input>
              </div>
              <div className="birthdaySignup">
                <label><b style={{fontSize: "18px"}}>Birthday:</b></label><br></br>
                <input
                  id="birthdaySignup"
                  type="date"
                  onChange={(e) => { setBirthday(e.target.value); setErrorMessage(false) }}>
                </input>
              </div>
              <div className="emailSignup">
                <label><b style={{fontSize: "18px"}}>Email:</b></label><br></br>
                <input
                  id="emailSignup"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => { setEmail(e.target.value); setErrorMessage(false) }}>
                </input>
              </div>
              <div className="passwordSignup">
                <label><b style={{fontSize: "18px"}}>Password:</b></label><br></br>
                <input
                  id="passwordSignup"
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => { setPassword(e.target.value); setErrorMessage(false) }}>
                </input>
              </div>
              <div className="repasswordSignup">
                <label><b style={{fontSize: "18px"}}>Repeat Password:</b></label><br></br>
                <input
                  id="repasswordSignup"
                  type="password"
                  placeholder="Repeat your email"
                  onChange={(e) => { setRepeatPassword(e.target.value); setErrorMessage(false) }}>
                </input>
              </div>
            </form>
            {errorMessage && <h4 style={{fontSize: "18px"}} className="creds">Profile incomplete!</h4>}
            <button onClick={() => onSignUp()} className="signupButtonSignup">
              <b style={{fontSize: "20px"}}>Sign Up</b>
            </button>
          </div>
          <div className="signupCard2">
            <img className="kidPhoto" src={kidPhoto} />
            <div className="alreadyAccountSignup">
              <p><b style={{fontSize: "20px"}}>Already have an account:</b></p>
              <Link to="/login">
                <button className="loginButtonSignup">
                  <b style={{fontSize: "20px"}}>Log in</b>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup