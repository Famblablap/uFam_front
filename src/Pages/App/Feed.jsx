import { Avatar, Box, IconButton, Typography } from "@mui/material";
import "../../Components/FeedComponents/Feed.css";
import like from "../../assets/img/Like.png";
import comment from "../../assets/img/Comment.png";
// import userProfile from "../../assets/img/user.png"
import image from "../../assets/img/image.png";
import { useEffect, useState } from "react";
import { getAllFamContent } from "../../Services/content";

function Feed() {
  const [contents, setContents] = useState([])
  console.log(contents)

  useEffect(() => {
    showAllContent()
  }, [])

  async function showAllContent() {
    const { data } = await getAllFamContent()
    setContents(data)
  }
  return (
    <div id="content">
      {contents.map((content)=> (
      <Box key={content.id}
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
          />
          <Typography variant="subtitle1" fontWeight="bold">
            {content.user.name} {content.user.surname}
          </Typography>
        </Box>
        <Box sx={{width: "100%", height:"80vh"}}>
        <img
          src={content.content_url}
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
          <span style={{ fontWeight: "bold" }}>{content.user.name} {content.user.surname}</span>
        </Typography>
        </Box>
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
      </Box>))}
    </div>
  );
}

export default Feed;
