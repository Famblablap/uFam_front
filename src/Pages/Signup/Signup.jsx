import React from "react"
import "../Signup/Signup.css"
import backButtonimgSignup from "../../assets/img/back_sign_up.png"
import dogPhoto from "../../assets/img/Rectangle_63.png"
import { Link } from "react-router-dom"

function Signup() {
  return (
    <>
      <div className="containerSignup">
        <Link to="/login">
          <div className="arrowButtonSignup">
            <img src={backButtonimgSignup} />
          </div>
        </Link>
        <div className="signupCard">
          <div className="contentSignup">
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
                  placeholder="Enter your Family Name">
                </input>
              </div>
              <div className="nameSurnameLabelSignup">
                <label style={{ marginRight: "200px", marginTop: "5px" }}><b>Name:</b></label>
                <label style={{ marginTop: "5px" }}><b>Surname:</b></label>
              </div>
              <div className="nameSurnameImnpuSignup">
                <input style={{ marginRight: "100px" }}
                  id="nameSignup"
                  type="text"
                  placeholder="Enter your name">
                </input>
                <input
                  id="surnameSignup"
                  type="text"
                  placeholder="Enter your surname">
                </input>
              </div>
              <div className="birthdaySignup">
                <label><b>Birthday:</b></label><br></br>
                <input
                  id="birthdaySignup"
                  type="date">
                </input>
              </div>
              <div className="emailSignup">
                <label><b>Email:</b></label><br></br>
                <input
                  id="emailSignup"
                  type="email"
                  placeholder="Enter your email">
                </input>
              </div>
              <div className="passwordSignup">
                <label><b>Password:</b></label><br></br>
                <input
                  id="passwordSignup"
                  type="password"
                  placeholder="Enter your password">
                </input>
              </div>
              <div className="repasswordSignup">
                <label><b>Repeat Password:</b></label><br></br>
                <input
                  id="repasswordSignup"
                  type="password"
                  placeholder="Repeat your email">
                </input>
              </div>
            </form>
            <Link to="/">
              <button className="signupButtonSignup">
                <b>Sign Up</b>
              </button>
            </Link>
          </div>
        </div>
        <div className="content2">
          <img className="dogPhoto" src={dogPhoto} />
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
    </>
  )
}

export default Signup