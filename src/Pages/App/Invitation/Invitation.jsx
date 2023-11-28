import React from "react"
import "./Invitation.css"
import backButtonimgInvitation from "../../../assets/img/back_violeta.png"
import { Link } from "react-router-dom"

function Invitation() {
  return (
    <>
      <div className="contatinerInvitation">
        <Link to="/">
          <div className="arrowButtonInvitation">
            <img src={backButtonimgInvitation} />
          </div>
        </Link>
        <div className="contentInvitation">
          <div className="invitationBox">
            <div className="createFamInvitation">
            <p><b>Create an Invitation</b></p>
            </div>
            <div className="createFamInvitation2">
            <p><b> Create your relative account:</b></p>
            </div>
            <div className="emailInvitation">
                <label><b>Email:</b></label>
                <input
                  id="emailInvitation"
                  type="email"
                  placeholder="Enter email">
                </input>
            </div>
            <div className="buttonBox">
            <Link to="/">
              <button className="sendInvitationButton">
                <b>Send Invitation</b>
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Invitation