import React from "react";
import { Box, Typography, Paper } from "@mui/material";

function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        p: 3,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "40vh",
          borderRadius: 2,
          backgroundColor: "#f5f5f5", // or theme.palette.background.paper for theme consistency
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          Thanks for getting in touch with us!
        </Typography>
        <Typography variant="h6" align="center" sx={{ mt: 2 }}>
          We'll get back to you soon. Have a great day!
        </Typography>
      </Paper>
    </Box>
  );
}

export default Contact;