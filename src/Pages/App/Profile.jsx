import {
  Box,
  Avatar,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material";

import userAvatar from "../../assets/img/user.png";
import photos from "../../assets/img/photo_profile_icon.png";
import videos from "../../assets/img/videos_profile_icon.png";
import blog from "../../assets/img/blog_profile_icon.png";
import settings from "../../assets/img/settings_icon.png";
import "../../Components/FeedComponents/Feed.css";
import { useEffect, useState } from "react";
import { getProfile } from "../../Services/user";
import { Link } from "react-router-dom";
import { getMyContent } from "../../Services/content";


function Profile() {
  const [profile, setProfile] = useState({});
  const [myContent, setMyContent] = useState([])
  const [selectedOption, setSelectedOption] = useState("PHOTOS");

  useEffect(() => {
    showProfile();
    showMyContent()
  }, []);

  async function showProfile() {
    const {data} = await getProfile();
    setProfile(data);
  }

  async function showMyContent() {
    const { data } = await getMyContent()
    setMyContent(data)
  }

  const handleOptionClick = (option) => {
   setSelectedOption(option);
  };

  const getImagesForSelectedOption = () => {
    switch (selectedOption) {
      case "PHOTOS":
        return myContent;
      // case "VIDEOS":
      //   return userVideos;
      // case "BLOG":
      //   return userBlog;
      default:
        return [];
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
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
          <Typography variant="h6">{profile.name} {profile.surname}</Typography>
        </Box>

        <Link to={"/app/settings"}><Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={settings} style={{ width: 40, height: 40}}/>
        </Box></Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "15px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }} onClick={() => handleOptionClick("PHOTOS")}>
          <img src={photos} style={{ width: 40, height: 40}}/>
          <Typography
            className="user-option"
            fontWeight="bold"
            sx={{ marginLeft: "5px", color: "rgba(114, 9, 183)" }}
          >
            CONTENT
          </Typography>
        </Box>
        {/* <Box sx={{ display: "flex", alignItems: "center" }} onClick={() => handleOptionClick("VIDEOS")}>
          <img src={videos} style={{ width: 40, height: 40}}/>
          <Typography
            className="user-option"
            fontWeight="bold"
            sx={{ marginLeft: "5px", color: "rgba(114, 9, 183)" }}
          >
            VIDEOS
          </Typography>
        </Box> */}
        <Box sx={{ display: "flex", alignItems: "center" }} onClick={() => handleOptionClick("BLOG")}>
          <img src={blog} style={{ width: 40, height: 40}}/>
          <Typography
            className="user-option"
            fontWeight="bold"
            sx={{ marginLeft: "5px", color: "rgba(114, 9, 183)" }}
          >
            BLOG
          </Typography>
        </Box>
      </Box>
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
            </ImageListItem>))}
        </ImageList>
      </Box>
    </Box>
  );
}

export default Profile;