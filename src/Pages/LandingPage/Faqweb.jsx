import { Box } from "@mui/material";
import React from "react";
import Faq from "react-faq-component";

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: (
        <div
          style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: "10px" }}
        >
          Why uFam?
        </div>
      ),
      content: (
        <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>
          We aim to provide a healthy online space to new generations so they
          can learn how to use social media under family's umbrella.
        </div>
      ),
    },
    {
      title: (
        <div
          style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: "10px" }}
        >
          Why don't eggs tell jokes?
        </div>
      ),
      content: (
        <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>
          They'd crack each other up.
        </div>
      ),
    },
    {
      title: (
        <div
          style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: "10px" }}
        >
          I'm reading a book on anti-gravity.
        </div>
      ),
      content: (
        <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>
          It's impossible to put down!
        </div>
      ),
    },
    {
      title: (
        <div
          style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: "10px" }}
        >
          What do you call an elephant that doesn't matter?
        </div>
      ),
      content: (
        <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>
          Irrelephant lol
        </div>
      ),
    },
    {
      title: (
        <div
          style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: "10px" }}
        >
          What do you call a fake noodle?
        </div>
      ),
      content: (
        <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>
          An impasta.
        </div>
      ),
    },
    {
      title: (
        <div
          style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: "10px" }}
        >
          How do you make a tissue dance?
        </div>
      ),
      content: (
        <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>
          Put a little boogie in it.
        </div>
      ),
    },
    {
      title: (
        <div
          style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: "10px" }}
        >
          Why did the bicycle fall over?
        </div>
      ),
      content: (
        <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>
          Because it was two-tired!
        </div>
      ),
    },
    {
      title: (
        <div
          style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: "10px" }}
        >
          What do you call cheese that isn't yours?
        </div>
      ),
      content: (
        <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>
          Nacho cheese.
        </div>
      ),
    },
    {
      title: (
        <div
          style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: "10px" }}
        >
          What do you get when you cross a snowman and a vampire?
        </div>
      ),
      content: (
        <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>Frostbite.</div>
      ),
    },
    {
      title: (
        <div
          style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: "10px" }}
        >
          Why don't skeletons fight each other?
        </div>
      ),
      content: (
        <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>
          They don't have the guts.
        </div>
      ),
    },
    {
      title: (
        <div
          style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: "10px" }}
        >
          What did the janitor say when he jumped out of the closet?
        </div>
      ),
      content: (
        <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>Supplies!</div>
      ),
    },
    {
      title: (
        <div
          style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: "10px" }}
        >
          What's orange and sounds like a parrot?
        </div>
      ),
      content: (
        <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>A carrot.</div>
      ),
    },
    {
      title: (
        <div
          style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: "10px" }}
        >
          Why did the golfer bring two pairs of pants?
        </div>
      ),
      content: (
        <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>
          In case he got a hole in one.
        </div>
      ),
    },
  ],
};

function Faqweb() {
  return (
    <Box sx={{ width: "100%", height: "100vh", mt: 0 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "30vh",
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
        <Faq data={data} />
      </Box>
    </Box>
  );
}

export default Faqweb;
