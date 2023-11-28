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

const userImages = [
  {
    id: 1,
    url: "https://ethic.es/wp-content/uploads/2023/03/imagen.jpg",
    title: "Imagen 1",
  },
  {
    id: 2,
    url: "https://png.pngtree.com/background/20230612/original/pngtree-wolf-animals-images-wallpaper-for-pc-384x480-picture-image_3180467.jpg",
    title: "Imagen 2",
  },
];

const userVideos = [
  {
    id: 1,
    url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1701129600&semt=ais",
    title: "Imagen 1",
  },
  {
    id: 2,
    url: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    title: "Imagen 2",
  },
];

const userBlog = [
  {
    id: 1,
    url: "https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1701129600&semt=ais",
    title: "Imagen 1",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VhcmNofGVufDB8fDB8fHww",
    title: "Imagen 2",
  },
];

function Profile() {
  const [profile, setProfile] = useState({});
  const [selectedOption, setSelectedOption] = useState("PHOTOS");

  useEffect(() => {
    showProfile();
  }, []);

  async function showProfile() {
    const {data} = await getProfile();
    setProfile(data);
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const getImagesForSelectedOption = () => {
    switch (selectedOption) {
      case "PHOTOS":
        return userImages;
      case "VIDEOS":
        return userVideos;
      case "BLOG":
        return userBlog;
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
          <Typography variant="h6">{profile.name}</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={settings} style={{ width: 40, height: 40}}/>
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
        <Box sx={{ display: "flex", alignItems: "center" }} onClick={() => handleOptionClick("PHOTOS")}>
          <img src={photos} style={{ width: 40, height: 40}}/>
          <Typography
            className="user-option"
            fontWeight="bold"
            sx={{ marginLeft: "5px", color: "rgba(114, 9, 183)" }}
          >
            PHOTOS
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }} onClick={() => handleOptionClick("VIDEOS")}>
          <img src={videos} style={{ width: 40, height: 40}}/>
          <Typography
            className="user-option"
            fontWeight="bold"
            sx={{ marginLeft: "5px", color: "rgba(114, 9, 183)" }}
          >
            VIDEOS
          </Typography>
        </Box>
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
                src={image.url}
                alt={image.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

export default Profile;