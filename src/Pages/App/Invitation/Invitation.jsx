import React, { useState } from "react"
import "./Invitation.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { sendInvitation } from "../../../Services/sendInvitation"


function Invitation() {
  const [email, setEmail] = useState("")

  const navigate = useNavigate()

  async function sendInv(){
    try {
      const invitationResponse = await sendInvitation(email)
    
    } catch (error) {
      console.error("Send Invitation error", error)
    }
  }

  return (
    <>
      <div className="contatinerInvitation">
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
                  placeholder="Enter email"
                  onChange={(e) => {setEmail(e.target.value)}}>
                </input>
            </div>
            <div className="buttonBox">
            <Link to="/app/invitation">
              <button onClick={() => sendInv()}className="sendInvitationButton">
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