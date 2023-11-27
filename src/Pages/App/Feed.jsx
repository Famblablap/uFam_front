import { Avatar, Box, IconButton, Typography } from "@mui/material";
import "../../Components/FeedComponents/Feed.css";
import like from "../../assets/img/Like.png";
import comment from "../../assets/img/Comment.png";
// import userProfile from "../../assets/img/user.png"
import image from "../../assets/img/image.png";

function Feed() {
  return (
    <div id="content">
      <Box
        sx={{
          maxWidth: 800,
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            
            padding: 2,
            position: "absolute",
            zIndex: 1,
          }}
        >
          <Avatar
            sx={{ width: 40, height: 40, marginRight: 2 }}
            alt="User Avatar"
            src="https://placekitten.com/200/200"
          />
          <Typography variant="subtitle1" fontWeight="bold">
            username
          </Typography>
        </Box>
        <img
          src={image}
          alt="Post"
          style={{ width: "100%", objectFit: "cover" }}
          className="imagePost"
        />
        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            zIndex: 2,
            padding: 2,
            bottom: 0,
            left: 0,
          }}
        >
          <span style={{ fontWeight: "bold" }}>username</span> text
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            zIndex: 2,
          }}
          className="postInteractions"
        >
          <IconButton className="likeButton">
            <img src={like} />
          </IconButton>
          <IconButton className="commentButton">
            <img src={comment} />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
}

export default Feed;
