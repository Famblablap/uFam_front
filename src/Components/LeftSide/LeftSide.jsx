import "./LeftSide.css"
import message from "../../assets/img/message_icon.png";
import home from "../../assets/img/home_icon.png";
import profile from "../../assets/img/user_profile_icon.png";
import create from "../../assets/img/create_icon.png";
import family_email from "../../assets/img/family_email_icon.png";
import notifications from "../../assets/img/notifications_icon.png";
import decalogue from "../../assets/img/decalogue_icon.png";
import settings from "../../assets/img/settings_icon.png";
import logout from "../../assets/img/logout_icon.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LeftSide() {

  const navigate = useNavigate()

  function onLogout() {
    localStorage.removeItem("token")
    localStorage.removeItem("id")
    navigate("/")
  }

  return (
    <div id="leftside">
      <img
        src="/src/assets/img/u__1_-removebg-preview.png"
        atl="uFam_logo"
        style={{ width: "150px", height: "150px", borderRadius: "10px" }}
      ></img>
      <div id="menu">
        <Link to="/app"><div className="menu_option"><img src={home} className="icon" /><b style={{ fontSize: "20px" }}>Home</b></div></Link>
        <Link to="/app/profile"><div className="menu_option"><img src={profile} className="icon" /><b style={{ fontSize: "20px" }}>Profile</b></div></Link>
        <Link to="/app/create"><div className="menu_option"><img src={create} className="icon" /><b style={{ fontSize: "20px" }}>Create</b></div></Link>
        <Link to="/app/invitation"><div className="menu_option"><img src={family_email} className="icon" /><b style={{ fontSize: "20px" }}>Family Email</b></div></Link>
        <Link to="/app/messages"><div className="menu_option"><img src={message} className="icon" /><b style={{ fontSize: "20px" }}>Messages</b></div></Link>
        <Link to="/app/notifications"><div className="menu_option"><img src={notifications} className="icon" /><b style={{ fontSize: "20px" }}>Notifications</b></div></Link>
        <Link to="/app/decalogue"><div className="menu_option"><img src={decalogue} className="icon" /><b style={{ fontSize: "20px" }}>Decalogue</b></div></Link>
        <Link to="/app/settings"><div className="menu_option"><img src={settings} className="icon" /><b style={{ fontSize: "20px" }}>Settings</b></div></Link>
      </div>
      <div className="logoutButton" onClick={() => onLogout()}><img src={logout} className="icon" /></div>
    </div>

  )
}

export default LeftSide