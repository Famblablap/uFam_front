import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../Signup/Signup.css"
import backButtonimgSignup from "../../assets/img/back_sign_up.png"
import kidPhoto from "../../assets/img/little-girl-uses-laptop-while-sitting-room-with-neon-lighting.jpg"
import { Link } from "react-router-dom"
import { signup } from "../../Services/auth"


function Signup() {
  const [family_name, setFamilyName] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [birthday, setBirthday] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")

  const navigate = useNavigate()

  async function onSignUp(){
    try{
      const signUpResponse = await signup ({
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

  return (
    <>
      <div className="containerSignup">
        <Link to="/">
          <div className="arrowButtonSignup">
            <img src={backButtonimgSignup} />
          </div>
        </Link>
        <div className="contentSignup">
          <div className="signupCard">
            <div className="signupTitle">
              <p><b>Sign Up</b></p>
            </div>
            <div className="secondTitleSignup">
              <p><b>Create your family admin account</b></p>
            </div>
            <form className="formSignup">
              <div className="familyNameSignup">
                <label><b>Family Name:</b></label><br></br>
                <input
                  id="familyNameSignup"
                  type="text"
                  placeholder="Enter your Family Name"
                  onChange={(e) => setFamilyName(e.target.value)}>
                </input>
              </div>
              <div className="nameSurnameLabelSignup">
                <label style={{ marginRight: "200px", marginTop: "5px" }}><b>Name:</b></label>
                <label style={{ marginTop: "5px" }}><b>Surname:</b></label>
              </div>
              <div className="nameSurnameImnpuSignup">
                <input style={{ marginRight: "50px" }}
                  id="nameSignup"
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}>
                </input>
                <input
                  id="surnameSignup"
                  type="text"
                  placeholder="Enter your surname"
                  onChange={(e) => setSurname(e.target.value)}>
                </input>
              </div>
              <div className="birthdaySignup">
                <label><b>Birthday:</b></label><br></br>
                <input
                  id="birthdaySignup"
                  type="date"
                  onChange={(e) => setBirthday(e.target.value)}>
                </input>
              </div>
              <div className="emailSignup">
                <label><b>Email:</b></label><br></br>
                <input
                  id="emailSignup"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}>
                </input>
              </div>
              <div className="passwordSignup">
                <label><b>Password:</b></label><br></br>
                <input
                  id="passwordSignup"
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}>
                </input>
              </div>
              <div className="repasswordSignup">
                <label><b>Repeat Password:</b></label><br></br>
                <input
                  id="repasswordSignup"
                  type="password"
                  placeholder="Repeat your email"
                  onChange={(e) => setRepeatPassword(e.target.value)}>
                </input>
              </div>
            </form>
              <button onClick={() => onSignUp()}className="signupButtonSignup">
                <b>Sign Up</b>
              </button>
          </div>
          <div className="signupCard2">
            <img className="kidPhoto" src={kidPhoto} />
            <div className="alreadyAccountSignup">
              <p><b>Already have an account:</b></p>
              <Link to="/login">
                <button className="loginButtonSignup">
                  <b>Log in</b>
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