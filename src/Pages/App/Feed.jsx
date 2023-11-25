import "../../Components/Feed.css"
import like from "../../assets/icons/Like.png"
import comment from "../../assets/icons/Comment.png"
import userProfile from "../../assets/icons/user.png"
import image from "../../assets/icons/image.png"


function Feed() {
  return (
    <div id="container">
      <div className="content"> 
        <div className="userInfo">
          <img className="userImage"src={userProfile} />
          <span className="userName">Nombre de Usuario</span>
        </div>
        <img className="imagePost" src={image} />
        <div className="postInteractions">
          <button className="likeButton"><img src={like} /></button>
          <button className="commentButton"><img src={comment} /></button>
        </div>
      </div>
    </div>
  )
}

export default Feed