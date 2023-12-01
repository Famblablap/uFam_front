import {
  Box,
  Avatar,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { useParams } from "react-router-dom";
import userAvatar from "../../assets/img/user.png";
import photos from "../../assets/img/photo_profile_icon.png";
// import videos from "../../assets/img/videos_profile_icon.png";
import blog from "../../assets/img/blog_profile_icon.png";
import message from "../../assets/img/message_icon.png";
import "../../Components/FeedComponents/Feed.css";
import { useEffect, useState } from "react";
import { getFamProfile } from "../../Services/user";
import { getOneFamContent } from "../../Services/content";

function FamProfile() {
  const { id } = useParams();
  const [famProfiles, setFamProfile] = useState({});
  const [famContent, setFamContent] = useState([]);
  const [selectedOption, setSelectedOption] = useState("PHOTOS");

  useEffect(() => {
    showFamProfile();
    showFamContent();
  }, [id]);

  async function showFamProfile() {
    const { data } = await getFamProfile(id);
    setFamProfile(data);
  }

  async function showFamContent() {
    const { data } = await getOneFamContent(id);
    setFamContent(data);
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const getImagesForSelectedOption = () => {
    switch (selectedOption) {
      case "PHOTOS":
        return famContent;
      // case "VIDEOS":
      //   return userVideos;
      // case "BLOG":
      //   return userBlog;
      default:
        return [];
    }
  };

  return (
    <>
      <Box key={famProfiles.id} sx={{ padding: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "rgba(114, 9, 183, 0.2 )",
            borderRadius: "21px",
            padding: "17px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              sx={{ width: 50, height: 50, marginRight: 2 }}
              alt="User Avatar"
              src={userAvatar}
            />
            <Typography variant="h6">
              {famProfiles.name} {famProfiles.surname}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={message} style={{ width: 40, height: 40 }} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "15px",
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center" }}
            onClick={() => handleOptionClick("PHOTOS")}
          >
            <img src={photos} style={{ width: 40, height: 40 }} />
            <Typography
              className="user-option"
              fontWeight="bold"
              sx={{ marginLeft: "5px", color: "rgba(114, 9, 183)" }}
            >
              CONTENT
            </Typography>
          </Box>
          {/* <Box
            sx={{ display: "flex", alignItems: "center" }}
            onClick={() => handleOptionClick("VIDEOS")}
          >
            <img src={videos} style={{ width: 40, height: 40}}/>
            <Typography
              className="user-option"
              fontWeight="bold"
              sx={{ marginLeft: "5px", color: "rgba(114, 9, 183)" }}
            >
              VIDEOS
            </Typography>
          </Box> */}
          <Box
            sx={{ display: "flex", alignItems: "center" }}
            onClick={() => handleOptionClick("BLOG")}
          >
            <img src={blog} style={{ width: 40, height: 40 }} />
            <Typography
              className="user-option"
              fontWeight="bold"
              sx={{ marginLeft: "5px", color: "rgba(114, 9, 183)" }}
            >
              BLOG
            </Typography>
          </Box>
        </Box>
        {getImagesForSelectedOption().length > 0 ? (
        <Box
          sx={{
            marginTop: "15px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(114, 9, 183, 0.2 )",
            borderRadius: "21px",
            padding: "17px",
          }}
        >
          <ImageList cols={3} rowHeight={200} gap={8}>
            {getImagesForSelectedOption().map((image) => (
              <ImageListItem key={image.id}>
                <img
                  src={image.content_url}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      ) : (
        <Box
          sx={{
            marginTop: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(114, 9, 183, 0.2 )",
            borderRadius: "21px",
            padding: "17px",
            height: "60vh",
          }}
        >
          <Typography variant="h6">No content available</Typography>
        </Box>
      )}
      </Box>
    </>
  );
}

export default FamProfile;
