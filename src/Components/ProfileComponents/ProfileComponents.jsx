import {
  Box,
  Avatar,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material";

import userAvatar from "../../assets/img/user.png";
import photos from "../../assets/img/photo_profile_icon.png";
import settings from "../../assets/img/settings_icon.png";
import "./Feed.css";
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

function ProfileComponents() {
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
          <Typography variant="h6">Nombre de Usuario</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={settings} />
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={photos} />
          <Typography
            className="user-option" fontWeight="bold"
            sx={{ marginLeft: "5px", color: "rgba(114, 9, 183)" }}
          >
            PHOTOS
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={photos} />
          <Typography
            className="user-option" fontWeight="bold"
            sx={{ marginLeft: "5px", color: "rgba(114, 9, 183)" }}
          >
            VIDEOS
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={photos} />{" "}
          <Typography
            className="user-option" fontWeight="bold"
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
          {userImages.map((image) => (
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

export default ProfileComponents;
