import { Avatar, Box, IconButton, Typography } from "@mui/material";
import "../../Components/FeedComponents/Feed.css";
import like from "../../assets/img/Like.png";
import comment from "../../assets/img/Comment.png";
// import userProfile from "../../assets/img/user.png"
import { useEffect, useState } from "react";
import { getAllFamContent } from "../../Services/content";
import likeactive from "../../assets/img/likeactive.png";

function Feed() {
  const [contents, setContents] = useState([]);
  const [likes, setLikes] = useState({});

  useEffect(() => {
    showAllContent()
  }, [])

  async function showAllContent() {
    const { data } = await getAllFamContent()
    setContents(data)
    const initialLikes = data.reduce((acc, content) => {
      acc[content.id] = false
      return acc
    }, {})
    setLikes(initialLikes)
  }

  const handleLikeClick = (contentId) => {
    setLikes({ ...likes, [contentId]: !likes[contentId] })
  }

  return (
    
    <div id="content">
      {contents.length > 0 ? (
        contents.map((content) => (
          <Box
            key={content.id}
            sx={{
              maxWidth: 800,
              width: "100%",
              position: "relative",
              boxShadow: "10px 10px 28px -7px rgba(114, 9, 183,0.75)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "720px",
              marginBottom: "20px"
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 2,
                position: "absolute",
                top: 5,
                left: 5,
                zIndex: 1,
                backgroundColor: "rgb(255,255,255, 0.5)",
                boxShadow: "10px 10px 28px -7px rgba(114, 9, 183,0.75)",
                color: "#7209B7",
                borderRadius: "21px",
                height: "20px",
                marginTop: "10px",
                marginLeft: "10px",
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
            <Box
              sx={{
                width: "80%",
                height: "80%",
                marginBottom: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
                marginRight: "5px"
              }}
              className="postInteractions"
            >
              <Box
                sx={{
                  borderRadius: "50px",
                  boxShadow: "10px 10px 28px -7px rgba(114, 9, 183,0.75)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IconButton
                  className="likeButton"
                  onClick={() => handleLikeClick(content.id)}
                >
                  <img src={likes[content.id] ? likeactive : like} alt="Like" />
                </IconButton>
              </Box>
              <Box
                sx={{
  
                  borderRadius: "50px",
  
                  boxShadow: "10px 10px 28px -7px rgba(114, 9, 183,0.75)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "3px",
                }}
              >
                <IconButton className="commentButton">
                  <img src={comment} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        ))
      ) : (
        <Box
          sx={{
            marginTop: "15%",
            maxWidth: 800,
            width: "100%",
            position: "relative",
            boxShadow: "10px 10px 28px -7px rgba(114, 9, 183,0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <Typography variant="h3">No content available</Typography>
        </Box>
      )}
      
    </div>
  )
}

export default Feed;