import { Box } from "@mui/material";
import React from "react";
import Faq from "react-faq-component";

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Why uFam?",
      content:
        "We aim to provide a healthy online space to new generations so they can learn how to use social media under family's umbrella.",
    },
    {
      title: "Why don't eggs tell jokes?",
      content: "They'd crack each other up.",
    },
    {
      title: "I'm reading a book on anti-gravity.",
      content: "It's impossible to put down!",
    },
    {
      title: "What do you call an elephant that doesn't matter?",
      content: "Irrelephant lol",
    },
    {
      title: "What do you call a fake noodle?",
      content: "An impasta.",
    },
    {
      title: "How do you make a tissue dance?",
      content: "Put a little boogie in it.",
    },
    {
      title: "Why did the bicycle fall over?",
      content: "Because it was two-tired!",
    },
    {
      title: "What do you call cheese that isn't yours?",
      content: "Nacho cheese.",
    },
    {
      title: "What do you get when you cross a snowman and a vampire?",
      content: "Frostbite.",
    },
    {
      title: "Why don't skeletons fight each other?",
      content: "They don't have the guts.",
    },
    {
      title: "What did the janitor say when he jumped out of the closet?",
      content: "Supplies!",
    },
    {
      title: "What's orange and sounds like a parrot?",
      content: "A carrot.",
    },
    {
      title: "Why did the golfer bring two pairs of pants?",
      content: "In case he got a hole in one.",
    },
  ],
}


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
        <Box sx={{ "& .faq-row": { fontSize: "2rem", margin: "10px" } }}>
          <Faq data={data} />
        </Box>
      </Box>
    </Box>
  );
}

export default Faqweb
