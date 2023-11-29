import React, { useRef, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import AddIcon from "../../assets/Vector.png"; // Make sure the path is correct
import axios from "axios";
import { createPhoto } from "../../Services/content";

function Create() {
  const preset_key = "r8cu4l86"
  const cloud_name = "dehapq68a"
  const fileInputRef = useRef(null)
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const handleUploadClick = () => {
    fileInputRef.current.click()
  }

  const handleFile = (e) => {
    setUploadSuccess(false)
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", preset_key)

    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      .then((response) => {
        const photoUrl = response.data.secure_url;
        createPhoto({ photo_url: photoUrl })
          .then(() => {
            setUploadSuccess(true)
          })
          .catch((serverError) => {
            console.error('Error saving photo to user profile', serverError);
            setUploadSuccess(false)
          })
      })
      .catch((cloudinaryError) => {
        console.error('Error uploading to Cloudinary', cloudinaryError)
        setUploadSuccess(false)
      })
  }
  

  return (
    <Box
      id="create"
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundColor: "#A77AE4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        id="create-post"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          width: "80%",
          backgroundColor: "white",
          p: 4,
          borderRadius: 1,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            color: "#A77AE4",
            fontWeight: "bold",
            mb: 2,
          }}
        >
          CREATE NEW POST
        </Typography>
        <IconButton
          aria-label="upload picture"
          component="span"
          onClick={handleUploadClick}
          sx={{ "&:hover": { backgroundColor: "transparent" } }}
        >
          <Box
            component="img"
            src={AddIcon}
            sx={{ height: "100px", width: "100px" }} // Adjust the size as necessary
          />
        </IconButton>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", color: "#A77AE4", mt: 0 }}
        >
          SELECT AN IMAGE/VIDEO
        </Typography>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          style={{ display: "none" }}
          onChange={handleFile}
        />
        {uploadSuccess && (
          <Typography variant="subtitle1" sx={{ color: "#599596", mt: 2, fontWeight: "bold" }}>
            Content posted correctly!!
          </Typography>
        )}
        <Button>
          <p>hola</p>
        </Button>
      </Box>
    </Box>
  )
}

export default Create