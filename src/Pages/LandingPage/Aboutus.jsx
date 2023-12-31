import React from "react";
import { Box, Typography, Container } from "@mui/material";

function AboutUs() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "60vh",
        bgcolor: "rgba(64, 103, 129, 0.40)",
        borderRadius: 2,
        border: "3px solid",
        borderColor: "white",
        color: "white",
        p: 3,
        m: 2,
        maxWidth: "800px",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ marginTop: "2rem", marginBottom: "3rem" }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          align="center"
          fontWeight="bold"
        >
          About uFam
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          align="center"
          color="white"
          fontWeight={"bold"}
        >
          Connecting Families, Building Bonds
        </Typography>
        <Typography variant="body1" paragraph style={{ fontSize: "2.5rem" }}>
          At <b style={{ fontSize: "3rem", fontWeight: "bold" }}>uFam</b>, we
          believe that the heart of a family can extend into the digital world.
          Our platform is designed to be a{" "}
          <b style={{ fontSize: "3rem", color: "#5a5a84" }}>
            safe and private space{" "}
          </b>
          where families can come together to share moments, memories, and
          messages without the worry of external influences or privacy concerns.
        </Typography>
        <Typography variant="body1" paragraph style={{ fontSize: "2.5rem" }}>
          Our journey began with a simple vision: to create a social media
          environment that nurtures positive interactions, fosters healthy
          digital habits, and respects the user's time and privacy.
          <b style={{ fontSize: "3rem", fontWeight: "bold" }}> uFam</b> is more
          than just an app;{" "}
          <b style={{ fontSize: "3rem", color: "#5a5a84" }}>it's a community</b>
          , a space where the connection is genuine, the experiences are real,
          and the memories last a lifetime.
        </Typography>
        <Typography variant="body1" paragraph style={{ fontSize: "2.5rem" }}>
          As parents and caregivers,{" "}
          <b style={{ fontSize: "3rem", color: "#5a5a84" }}>
            we understand the challenge of introducing the digital world to the
            younger generation.{" "}
          </b>
          That's why we've built
          <b style={{ fontSize: "3rem", fontWeight: "bold" }}> uFam</b> to be a
          learning platform as much as it is a social one, guiding children and
          teenagers through the nuances of online communication with a focus on
          digital literacy and citizenship.
        </Typography>
        <Typography variant="body1" paragraph style={{ fontSize: "2.5rem" }}>
          Our commitment is to continuously evolve with the needs of our
          families. We dedicate ourselves to creating features that enhance
          communication, celebrate milestones, and safeguard the wellbeing of
          all our members. From our family to yours, we welcome you to{" "}
          <b style={{ fontSize: "3rem", fontWeight: "bold" }}>uFam</b>
          <b style={{ fontSize: "3rem", color: "#5a5a84" }}>
            {" "}
            - where family comes first, always.
          </b>
        </Typography>
        <Typography variant="body1" paragraph style={{ fontSize: "2.5rem" }}>
          Join us on this journey and be a part of a growing movement that's
          reshaping the way families interact online. Welcome to the{" "}
          <b style={{ fontSize: "3rem", fontWeight: "bold" }}>uFam </b>
          community – where every family member has a place, a voice, and a
          chance to thrive in the digital age.
        </Typography>
      </Box>
    </Container>
  );
}

export default AboutUs;
