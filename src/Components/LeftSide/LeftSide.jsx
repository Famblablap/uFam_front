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
import { Link } from "react-router-dom";



function LeftSide() {
  return (
    <div id="leftside">
      <h1>Ufam</h1>
      <div id="menu">
        <Link to="/app"><div className="menu_option"><img src={home} className="icon"/>Home</div></Link>
        <Link to="/app/profile"><div className="menu_option"><img src={profile} className="icon"/>Profile</div></Link>
        <Link to="/app/create"><div className="menu_option"><img src={create} className="icon"/>Create</div></Link>
        <Link to="/app/invitation"><div className="menu_option"><img src={family_email} className="icon"/>Family Email</div></Link>
        <Link to="/app/messages"><div className="menu_option"><img src={message} className="icon"/>Messages</div></Link>
        <Link to="/app/notifications"><div className="menu_option"><img src={notifications} className="icon"/>Notifications</div></Link>
        <Link to="/app/decalogue"><div className="menu_option"><img src={decalogue} className="icon"/>Decalogue</div></Link>
        <Link to="/app/settings"><div className="menu_option"><img src={settings} className="icon"/>Settings </div></Link>
      </div>
      <img src={logout} className="icon"/>
    </div>
    
  )
}

export default LeftSide