import React, { useState } from "react"
import "./Invitation.css"
// import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { sendInvitation } from "../../../Services/sendInvitation"


function Invitation() {
  const [email, setEmail] = useState("")
  const [emailSent, setEmailSent] = useState(false)
  const [emptyEmail, setEmptyEmail] = useState(false)

  const navigate = useNavigate()

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendInv();
    }
  };

  async function sendInv() {
    try {
      const invitationResponse = await sendInvitation(email)
      if (invitationResponse){
        setEmailSent(true)
      } if (!invitationResponse){
        setEmptyEmail(true)
        console.log("please enter the email")
      }
    } catch (error) {
      console.error("Send Invitation error", error)
    }
  }

  return (
    <>
      <div className="contatinerInvitation">
      {emailSent && <h2 style={{fontSize: "20px"}} className="invSentGreen">INVITATION SENT!!</h2>}
      {emptyEmail && <h2 style={{fontSize: "20px"}} className="invSentRed">UPS! Don't forget the email!</h2>}
        <div className="contentInvitation">
          <div className="invitationBox" onKeyDown={handleKeyPress}>
            <div className="createFamInvitation">
              <p><b style={{fontSize: "40px"}}>Create an Invitation</b></p>
            </div>
            <div className="createFamInvitation2">
              <p><b style={{fontSize: "20px"}}> Create your relative account:</b></p>
            </div>
            <div className="emailInvitation">
              <label><b style={{fontSize: "18px"}}>Email:</b></label>
              <input
                id="emailInvitation"
                type="email"
                placeholder="Enter email"
                style={{ paddingLeft: '10px' }}
                onChange={(e) => { setEmail(e.target.value); setEmailSent(false); setEmptyEmail(false)}}>
              </input>
            </div>
            <div className="buttonBox">
              {email && <button onClick={() => sendInv()} className="sendInvitationButton">
                <b style={{fontSize: "20px"}}>Send Invitation</b>
              </button>}
              {!email && <button onClick={() => sendInv()} className="emptyEmailButton">
                <b style={{fontSize: "20px"}}>Send Invitation</b>
              </button>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Invitation