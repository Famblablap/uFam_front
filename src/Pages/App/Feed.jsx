import { Avatar, Box, IconButton, Typography } from "@mui/material";
import "../../Components/FeedComponents/Feed.css";
import like from "../../assets/img/Like.png";
import comment from "../../assets/img/Comment.png";
// import userProfile from "../../assets/img/user.png"
import { useEffect, useState } from "react";
import { getAllFamContent } from "../../Services/content";

function Feed() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    showAllContent();
  }, []);

  async function showAllContent() {
    const { data } = await getAllFamContent();
    setContents(data);
  }
  return (
    <div id="content">
      {contents.map((content) => (
        <Box
          key={content.id}
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
              border: "1px solid ",
              backgroundColor: "	rgb(255,255,255, 0.5)",
              color: "#7209B7",
              borderRadius: "21px",
              height: "20px",
              marginTop: "10px",
              marginLeft: "10px"
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
          <Box sx={{ width: "100%", height: "100%", marginBottom: "5px" }}>
            <img
              src={content.content_url}
              alt="Post"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="imagePost"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "absolute",
              zIndex: 2,
              marginBottom: "10px",
            }}
            className="postInteractions"
          >
            <Box
              sx={{
                border: "3px solid #7209B7",
                borderRadius: "50px",
                backgroundColor: "	rgb(255,255,255, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <IconButton className="likeButton">
                <img src={like} />
              </IconButton>
            </Box>
            <Box 
            sx={{
              border: "3px solid #7209B7",
              borderRadius: "50px",
              backgroundColor: "	rgb(255,255,255, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "3px"
            }}>
              <IconButton className="commentButton">
                <img src={comment} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      ))}
    </div>
  );
}

export default Feed;
